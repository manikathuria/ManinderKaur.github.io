import React, { useEffect } from 'react';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import './Skills.css'
import Aos from "aos"
import "aos/dist/aos.css"
import SkillBar from 'react-skillbars'


function Skills() {
  useEffect(() => {

    Aos.init({ duration: 2000 })
  }, [])

  var SKILLS = [
    {
      "type": "Java",
      "level": 90

    },
    {
      "type": "C++",
      "level": 88
    },
    {
      "type": "PHP",
      "level": 60
    },
    {
      "type": "MERN ",
      "level": 75
    },
    {
      "type": "Javascript",
      "level": 80
    },

    {
      "type": "AndroidStudio",
      "level": 75,

    },
    {
      "type": "HTML/CSS",
      "level": 100
    },
    {
      "type": "MySQL",
      "level": 90
    },
  ]

  const colors = {
    "bar": "#19D2E4 ",


    "title": {
      "text": "#fff",
      "background": "rgb(18, 39, 78) "

    }
  }
  const percentage = 66;

  return (
    <div style={{ fontFamily: "cursive" , justifyContent:"center" , textAlign:"center" }} >
      <br></br>
      <h2 style={{ letterSpacing: "9px", fontFamily: "Poiret One , cursive" }}>SKILLS</h2>
      <br></br>
      <hr style={{ borderTop: "#fff 2px solid" }}></hr>
      <br></br>
      <h3 >Technical Skills</h3>
      <br></br>
      <br></br>
      <SkillBar skills={SKILLS} colors={colors} height="20px" animationDelay="6000" />
      <br></br>
      <br></br>
      <h3 >Non - Technical Skills</h3>
      <br></br>
      <br></br>
      <div style={{ width: "50vw" }}>
        <div style={{ width: "20vmin", height: "20vmin", marginBottom: "20px"   ,marginTop:"-3vmin" , marginLeft:"13vmin"}}>
          <CircularProgressbar value="80" text="Communication" styles={buildStyles({
            rotation: 0.25,
            strokeLinecap: 'butt',
            textSize: '16px',
            pathTransitionDuration: 2.5,
            pathColor: `#19D2E4 `,
            trailColor: "rgb(18, 39, 78)",
            textColor: '#fff',
            textSize: "11px",
            backgroundColor: '#3e98c7'
          })}
          />
        </div>

        <div style={{ width: "20vmin", height: "20vmin", marginBottom: "20px", marginTop: "-23vmin", marginLeft: "24em" }}>
          <CircularProgressbar value="60" text="Creativity" styles={buildStyles({
            rotation: 0.25,
            strokeLinecap: 'butt',
            textSize: '16px',
            pathTransitionDuration: 0.5,
            pathColor: `#19D2E4 `,
            trailColor: "rgb(18, 39, 78)",
            textColor: '#fff',
            textSize: "11px",
            backgroundColor: '#3e98c7'
          })}
          />
        </div>

        <div style={{ width: "20vmin", height: "20vmin", marginBottom: "20px" ,  marginLeft:"13vmin" }}>
          <CircularProgressbar value="90" text="Flexibility" styles={buildStyles({
            rotation: 0.25,
            strokeLinecap: 'butt',
            textSize: '16px',
            pathTransitionDuration: 0.5,
            pathColor: `#19D2E4 `,
            trailColor: "rgb(18, 39, 78)",
            textColor: '#fff',
            textSize: "11px",
            backgroundColor: '#3e98c7'
          })}
          />
        </div>

        <div style={{ width: "20vmin", height: "20vmin", marginBottom: "20px" , marginTop: "-23vmin", marginLeft: "24em"}}>
          <CircularProgressbar value="75" text="TeamWork" styles={buildStyles({
            rotation: 0.25,
            strokeLinecap: 'butt',
            textSize: '16px',
            pathTransitionDuration: 0.5,
            pathColor: `#19D2E4 `,
            trailColor: "rgb(18, 39, 78)",
            textColor: '#fff',
            textSize: "11px",
            backgroundColor: '#3e98c7'
          })}
          />
        </div>
          <br></br>
          <br></br>
          <br></br>
      </div>
    </div>
  )

}
export default Skills