import { useEffect, useRef, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
  IconMic,
  IconMutedMic,
  IconExit,
  IconCamera,
  IconMutedCamera,
  IconSend,
} from "../assets/svg";

import { io } from "socket.io-client";
import { MediaConnection, Peer } from "peerjs";

import { stopMicrophone, stopCamera } from "../utils/mediaDevicesFunction";
import Input2 from "../ui/Input2";

const socket = io(`https://learnguage-server.onrender.com`); //render.com deploy
// const socket = io(`http://localhost:4000/`);

const myPeer = new Peer({
  config: {
    iceServers: [
      {
        urls: "stun:stun.relay.metered.ca:80",
      },
      {
        urls: "turn:standard.relay.metered.ca:80",
        username: "c3190f0d456daa1bea81035e",
        credential: "1CiNoMK0EYZGqJfT",
      },
      {
        urls: "turn:standard.relay.metered.ca:80?transport=tcp",
        username: "c3190f0d456daa1bea81035e",
        credential: "1CiNoMK0EYZGqJfT",
      },
      {
        urls: "turn:standard.relay.metered.ca:443",
        username: "c3190f0d456daa1bea81035e",
        credential: "1CiNoMK0EYZGqJfT",
      },
      {
        urls: "turns:standard.relay.metered.ca:443?transport=tcp",
        username: "c3190f0d456daa1bea81035e",
        credential: "1CiNoMK0EYZGqJfT",
      },
    ],
  },
});

export default function Room() {
  const router = useNavigate();
  const params = useParams();

  const roomId = params.roomId;

  const [userId, setUserId] = useState<string>("");
  const userIdRef = useRef<string>(userId);

  const [chat, setChat] = useState<{ msg: string; incoming: boolean }[]>([]);
  const [message, setMessage] = useState("");

  const [cameraMuted, setCameraMuted] = useState(false);
  const [micMuted, setMicMuted] = useState(false);

  myPeer.on("open", (id: string) => {
    setUserId(id);
    userIdRef.current = id;
    socket.emit("join-room", roomId, id);
  });

  const peers: { [key: string]: MediaConnection } = {};
  const [usuarios, setUsuarios] = useState<string[]>([]);
  const myVideo = document.createElement("video");
  myVideo.muted = true;
  const mediaStream = useRef<MediaStream>(new MediaStream());

  useEffect(() => {
    navigator.mediaDevices
      .getUserMedia({
        video: true,
        audio: true,
      })
      .then((stream) => {
        addVideoStream(myVideo, stream);
        mediaStream.current = stream;

        myPeer.on("call", (call) => {
          call.answer(stream);

          const userVideo = document.createElement("video");
          call.on("stream", (userVideoStream) => {
            addVideoStream(userVideo, userVideoStream);
          });
        });

        socket.on("user-connected", (userId) => {
          console.log("User connected: " + userId);

          connectToNewUser(userId, stream);
        });

        socket.on("user-disconnected", (userId) => {
          if (peers[userId]) peers[userId].close();
        });

        socket.on("broadcast-newMessage", (content) => {
          const messagerId = content.userId;
          const msg = content.msg;

          setChat((prevChat) => [
            ...prevChat,
            { incoming: messagerId == userIdRef.current, msg: msg },
          ]);
        });

        //Carga evento de salida, para notificar a la sala de nuestro borrado.
        const handleBeforeUnload = (event: BeforeUnloadEvent) => {
          // Perform actions before the component unloads
          event.preventDefault();
          disconnectMe();
          event.returnValue = "";
        };
        window.addEventListener("beforeunload", handleBeforeUnload);
        return () => {
          window.removeEventListener("beforeunload", handleBeforeUnload);
          socket.disconnect();
        };
      });
  }, []);

  function connectToNewUser(userId: string, stream: MediaStream) {
    const call = myPeer.call(userId, stream);
    const video = document.createElement("video");
    call.on("stream", (userVideoStream) => {
      addVideoStream(video, userVideoStream);
    });
    call.on("close", () => {
      video.remove();
    });

    peers[userId] = call;
    setUsuarios((prev) => [...prev, userId]);
  }

  function addVideoStream(video: HTMLVideoElement, stream: MediaStream) {
    video.srcObject = stream;
    video.addEventListener("loadedmetadata", () => {
      video.play();
    });
    const videoGrid = document.getElementById("grid-roomCameras");
    let numCols = 0;
    if (videoGrid) {
      if (videoGrid?.children.length) {
        numCols = Math.round(Math.sqrt((videoGrid.children.length + 1) / 2));
      }
      videoGrid.style.gridTemplateColumns = `repeat(${numCols}, 1fr)`;
      video.className = "rounded-2xl";
      videoGrid.append(video);
    }
  }

  function emitirMensaje(message: string) {
    if (!message) return;

    socket.emit("emit-message", message, roomId, userId);
    setMessage("");
  }

  //Emitimos el mensaje de aviso para el resto de salas y nos desconectamos.
  function disconnectMe() {
    socket.emit("disconnectMe", { userId, roomId });
    socket.disconnect();

    stopCamera(mediaStream.current);
    stopMicrophone(mediaStream.current);

    router("/");
  }

  return (
    <>
      <main className="w-full h-full flex flex-row flex-wrap justify-center align-middle">
        {/* INFO & CHAT */}
        <section
          id="room-info"
          className="w-[50%] h-[80vh] py-24 px-24 flex flex-row"
        >
          <div className="h-full w-[35%] py-5 px-2 flex flex-col overflow-y-auto overflow-x-hidden break-words bg-neutral-900 rounded-s-xl border-e-2 border-neutral-300/20">
            {usuarios &&
              usuarios.map((peer, index) => {
                return <div key={`${peer} - ${index}`}>{peer}</div>;
              })}
          </div>
          <div className="flex flex-col h-full w-[75%] max-w-full bg-neutral-900 rounded-e-xl  ">
            <div
              id="chat-box"
              className="h-full p-3 flex gap-3 flex-col overflow-y-auto overflow-x-hidden break-words"
            >
              {chat.map((msg, index) => {
                return (
                  <div
                    key={index}
                    className={` max-w-[85%]  rounded-md py-3 px-5 bg-neutral-800 text-white text-xs   
                      ${msg.incoming ? "self-end bg-pink-700/90 rounded-tr-none" : "self-start rounded-tl-none"}`}
                  >
                    {msg.msg}
                  </div>
                );
              })}
            </div>
            <div className="flex items-center p-3 gap-x-5 ">
              <Input2
                id=""
                name=""
                type="text"
                className={"bg-stone-300 text-neutral-800"}
                value={message}
                handleChange={(msg: string) => {
                  setMessage(msg);
                }}
                onKeyDown={(event, msg: string) => {
                  if (event.key == "Enter" || event.keyCode == 13) {
                    emitirMensaje(msg);
                  }
                }}
              />
              <button
                className="w-[50px] h-[50px] mt-2
                            rounded-full 
                            flex justify-center items-center 
                            bg-pink-700 hover:bg-pink-600"
                onClick={() => {
                  emitirMensaje(message);
                }}
              >
                {<IconSend />}
              </button>
            </div>
          </div>
        </section>
        {/* CAMARAS */}
        <section
          id={"grid-roomCameras"}
          className="w-[50%] h-[80vh] max-w-[80vh]"
        ></section>
        {/* ICONOS */}
        <section
          id="panel-control"
          className="w-[600px] p-5 rounded-xl bg-neutral-900 flex flex-row gap-5 justify-center"
        >
          <div
            className={`w-[50px] h-[50px] rounded-full 
                                flex justify-center items-center
                                ${
                                  !cameraMuted
                                    ? "bg-neutral-100"
                                    : "bg-neutral-950"
                                } 
                                hover:bg-neutral-700/70`}
            onClick={() => {
              stopCamera(mediaStream.current);
              setCameraMuted((prev) => !prev);
            }}
          >
            {!cameraMuted ? (
              <IconCamera color={!cameraMuted ? "#000000" : "#ffffff"} />
            ) : (
              <IconMutedCamera color={!cameraMuted ? "#000000" : "#ffffff"} />
            )}
          </div>
          <div
            className={`w-[50px] h-[50px] rounded-full
                                flex justify-center items-center
                                ${
                                  !micMuted
                                    ? "bg-neutral-100"
                                    : "bg-neutral-950"
                                }  
                                hover:bg-neutral-700/70`}
            onClick={() => {
              stopMicrophone(mediaStream.current);
              setMicMuted((prev) => !prev);
            }}
          >
            {!micMuted ? (
              <IconMic color={!micMuted ? "#000000" : "#ffffff"} />
            ) : (
              <IconMutedMic color={!micMuted ? "#000000" : "#ffffff"} />
            )}
          </div>
          <div
            className="w-[50px] h-[50px] bg-neutral-950 rounded-full flex justify-center items-center bg-red-700/70 hover:bg-red-700"
            onClick={() => {
              disconnectMe();
            }}
          >
            {<IconExit />}
          </div>
        </section>
      </main>
    </>
  );
}
