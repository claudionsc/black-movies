import axios from "axios";
import React from "react";
import { useState, useEffect  } from "react";
import { useSelector, useDispatch } from "react-redux";
import { showDesc } from "../../store";
import MovieDesc from "../style/MovieDesc";
import { HiXMark } from 'react-icons/hi2'



export default function Home() {

    const dispatch = useDispatch()
    const ShowDesc = useSelector((state) => state)
    // console.log(ShowDesc)

    const [movies, setMovies] = useState([])
    const [desc, setDesc] = useState(false)


    useEffect(() => {

        axios.get("https://bd-filmes.herokuapp.com/filmes")
        .then(res => {
            setMovies(res.data.filmes)
        })
    }, [])

    const HandleClick = () => {
            setDesc(true)
        }
    
    return (
        <main className="main-movies">
            <div id="main">
                {movies.map(movie => {
                    return(
                        
                        <div onClick={HandleClick} className="movie-item" key={movie.id}>
                           <h1 style={{margin: "25px 0"}}>{movie.nome}</h1> 
                           <img onClick={() =>dispatch(showDesc(movie))} className="poster" alt={movie.nome} src={movie.img}></img>
                        </div>
                        
                    )
                })}
                {desc === true &&
                    <MovieDesc>
                         <img className="poster-desc-img" alt={ShowDesc.desc.nome} src={ShowDesc.desc.img}></img> 
                     <div className="poster-desc-txt">
                         <h3 style={{marginBottom: "10px"}}>Nome: {ShowDesc.desc.nome}</h3>
                         <p>{ShowDesc.desc.descricao}</p>
                         
                     </div>
                         <div className="x-mark" onClick={() => {
                            setDesc(false)
                         }}>
                        <HiXMark />
                        </div>
                    </MovieDesc>
                }
            </div>
        </main>
    )
}