import styled from "styled-components";

export const ModalPlay = styled.div`
position: absolute;
top: 90px;
right: 20px;
width: 400px;
height: auto;
background-color: #000;
padding: 10px 10px;


box-shadow: 10px 10px 1px black;

.unbox{
  margin-top: 15px;
    display: flex;
    background-color: #ccc;
    width: 100%;
    height: auto;
    padding: 10px;
    gap: 10px;
}

header{
    width: 100%;
    height: 40px;
    background-color: #000;
    display: flex;
    align-items: center;
    
    h1{
        width: 100%;
        display: flex;
        justify-content: center;
        font-family: var(--font-ibm);
        font-weight: 400;
        font-size: 18px;
        color: #fff;
        
    }
}
    .imgs{
        width: auto;
        height: auto;
    
           img{
            border-radius: 50%;
         width: 120px;
         height: 120px;
         object-fit: cover;
     } 
    }
    
    .titles{
       
        width: 100%;
        height: auto;
        h2{
            font-family: var(--font-ibm);
            font-size: 22px;
        }
        h3{
            font-family: var(--font-ibm);
            font-weight: 400;
        }

        .progress{
            width: 100%;
            height: 25px;
          
        }

        .players{
            width: 100%;
            height: auto;
            display: flex;
            justify-content: space-around;

            button{
                border: 0;
                background-color: transparent;
                cursor: pointer;
            }
            img{
                width: 40px;
                object-fit: contain;
                height: 100%;
            }
        }
    }
     
    


`