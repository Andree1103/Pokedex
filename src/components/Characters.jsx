import axios from 'axios';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import AppNavbar from './AppNavbar';
import CharacterPokemon from './CharacterPokemon';
import pika from '../assets/pokemon-6.svg'
//import Pagination from './Pagination';

const Characters = () => {
    const UserName = useSelector(state => state.userName)

    const [characters, setCharacters] = useState([])
    const [inputSearch, setInputSearch] = useState("")
    const [type, setType] = useState([])
    const navigate = useNavigate()
    //page
    //const [loading , setLoadign] = useState(false);
    //const [currentPage, setCurrentPage] = useState(1);
    //const [ postsPerPage , setPostsPerPage] = useState(10);
    

    const [page, setPage] = useState(1);
    const pokemonsPerPage = 20;
    const lastIndex = page * pokemonsPerPage;
    const firstIndex = lastIndex - pokemonsPerPage;
    const pokemonsPaginated = characters?.slice(firstIndex, lastIndex)
    const totalPages = Math.ceil(characters?.length / pokemonsPerPage);
    

    const pages = [];
    for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
    }

    /*useEffect(()=> {
        const fetchPosts = async () => {
            setLoadign(true)
            const res = await axios.get('https://pokeapi.co/api/v2/pokemon/?offset=0&limit=100')
            //const res = await axios.get('https://pokeapi.co/api/v2/pokemon/')
            setCharacters(res.data.results)
            setLoadign(false)
        }
        fetchPosts();
    }, []);
    console.log(characters);*/

    // get
    //const indexOfLastPost = currentPage * postsPerPage
    //const indexOfFirstPost = indexOfLastPost- postsPerPage
    //const currentPost = characters.slice(indexOfFirstPost, indexOfLastPost)

    //page
    //const paginate = (pageNumber) => setCurrentPage(pageNumber)


    useEffect(() => {
        axios.get('https://pokeapi.co/api/v2/pokemon/?offset=0&limit=1279')
            .then(res => setCharacters(res.data.results))

        axios.get('https://pokeapi.co/api/v2/type/')
            .then(res => setType(res.data.results))
    }, [])

    const search = () => {
        navigate(`/characters/${inputSearch.toLocaleLowerCase()}`)
    }

    const filterType = e => {
        setPage(1)
        axios.get(e.target.value)
            .then(res => setCharacters(res.data.pokemon))
    }
    console.log(pokemonsPaginated)
    return (
        <div>
            <AppNavbar/>
            <h1 style={{padding:'2rem', fontWeight:'bold'}}>POKEDEX <img className='pika' src={pika} alt="" /> </h1>
            <p style={{fontWeight:'600', paddingBottom:'1rem'}}>Welcome <span style={{fontWeight:'bold',color:'#ff5252'}}>{UserName}</span></p>
            <div className='btn_page'>
                <button className='btn_next' onClick={() => setPage(page - 1)} disabled={page === 1}>
                    Prev
                </button>
                {page} / {totalPages}
                <button className='btn_next'
                    onClick={() => setPage(page + 1)}
                    disabled={page === totalPages}
                >
                    Next
                </button>
            </div>
            <div className='search_container'>
                <div>
                <input className='input_search' type="text" placeholder='search Pokemons' value={inputSearch}
                    onChange={e => setInputSearch(e.target.value)} />
                <button onClick={search} className='btn_search'>Search</button>
                </div>
                <div>
                <select onChange={filterType} name="" id="" className='select_type'>
                        <option>All Pokemons</option>
                    {type.map(types => (
                        <option value={types.url} key={types.url}>{types.name}</option>
                    ))}
                </select>
            </div>
            </div>
            
            <div className='character-list'>
                   
                {pokemonsPaginated?.map(character => (
                    <CharacterPokemon
                        url={character.url ? character.url : character.pokemon.url}
                        key={character.url ? character.url : character.pokemon.url} />
                ))}
            </div>
        </div>
    );
};

export default Characters;

