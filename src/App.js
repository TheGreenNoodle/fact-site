// client/src/App.js
import { Facts } from "./Components/Facts";
import { Header } from "./Components/Header";
import { Footer } from "./Components/Footer";

import "./CSS/App.css";

function App() {
  // <Facts
  //   textData="https://meowfacts.herokuapp.com/"
  //   dataPropNameText="data"
  //   imgData="https://cataas.com/cat?json=true"
  //   apiHomeImg="https://cataas.com/"
  //   dataPropNameImg="url"
  //   imgAlt="cat-img"
  // />
  return (
    <div className="App">
      <Header />
      <Facts
        textData="https://meowfacts.herokuapp.com/"
        dataPropNameText="data"
        imgData="https://cataas.com/cat?json=true"
        apiHomeImg="https://cataas.com/"
        dataPropNameImg="url"
        imgAlt="cat-img"
      />
      <Footer />
    </div>
  );
}

export default App;
