import styled from "styled-components";
import 'animate.css'
import { useSelector } from "react-redux";

function MovieDesc({ children }) {

    const showBg = useSelector((state) => state)

    const Bg = showBg.desc.img2


    const Desc = styled.section`

    width: 80vw;
    height: 60vh;
    position: fixed;
    z-index: 1;
    margin-top: 10vh;
    align-self: flex-start;
    justify-self: center;
    display: flex;
    align-items: center;
    border-radius: 5px;

    animation: fadeIn; 
    animation-duration: 1s; 

`

    const BgImg = styled.div`

        position: absolute;
        border-radius: 5px;
        background-image: url(${Bg});
        background-repeat: no-repeat;
        background-size: cover;
        width: 80vw;
        height: 70vh;

       

        ::before{
            content: "";
            background: rgb(0,0,0);
            background: linear-gradient(90deg, #000000e1 47%, rgba(0,212,255,0) 100%);
            width: 80vw;
            height: 70vh;
            position: absolute;
        }

    `

    return (
        <Desc>
            <div className="poster-desc">
                {children}
            </div>
            <BgImg alt="bg-img" />


        </Desc>
    )
}





export default MovieDesc