import React from 'react';
import Particles from "react-tsparticles";

function Particle(){

    return(
        <div>
            <Particles
       
       options={{
        position:"relative" ,
        height:"40vh" ,
        width:"" , 
         fpsLimit: 660,
         interactivity: {
           detectsOn: "canvas",
           events: {
             onClick: {
               enable: true,
               mode: "push",
             },
             onHover: {
               enable: true,
               mode: "repulse",
             },
             resize: true,
           },
           modes: {
             bubble: {
               distance: 80,
               duration: 2,
               opacity: 0.8,
               size: 40,
             },
             push: {
               quantity: 4,
             },
             repulse: {
               distance: 200,
               duration: 0.1,
             },
           },
         },
         particles: {
           color: {
             value: "#ffffff",
           },
           links: {
             color: "#ffffff",
             distance: 150,
             enable: true,
             opacity: 0.5,
             width: 1,
           },
           collisions: {
             enable: true,
           },
           move: {
             direction: "none",
             enable: true,
             outMode: "bounce",
             random: false,
             speed: 8,
             straight: false,
           },
           number: {
             density: {
               enable: true,
               value_area: 800,
             },
             value: 100,
           },
           opacity: {
             value: 0.5,
           },
           shape: {
             type: "circle",
           },
           size: {
             random: true,
             value: 5,
           },
         },
         detectRetina: true,
       }}
     />
        </div>
    )
}

export default Particle;