
import styled from 'styled-components'
import elon from '../assets/elon.gif'
import { Draggable } from 'drag-react'

const ModalPlay = styled.div`
position: absolute;
bottom: 10px;
right: 70px;
width: 300px;
height: auto;
background-color: #000;
padding: 10px 10px;
z-index: 4;


.unbox{
width: 100%;
height: auto;

img{
    width: 100%;
}
}

`
export default function ModalGif(){
    return(
        
        <ModalPlay>
            
        <header><h1>***</h1><h1>FAV GIF</h1><h1>***</h1></header>
 
        <div className='unbox'>
 
          <img src={elon} alt="" />     
        </div>
        
        </ModalPlay>
    )
}