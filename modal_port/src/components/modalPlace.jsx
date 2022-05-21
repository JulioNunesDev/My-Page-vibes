
import styled from 'styled-components'
import tere from '../assets/teresina.jpg'


const ModalPlay = styled.div`
position: absolute;
bottom: 200px;
right: 20px;
width: 400px;
height: auto;
background-color: #000;
padding: 10px 10px;
z-index: 3;

.unbox{
width: 100%;
height: 150px;


img{
    width: 100%;
    height: 100%;
}
}

`
export default function ModalPlace(){
    return(
        <ModalPlay>
        <header><h1>2022</h1><h1>TERESINA</h1><h1>PI</h1></header>
 
        <div className='unbox'>
 
          <img src={tere} alt="" />     
        </div>
        </ModalPlay>
    )
}