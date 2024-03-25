import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { HashLink as Link } from 'react-router-hash-link';
import './App.css';
import { Home } from './components/home/home';
import { Projects } from './components/project/projects';
import { Education } from './components/education/education';
import { Internships } from './components/internship/internship';
import { Skills } from './components/skills/skills';
import { Contact } from './components/contact/contact';

function App() {
  return (
    <div>
        <BrowserRouter>
        <header className='d-flex justify-content-between mt-2 p-3 bg-dark text-white'>
              <h2 className="col-7 "><Link to='/home' className='text-white text-decoration-none'>Nikitha Vedant Madabhushi</Link></h2>
               <Link to='/home'  className="button btn btn-primary ">Home</Link>
               <a href='#projects' className="button btn btn-secondary "  >Projects</a>
               <a href='#internships' className=" button btn btn-info ">Internships</a>
               <a href='#skills'className=" button btn btn-warning ">Skills</a>
               <a href='#education' className="button btn btn-danger">Education</a>
               <a href='#contact'className="button btn btn-light">Contact Me</a>
  
        </header> 
        {/* <h1> Welcome to My Page</h1>  */}
        <section className='d-flex ' style={{height:"100vh"}}>
          
        <Routes>
              <Route path='/home' element={<Home/>}></Route>
              <Route path='/projects' element={<Projects/>}></Route>
              <Route path='/education' element={<Education/>}></Route>
              <Route path='/internships' element={<Internships/>}></Route>
              <Route path='/skills' element={<Skills/>}></Route>
              <Route path='/contact' element={<Contact/>}></Route>
        </Routes>
        </section>
        
        </BrowserRouter>
    </div>
  );
}

export default App;
