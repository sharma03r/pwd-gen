import React, { useEffect, useState } from "react";
import "./Home.css";
import { getNewPassword } from "../../helpers/apiCommunicator";
function Home() {
  const [password, setPassword] = useState(null);
  useEffect(() => {
    async function fetchPassword() {
      const res = await getNewPassword();
      setPassword(res);
    }
    fetchPassword();
  }, []);
  const handleClick = async () => {
    const res = await getNewPassword();
    setPassword(res);
  };
  return (
    <div className="password-section">
      <div className="password-div">
        {password != null ? password : "Click to generate password"}
      </div>
      <hr />
      <button className="button-33" role="button" onClick={handleClick}>
        Generate
      </button>
    </div>
  );
}

export default Home;
