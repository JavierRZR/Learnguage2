import axios from "axios";
const fetchRandomeName = async () => {
  try {
    const response = await axios.get(`https://randomuser.me/api/`);
    const data = response.data.results[0];
    const name = `${data.name.title} ${data.name.first} ${data.name.last}`;
    return name;
  } catch (error) {
    console.log(error);
    return "";
  }
};

export default fetchRandomeName;
