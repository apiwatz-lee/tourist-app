import React from "react";
import { useState, useEffect } from "react";
import "../style/HomePage.css";
import axios from "axios";
import TravelList from "./TravelList";

function HomePage() {
  const [message, setMessage] = useState("");
  const [list, setList] = useState([]);

  const getTrips = async () => {
    try {
      const result = await axios.get(`http://localhost:4001/trips?keywords=${message}`);
      setList(result.data.data);
    } catch (error) {
      console.log(error, "error message");
    }
  };

    useEffect(() => {
        getTrips();
    }, [message]);

  return (
    <main className="Header-wrapper">
      <h1 className="topic-element">เที่ยวไหนดี</h1>

      <section className="searching-wrapper">
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
      </section>

      <TravelList list={list} setMessage={setMessage} message={message} />


    </main>
  );
}

export default HomePage;
