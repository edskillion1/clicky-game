import React, { Component } from 'react';

import FadeIn from '../transitions/fade-in';
import CharacterBox from './characterBox';
import ScoreDisplay from './scoredisplay';

const shuffleArray = arr => (
    arr
      .map(a => [Math.random(), a])
      .sort((a, b) => a[0] - b[0])
      .map(a => a[1]) 
);

const initialChars = [
    {
        name: 'TY_Hilton',
        img: 'img/250x180/ty_hilton.png',
        clicked: false
    },
    {
        name: 'Jared Goff',
        img: 'img/250x180/jared_goff.png',
        clicked: false
    },
    {
        name: 'Alvin Kamara',
        img: 'img/250x180/alvin_kamara.png',
        clicked: false
    },
    {
        name: 'Melvin Gordon',
        img: 'img/250x180/melvin_gordon.png',
        clicked: false
    },
    {
        name: 'Drew Brees',
        img: 'img/250x180/drew_brees.png',
        clicked: false
    },
    {
        name: 'Rob Gonkowski',
        img: 'img/250x180/rob_gronkowski.png',
        clicked: false
    },
    {
        name: 'Tom Brady',
        img: 'img/250x180/tom_brady.png',
        clicked: false
    },
    {
        name: 'Todd Gurley',
        img: 'img/250x180/todd_gurley.png',
        clicked: false
    },
    {
        name: 'Amari Cooper',
        img: 'img/250x180/amari_cooper.png',
        clicked: false
    },
    {
        name: 'Russell Wilson',
        img: 'img/250x180/russell_wilson.png',
        clicked: false
    },
    {
        name: 'Brandin Cooks',
        img: 'img/250x180/brandin_cooks.png',
        clicked: false
    },
    {
        name: 'Antonio Gates',
        img: 'img/250x180/antonio_gates.png',
        clicked: false
    },
    {
        name: 'Darren Sproles',
        img: 'img/250x180/darren_sproles.png',
        clicked: false
    },
	{
        name: 'Pat Mahomes',
        img: 'img/250x180/pat_mahomes.png',
        clicked: false
    },
]

export default class Board extends Component {

    constructor(props){
        super(props);

        this.state = {
            user: {
                score: 0 
            },
            characters: shuffleArray( initialChars )
        };
    }

    onCharacterClick = ( index ) =>{
        if( !this.state.characters[index].clicked ){
            this.setState({
                characters: shuffleArray( this.state.characters.map( (character, current) =>  {
                    return ( current === index ) ? { ...character, clicked:true } : character
                })),
                user: {
                    ...this.state.user,
                    score: this.state.user.score + 1
                }
            });
            //and shuffle
        } else {
            this.setState({
                characters: shuffleArray(this.state.characters.map( character => { return { ...character, clicked : false } })),
                user: {
                    ...this.state.user,
                    score: 0
                }
            });
            //and shuffle
        }
        
    }

    render(){
        return (
            <div className="Board">
                <FadeIn 
                    in={true}
                    duration={450}
                    length={'30px'}
                    direction={'bottom'}
                    delay={'1s'}>
                    <h4>Try to click on every NFL Player once. Once you click a player the grid will shuffle.<br/>Try not to click the same NFL Player twice or the game will start all over!</h4>
                </FadeIn>
                <FadeIn 
                    in={true}
                    duration={500}
                    direction={'bottom'}
                    delay={'1.5s'}>
                    <ScoreDisplay
                        score={this.state.user.score} />
                </FadeIn>
                <CharacterBox 
                    characters={this.state.characters} 
                    onCharacterClick={this.onCharacterClick} />
            </div>
        )
    }

}