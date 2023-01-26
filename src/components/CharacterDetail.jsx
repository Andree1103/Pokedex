import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { ProgressBar } from 'react-bootstrap';
import { useParams } from 'react-router-dom';

import { colorTypeGradients } from '../utils/utils';
import AppNavbar from './AppNavbar';
import CharacterPokemon from './CharacterPokemon';

const CharacterDetail = () => {
    const {id} = useParams()
    const [pokemon,setPokemon] = useState({})
    useEffect(()=>{
        axios.get(`https://pokeapi.co/api/v2/pokemon/${id}/`)
        .then(res=> setPokemon(res.data))
        .catch(()=> alert('Pokemon no existe'))
    },[id])
    let finalColor;
    if (pokemon.types?.length === 2) {
        finalColor = colorTypeGradients(pokemon.types?.[0].type?.name, pokemon.types?.[1].type?.name, pokemon.types?.length);
    } else {
        finalColor = colorTypeGradients(pokemon.types?.[0].type?.name, pokemon.types?.[0].type?.name, pokemon.types?.length);
    }
    console.log(pokemon)
    return (
        <div>
            <AppNavbar/>
            <div className='detail_content'>
            <div style={{ background: `linear-gradient(${finalColor[0]}, ${finalColor[1]})`}} >
            <img className='img_detail' src={pokemon.sprites?.other.dream_world?.front_default} alt="" />
            </div>
            <h2 className={pokemon.types?.[0].type.name+"L"}>#{id.toString().padStart(4,0)}</h2>
            <div>
                <h1>{pokemon.name?.toString().toUpperCase()}</h1>
                <div className='Inf'>
                <div>
                    <p>Peso</p>
                    <p><b>{pokemon.weight / 10}kg</b></p>
                </div>
                <div>
                    <p>Peso</p>
                    <p><b>{pokemon.height / 10}m</b></p>
                </div>
                </div>
                <div className='tip_hab'>
                        <div className='tips'>
                            <h3>Tipo</h3>
                            <div className='tipo'>
                            {pokemon.types?.map(type => (
                                <span key={type.type.name} className={type.type.name}>
                                    {type.type.name}</span>
                            ))}
                            </div>
                        </div>
                        <div className='tips'>
                            <h3>Habilidades</h3>
                            <div className='habi'>
                            {pokemon.abilities?.map(ability => (
                                <span key={ability.ability.name}>
                                    {ability.ability.name}</span>
                            ))}
                            </div>
                        </div>
                </div>
            </div>
            <h2>Stats</h2>
                            <div className='content_stat'>
                                {pokemon.stats?.map((stat,key)=> (
                                    <div key={key}>
                                        <div className='stat_hab'>
                                        <span>{stat.stat.name.toString().toUpperCase()}:</span>
                                        <span>{stat.base_stat}/150</span>
                                        </div>
                                        <ProgressBar animated now={stat.base_stat} max={150} visuallyHidden/> 
                                        
                                    </div>
                                ))}
                            </div>
            </div>
            <div className='detail_content'>
            <h2 style={{paddingTop: '2rem'}}>Movements</h2>
                <div className='conten_move'>
                    <div className='move_card'>{pokemon.moves?.[0].move.name}</div>
                    <div className='move_card'>{pokemon.moves?.[2].move.name}</div>
                    <div className='move_card'>{pokemon.moves?.[3].move.name}</div>
                    <div className='move_card'>{pokemon.moves?.[4].move.name}</div>
                    <div className='move_card'>{pokemon.moves?.[5].move.name}</div>
                    <div className='move_card'>{pokemon.moves?.[6].move.name}</div>
                    <div className='move_card'>{pokemon.moves?.[7].move.name}</div>
                    <div className='move_card'>{pokemon.moves?.[8].move.name}</div>
                    <div className='move_card'>{pokemon.moves?.[9].move.name}</div>
                    <div className='move_card'>{pokemon.moves?.[10].move.name}</div>
                    <div className='move_card'>{pokemon.moves?.[11].move.name}</div>
                    <div className='move_card'>{pokemon.moves?.[12].move.name}</div>
                    <div className='move_card'>{pokemon.moves?.[13].move.name}</div>
                    <div className='move_card'>{pokemon.moves?.[14].move.name}</div>
                    <div className='move_card'>{pokemon.moves?.[15].move.name}</div>
                    <div className='move_card'>{pokemon.moves?.[16].move.name}</div>
                    <div className='move_card'>{pokemon.moves?.[17].move.name}</div>
                    <div className='move_card'>{pokemon.moves?.[18].move.name}</div>
                    <div className='move_card'>{pokemon.moves?.[19].move.name}</div>
                    <div className='move_card'>{pokemon.moves?.[20].move.name}</div>
                    <div className='move_card'>{pokemon.moves?.[21].move.name}</div>
                    <div className='move_card'>{pokemon.moves?.[22].move.name}</div>
                    <div className='move_card'>{pokemon.moves?.[23].move.name}</div>
                    <div className='move_card'>{pokemon.moves?.[24].move.name}</div>

                </div>
            </div>
        </div>
    );
};

export default CharacterDetail;