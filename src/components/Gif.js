import React, { useEffect, useState } from 'react';
import getGifs from '../services/getGifs';
import './Gif.css';


export default function Gif ({params}) {

        const [gifs, setGifs] = useState([]);
        useEffect(function  () {
        getGifs({keyword: params}).then(gifs => setGifs(gifs));
        }, [params]);
        
    return (
        <div>
            <h1>{params}</h1>
            <img src={gifs[0]?.url} alt={gifs[0]?.tittle} />
            <h2>{gifs[0]?.tittle}</h2>
        </div>
    )
}
