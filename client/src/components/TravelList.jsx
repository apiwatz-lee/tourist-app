import React from "react";
import "../style/TravelList.css";
import { IoIosLink } from "react-icons/io";

function Main({ list, setMessage, message }) {
 
    const travelList =  list.map((item, index) => {
        return (
          <main className="Main-wrapper" key={index}>

            <section className="picture-container">
              <img className="picture-main" src={item.photos[0]} alt="" />
            </section>

            <section className="information-container">

              <h1 className="topic">{item.title}</h1>

              <p className="description">
                {item.description.substring(0, 100)}
              </p>

              <a className="readMore" href={item.url} target="_blank">
                อ่านต่อ
              </a>

              <div className="category-wrapper">
                <span>หมวด</span>

                {item.tags.map((tag, j) => {
                  return (
                    <p
                      className="each-category"
                      key={j}
                      onClick={() => {
                        setMessage(message ? `${message} ${tag}` : tag);
                      }}
                    >
                      {tag}
                    </p>
                  );
                })}
              </div>

              <div className="image-preview-wrapper">
                {item.photos.map((photo, i) => {
                  return (
                    i > 0 && (
                      <img
                        className="image-preview"
                        src={photo}
                        alt=""
                        key={i}
                      />
                    )
                  );
                })}
              </div>

              <div 
                className="copy-link"  
                onClick={() => {
                  navigator.clipboard.writeText(item.url)
                  alert(`Copy ${item.url} to Clipboard`)
                  }}>
                <IoIosLink/>
              </div>
                   
            </section>

          </main>
        );
      })

  return (
    <>
      {travelList}
    </>
  );
}

export default Main;
