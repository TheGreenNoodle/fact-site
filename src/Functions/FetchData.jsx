import { useState, useEffect } from "react";

function FetchData({
  setData,
  textData,
  dataPropNameText,
  imgData,
  apiHomeImg,
  dataPropNameImg,
  imgAlt,
}) {
  useEffect(() => {
    fetch(textData)
      .then((res) => res.json())
      .then((msg) =>
        setData((oldData) => {
          return { text: msg[dataPropNameText], ...oldData };
        })
      );
    fetch(imgData)
      .then((res) => res.json())
      .then((newImg) =>
        setData((oldData) => {
          return {
            ...oldData,
            img: apiHomeImg + newImg[dataPropNameImg],
          };
        })
      );
  }, []);
}

export { FetchData };
