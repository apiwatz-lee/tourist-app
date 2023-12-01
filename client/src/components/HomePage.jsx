import React from "react";
import { useState, useEffect } from "react";
import "../style/HomePage.css";
import axios from "axios";
import Main from "./Main";

function HomePage() {
  const [message, setMessage] = useState("");
  const [list, setList] = useState([]);

  const getTrips = async () => {
    try {
      console.log(message);
      const result = await axios.get(
        `http://localhost:4001/trips?keywords=${message}`
      );
      setList(result.data.data);
      console.log(result.data.data);
    } catch (error) {
      console.log(error, "error message");
    }
  };

  useEffect(() => {
    getTrips();
    console.log(message);
  }, [message]);

  return (
    <div className="Header-wrapper">
      <h1 className="topic-element">เที่ยวไหนดี</h1>
      <div className="searching-wrapper">
        <label htmlFor="searchTourtistAttraction">ค้นหาที่เที่ยว</label>
        <br />
        <input
          className="searchTourtistAttraction"
          type="text"
          placeholder="หาที่เที่ยวแล้วไปกัน ..."
          onChange={(event) => {setMessage(event.target.value);}}
          value={message}
        />
        <hr />
      </div>
      <Main list={list} setMessage={setMessage} message={message} />
    </div>
  );
}

export default HomePage;
