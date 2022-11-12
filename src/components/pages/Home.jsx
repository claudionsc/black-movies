import axios from "axios";
import React from "react";
import { useState, useEffect  } from "react";
import api from '../services/api'


export default function Home() {

    const [movies, setMovies] = useState([])


    useEffect(() => {

        axios.get("https://bd-filmes.herokuapp.com/filmes")
        .then(res => {
            setMovies(res.data.filmes)
        })
        console.log(movies)
        
    }, [])
    
    return (
        <article className="main-movies">
            <div id="main">
                {movies.map(movie => {
                    return(
                        <div className="movie-item" key={movie.id}>
                           <h1 style={{margin: "25px 0"}}>{movie.nome}</h1> 
                           <img className="poster" alt={movie.nome} src={movie.img}></img>
                        </div>
                    )
                })}
            </div>
        </article>
    )
}