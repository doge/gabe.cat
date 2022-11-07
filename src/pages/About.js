import React from 'react';
import { NavLink } from 'react-router-dom';

export default function About() {
    return(
    <>
        <h1>About Me</h1>
        <body>I'm Gabe, a passionate programmer who has been coding for around 5 years now. I am experienced in web development with a strong focus on the back-end. Currently though, I've been loving working with React. Feel free to <NavLink to="/projects">view some of my open source projects.</NavLink></body>

        <h4>Languages I've been working with recently</h4>
        <ul>
            <li>Python</li>
            <li>JavaScript + React (this website was built with React!)</li>
            <li>TypeScript</li>
            <li>Go</li>
            <li>C#</li>
        </ul>
    </>
    )
}