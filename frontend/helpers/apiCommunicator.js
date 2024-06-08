import axios from "axios";

export const getNewPassword = async () => {
  const res = await axios.get("/");
  if (res.status != 200) {
    throw new Error("Unable to generate password, please retry!");
  }
  const data = await res.data;
  console.log(data);
  return data.password;
};
