import { useState } from 'react'
import './App.css'
import Avatar from "./Avatar.jsx";
import Intro from "./Intro.jsx";
import Skillist from "./Skillist.jsx";

export default function App(){
    const mySkill=[
        {
            skill:'Html',
            level:'Advanced',
            color:'#BA9E96'
        },
        {
            skill:'Css',
            level:'Advanced',
            color:'#efca75'
        },
        {
            skill:'Flex',
            level:'Advanced',
            color:'#aaeaf1'
        },
        {
            skill:'Grid',
            level:'Advanced',
            color:'#f8cea3'
        },
        {
            skill:'Responsiv',
            level:'Advanced',
            color:'#E4F6F8'
        },
        {
            skill:'Bootstrap',
            level:'Advanced',
            color:'#e1bf6f'
        },
        {
            skill:'Javascript',
            level:'Advanced',
            color:'#BA9E96'
        },
        {
            skill:'React',
            level:'Medium',
            color:'#e8ae8b'
        },
        {
            skill:'next',
            level:'begiiner',
            color:'#BA9E96'
        },
        {
            skill:'Typescript',
            level:'begiiner',
            color:'#e3e89a'
        },

    ]
    return(
        <div className="container">
            <Avatar />
            <Intro />
            <Skillist mySkill={mySkill} />
        </div>
    )
}