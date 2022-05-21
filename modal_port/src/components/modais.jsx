import { ModalPlay } from "../styles/modalPlay";

import prev from '../assets/reverse.png'
import prox from '../assets/proximo-botao.png'
import play from '../assets/play-button.png'
import pause from '../assets/pause.png'
import julioteste from '../assets/julioteste.jpg'
import music from '../songs/Harry.mp3'
import { useEffect, useRef } from "react";
import ReactAudioPlayer from 'react-audio-player'


export default function Modais({player,setPlayer}){
  const audioRef = useRef(null)

  useEffect(()=>{
    player ? audioRef.current.play() : audioRef.current.pause()
  },[player])

  function played(){
    
      audioRef.current.play()
    alert('Apenas uma musica por enquanto!')
    setPlayer(!player)
  }
  return(
        <ModalPlay>
        <header><h1>00</h1><h1>PODCAST</h1><h1>***</h1></header>
 
        <div className='unbox'>
 
        <div className="imgs">
          <img src={julioteste} alt="julio img" />
        </div>
        <div className="titles">
          <h2>UM POUCO DE MIM...</h2>
          <h3>DEVELOPER APP</h3>
          <progress className='progress'>100%</progress>
          <div className='players'>
            <button>
            <img src={prev} alt="prev" />
            </button>
            <button onClick={played}>
            <ReactAudioPlayer
             src={music}
           >
            </ReactAudioPlayer>
            {!player ? <img src={play} alt="play - pause" /> : <img src={pause} alt="play - pause" />}
            </button>
            <button>
            <img src={prox} alt="prox" />
            </button>
            <audio  ref={audioRef}>
              <source src={music} type="audio/mp3"/>
            </audio>
          </div>
        </div>
        </div>
        </ModalPlay>
    )
}