import axios from "axios";
import React from "react";
import { useState, useEffect  } from "react";
import api from '../services/api'

const moviesUrl = api.get('/filmes') 

export default function Home() {

    const [movies, setMovies] = useState([])

    useEffect(() => {

        axios.get("https://bd-filmes.herokuapp.com/filmes")
        .then(response => {
            setMovies(response.data)
        })
        console.log(movies)
        
    }, [])
    
    return (
        <article>
            <section id="main">
                {movies.map(movie => {
                    return(
                        <div key={movie.id}>
                           <p>{movie.nome}</p> 
                        </div>
                    )
                })}
            </section>
        </article>
    )
}