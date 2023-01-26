import axios from 'axios';
import React, { useEffect } from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { colorTypeGradients } from '../utils/utils';


const CharacterPokemon = ({ url }) => {
    const [character, setCharacter] = useState({})
    const navigate = useNavigate()
    useEffect(() => {
        axios.get(url)
            .then(res => setCharacter(res.data))
    }, [])

    let finalColor;
    if (character.types?.length === 2) {
        finalColor = colorTypeGradients(character.types?.[0].type?.name, character.types?.[1].type?.name, character.types?.length);
    } else {
        finalColor = colorTypeGradients(character.types?.[0].type?.name, character.types?.[0].type?.name, character.types?.length);
    }

    function NameUpper(name) {
        return name?.charAt(0).toUpperCase() + name?.slice(1)
    }
    console.log(character)
    return (
        <li className='col'>
            <div id='card' style={{ background: `linear-gradient(${finalColor[0]}, ${finalColor[1]})` }} onClick={() => navigate(`/characters/${character.id}`)}>
                <img src={character.sprites?.other.dream_world?.front_default} alt="" />
                <div className='content_Card'>
                    <h2>{NameUpper(character.name)}</h2>
                    <div className='cont_poke'>
                            <div className='tipo'>
                            {character.types?.map(type => (
                                <span key={type.type.name} className={type.type.name}>
                                    {type.type.name}</span>
                            ))}
                            </div>
                            <p style={{color:'gray'}}>Type</p>
                            <div className='grid_pokemon'>
                                <div>
                                    <p style={{color:'gray'}}>HP</p>
                                    <span className={character.types?.[0].type.name+"L"}>
                                        {
                                            character.stats?.[0].base_stat
                                        }</span>
                                </div>
                                <div>
                                    <p style={{color:'gray'}}>Attack</p>
                                    <span className={character.types?.[0].type.name+"L"}>
                                    {
                                            character.stats?.[1].base_stat
                                        }
                                    </span>
                                </div>
                                <div>
                                    <p style={{color:'gray'}}>Defense</p>
                                    <span className={character.types?.[0].type.name+"L"}>
                                    {
                                            character.stats?.[2].base_stat
                                        }
                                    </span>
                                </div>
                                <div>
                                    <p style={{color:'gray'}}>Speed</p>
                                    <span className={character.types?.[0].type.name+"L"}>
                                    {
                                            character.stats?.[5].base_stat
                                        }
                                    </span>
                                </div>
                            </div>
                        </div>
                </div>
            </div>
        </li>
    );
};

export default CharacterPokemon;