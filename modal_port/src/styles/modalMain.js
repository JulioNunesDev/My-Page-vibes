import styled from 'styled-components'

export const ModalMain = styled.div`
position: relative;
width: 1200px;
height: auto;
background-color: #FF5C5C;


header{
    width: 100%;
    height: 50px;
    background-color: #000;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 20px;
    
    h1{
        font-family: var(--font-ibm);
        font-weight: 400;
        font-size: 20px;
        color: #fff;
        
    }    
}

.bio{
    z-index: 3;
    box-shadow: 10px 10px 1px black;
    position: relative;
    margin-top: 25px;
    margin-left: 25px;
    width: 700px;
    height: 400px;
    justify-content: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #000;
    header{
    width: 100%;
    height: 50px;
    background-color: #000;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 20px;
    
    h1{
        font-family: var(--font-ibm);
        font-weight: 400;
        font-size: 20px;
        color: #fff;
        
     }   
     img{
         width: 33px;
         height: auto;
         
     } 
    }  

    .box-info{
        width: 98%;
        height: 330px;
        background-color: #fff;
        display: flex;
        justify-content: center;
        flex-direction: column;
        align-items: center;

        .info-user{
            width: calc(700px/1.1);
            height: calc(330px/2);
            display: flex;
            align-items: center;
         

            .img-user{
                width: 40%;
                height: 100%;
                padding: 10px;
                background-color: #00008B;
                img{
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                    padding: 15px;
                    background-color: #4D7BFF;
                }
            }

            .info-user-titles{
                text-align: center;
                width: 70%;
                height: 100%;
                display: flex;
                align-items: center;
                justify-content: center;
                flex-direction: column;
                h1{
                    justify-content: center;
                    font-size: 35px;
                    font-family: 'Fira Sans';
                    display: flex;
                    align-items: center;
                    
                    gap: 15px;
                    span{
                        font-weight: 300;
                        font-size: 20px;
                        font-family: var(--font-ibm);
                    }
                }
                h2{
                    font-size: 20px;
                    font-family: var(--font-ibm);
                    color: #B0C4DE;

                    line-height: 40px;
                }
                p{
                    font-family: var(--font-ibm);
                    font-size: 19px;
                }
            }
        }
    }

    .social{
        width: 700px;
      
        height: 100px;
        margin-top: 15px;
       border-top: 1px solid #000;
        display: flex;
        align-items: center;
        justify-content: space-around;
       
        h1{
            font-family: var(--font-ibm);
            font-size: 22px;
            font-weight: 400;

        }

        .media-social{
           
            
            gap: 15px;
            display: flex;
            a{
                display: flex;
                align-items: center;
                gap: 10px;
                img{
                 width: auto;
                 
                }

            }
        }
        h2{
            font-family: var(--font-ibm);
            color: #000;
            font-weight: 400;
        }
    }

    
   }
   .pastas{
       z-index: -1;
       margin-left: 25px;
      
        width: auto;
        height: auto;
        margin-bottom: 55px;
       
        .stand-one, .stand-two{
            display: flex;
            align-items: center;
            gap: 55px;
            height: 100%;
          
            margin-top: 15px;
            
            a{
                display: flex;
                align-items: center;
                img{
                    width: 90px;

                }
            }
        }
        .curso{
                position: absolute;
                width: 120px;
                height: 100px;
                bottom: 10px;
            left: 75px;
            }
        
    }

`