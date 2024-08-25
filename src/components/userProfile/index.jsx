import React, { useState, useEffect } from "react";
import axios from "axios";
import styles from "./styles.module.css";

function UserProfile() {
  const [userName, setUserName] = useState("Louding...");
  const [email, setEmail] = useState("Louding...");
  const [phone, setPhone] = useState("Louding...");

  useEffect(() => {
    setUserName();
  }, []);

  async function fetchUser() {
    setUserName("Louding...");
    setEmail("Louding...");
    setPhone("Louding...");

    function getRandomUser() {
      return Math.floor(Math.random() * 10 + 1).toString();
    }

    const userUrl =
      "https://jsonplaceholder.typicode.com/users/" + getRandomUser();
    try {
      const response = await axios.get(userUrl);
      const { data } = response;
      setUserName(data.name);
      setEmail(data.email);
      setPhone(data.phone);
    } catch (error) {
      console.log("error");
    }
  }

  return (
    <div className={styles.user_container}>
      <h1>{userName}</h1>
      <p>{email}</p>
      <p>{phone}</p>
      <button onClick={fetchUser}>Load New User</button>
    </div>
  );
}

export default UserProfile;
