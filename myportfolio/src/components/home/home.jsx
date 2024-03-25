import { Education } from '../education/education';
import './home.css';
import { Internships } from '../internship/internship';
import imageSrc from "../Nikki.jpg";
import { Projects } from '../project/projects';
import { Skills } from '../skills/skills';
import { Contact } from '../contact/contact';

export function Home(){
    return(
        <div className="container-fluid row ">
            
            <div className="col-6 card" style={{width:'40%', height:'660px'}}>
                <div>
                    <img src={imageSrc} alt='' style={{width:'100%',height:'70%',borderRadius:'50%'}}/>
                
                <div>
                    <h3 style={{fontFamily:'cursive'}} className='d-flex justify-content-center'>Hi! 🖐️ there nice to meet you..</h3>
                    <h3 style={{fontFamily:'cursive'}}  className='d-flex justify-content-center'>Welcome to my portfolio</h3>
                </div>
                </div>
            </div>
            <div className="col-6 d-flex justify-content-center">
                <div >
                        <h1 className=' justify-content-center d-flex'style={{textAlign:'center',marginLeft:'100px',marginTop:'200px',color:'Green', backgroundColor:'lightblue',borderRadius:'100%'}}>About Me</h1>
                </div>
                <div className='styling d-flex justify-content-center'>
                    <p style={{fontFamily:'cursive',marginTop:'300px',textAlign:'left'}} >
                    Completed my Master's in computer science from Northwest Missouri State University, Maryville, Missouri in 2023 December 8th. Completed my Bachelor of Technology in Electrical and Electronics Engineering from Mahatma Gandhi Institute of Technology, Hyderabad, India. Skilled in C, Python, Java, Html, Javascript, CSS, Spring Boot Framework, Node.js, React.js, etc. Other interests include Playing Tennis, Badminton, Basketball, and Like to Sing.
                    </p>
                </div>
            </div>
            <hr></hr>
            <Projects/>
            <hr></hr>
            <Internships/>
            <hr></hr>
            <Skills/>
            <hr></hr>
            <Education></Education>
            <hr></hr>
            <Contact/>
        </div>
    )
}