import { toast } from "sonner";

const MyToast = () => {
  return (
    // <span
    //   className={`rounded-md bg-neutral-400/10 px-3 py-1
    //     font-mono text-sm
    //     text-neutral-800/50 outline outline-1 outline-neutral-800/30 dark:text-neutral-300/70 dark:outline-neutral-300/20`}
    // >
    //   {children}
    // </span>
    <>
      <button onClick={() => toast("Toast")}>Render Toast</button>
    </>
  );
};

export default MyToast;
