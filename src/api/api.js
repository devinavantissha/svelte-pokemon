import axios from "axios";
import {pokemons} from "../store/pokemon.js";
const url="https://pokeapi.co/api/v2/";
const getPokemons=()=>{
    axios.get(url + "pokemon?limit=50&offset=200")
    .then((res)=>{
        res.data.results.forEach((x)=>{
            axios.get(x.url).then((res)=>{
                //store=>mirip database
                pokemons.update((data)=>[...data, res.data]);
            }).catch(err => console.log(err));
        });
    })
    
    .catch((err)=>console.log(err));
};

export {getPokemons};