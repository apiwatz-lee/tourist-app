import React from "react";
import "../style/Main.css";

function Main({ list, setMessage, message }) {
 

  return (
    <>
      {list.map((item, index) => {
        return (
          <div className="Main-wrapper" key={index}>

            <div className="picture-container">
              <img className="picture-main" src={item.photos[0]} alt="" />
            </div>

            <div className="information-container">
              <div className="topic">{item.title}</div>
              <div className="description">
                {item.description.substring(0, 100)}
              </div>

              <a className="readMore" href={item.url} target="_blank">
                อ่านต่อ
              </a>

              <div className="category-wrapper">
                <span>หมวด</span>
                {item.tags.map((tag, j) => {
                  return (
                    <div
                      className="each-category"
                      key={j}
                      onClick={() => {
                        setMessage(message ? `${message} ${tag}` : tag);
                      }}
                    >
                      {tag}
                    </div>
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

              <a
                href="#"
                className="copy-link"
                onClick={() => {
                  navigator.clipboard.writeText(item.url);
                }}
              >
                copy link
              </a>
              
            </div>
          </div>
        );
      })}
    </>
  );
}

export default Main;
