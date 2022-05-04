import { useState, useEffect } from "react";
import { FetchData } from "../Functions/FetchData";

function Facts({
  textData, //Text Json.
  dataPropNameText, //Property name for text.
  imgData, //Img Json.
  apiHomeImg, //Api home page. Used incase whole url for pic is not in Json.
  dataPropNameImg, //Gets url of img.
  imgAlt, //Incase no image found.
}) {
  const [data, setData] = useState({});

  //Gets image and text data from APIs.
  //The adds it to data by using setData.
  FetchData({
    setData,
    textData,
    dataPropNameText,
    imgData,
    apiHomeImg,
    dataPropNameImg,
    imgAlt,
  });
  // <header className="App-header">
  //   <img className="img" src={data.img} alt={imgAlt} />
  //   <p>{data.text}</p>
  // </header>
  return (
    <div className="factsBox">
      <img
        className="img"
        src="https://static01.nyt.com/images/2021/09/14/science/07CAT-STRIPES/07CAT-STRIPES-jumbo.jpg?quality=75&auto=webp"
        alt={imgAlt}
      />
      <p className="text">{data.text}</p>
    </div>
  );
}

export { Facts };
