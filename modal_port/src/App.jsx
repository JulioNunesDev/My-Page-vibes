import { ModalMain } from "./styles/modalMain";
import info from "./assets/info.png";
import julio from "./assets/julio222.jpg";

import rede from "./assets/rede.svg";
import linkedin from "./assets/linkedin.svg";

import file from "./assets/file.svg";
import drive from "./assets/drive.svg";
import student from "./assets/student.svg";
import git from "./assets/git.svg";
import folder from "./assets/folder.svg";
import music from "./assets/msuic.svg";

import cursor from "./assets/curso.svg";

import { Draggable } from "drag-react";
import "./App.css";
import { useState } from "react";
import Modais from "./components/modais";
import ModalGif from "./components/modalGif";
import ModalPlace from "./components/modalPlace";

function App() {
  const [player, setPlayer] = useState(false);

  function alerta() {
    alert("Estou terminando ainda!");
  }

  return (
    <div className="App">
      <ModalMain>
        <header>
          <h1>JS.JS CONFIG 2022 *** MAY 20-05 *** LIVE FROM TR</h1>
          <h1>15:00PM (GMT -3) | BRT</h1>
        </header>

        <div className="bio">
          <header>
            <h1>***</h1>
            <h1>BIO.DMG</h1>
            <img src={info} alt="info user" />
          </header>

          <div className="box-info">
            <div className="info-user">
              <div className="img-user">
                <img src={julio} alt="" />
              </div>

              <div className="info-user-titles">
                <h1>
                  Julio Nunes <span>HE/HIM</span>
                </h1>
                <h2>Developer in Study</h2>
                <p>Construção de page Static, SPA & SSR</p>
              </div>
            </div>
            <div className="social">
              <h1>SOCIAL LINKS: </h1>
              <div className="media-social">
                <a
                  href="https://www.linkedin.com/in/julionunesdev/"
                  target="_blank"
                >
                  {" "}
                  <img src={linkedin} alt="" />
                </a>
                <a href="https://julionunes.tk/" target="_blank">
                  {" "}
                  <img src={rede} alt="" />
                </a>
              </div>
              <h2>Brasil</h2>
            </div>
          </div>
        </div>

        <div className="pastas">
          <div className="stand-one">
            <a onClick={alerta} href="">
              <img src={folder} alt="" />
            </a>
            <a href="https://github.com/JulioNunesDev" target="_blank">
              <img src={git} alt="" />
            </a>
            <a onClick={alerta} href="">
              <img src={music} alt="" />
            </a>
          </div>

          <div className="stand-two">
            <a onClick={alerta} href="">
              <img src={drive} alt="" />
            </a>
            <a onClick={alerta} href="">
              <img src={file} alt="" />
            </a>
            <a onClick={alerta} href="">
              <img src={student} alt="" />
            </a>
          </div>
          <img className="curso" src={cursor} alt="cursor" />
          <ModalPlace />
          <ModalGif />
        </div>

        <Modais player={player} setPlayer={setPlayer} />
      </ModalMain>
    </div>
  );
}

export default App;
