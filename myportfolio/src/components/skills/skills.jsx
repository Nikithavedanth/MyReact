import img1 from '../AWS.jpg';
import img2 from '../Angularjs.png';
import img3 from '../Bootstrap.jpg';
import img4 from '../C++.jpg';
import img5 from '../C.jpg';
import img6 from '../Nodejs.png';
import img7 from '../Html.png';
import img8 from '../Javascript.jpg';
import img9 from '../React.png';
import img10 from '../java.png';
import img11 from '../python.png';
import './skills.css';
export function Skills(){
    return(
        <div id="skills"className='container-fluid '>
           
            <h1 className=" container-fluid d-flex p-3"style={{backgroundColor:'lightgreen',color:'red'}}>MY SKILLS</h1>    
            <div className='container-fluid row '>
                <div id="div1" className='card col-3 me-2' style={{height:'300px'}}>
                  <img src={img1} alt="AWS" style={{width:'200px',height:'200px',marginLeft: '70px'}}/>
                  <p ><span>Amazon Web Services</span></p>
                </div>
          
                <div id="div2" className='card col-3 me-2' style={{height:'300px'}}>
                  <img src={img3} alt="Bootstrap" style={{width:'200px',marginLeft: '70px'}}/>
                  <p className='justify-content-center d-flex mt-5'><span>Bootstrap</span></p>
                </div>
                <div  id="div3"className='card col-3 me-2'style={{height:'300px'}}>
                  <img src={img5} alt="C programming" style={{width:'200px',marginLeft: '70px'}}/>
                  <p className='justify-content-center d-flex mt-5'><span>C-Programming</span></p>
                </div>
                <div  id="div4"className='card col-3 me-2'style={{height:'300px'}}>
                  <img src={img4} alt="C++" style={{width:'200px',marginLeft: '70px'}}/>
                  <p className='justify-content-center d-flex mt-5'><span>C++</span></p>
                </div>
                <div id="div5" className='card col-3 me-2'style={{height:'300px'}}>
                  <img src={img8} alt="JavaScript"style={{width:'200px',marginLeft: '70px'}}/>
                  <p className='justify-content-center d-flex mt-5'><span>JavaScript</span></p>
                </div>
                <div id="div6" className='card col-3 me-2'style={{height:'300px'}}>
                  <img src={img7} alt="Html" style={{width:'200px',marginLeft: '70px'}}/>
                  <p className='justify-content-center d-flex mt-5'><span>HTML</span></p>
                </div>
                <div id="div7" className='card col-3 me-2'style={{height:'300px'}}>
                  <img src={img10} alt="Java" style={{width:'200px',marginLeft: '70px'}}/>
                  <p className='justify-content-center d-flex mt-5'><span>Java</span></p>
                </div>
                <div id="div8" className='card col-3 me-2'style={{height:'300px'}}>
                  <img src={img6} alt="NodeJs" style={{width:'200px',marginLeft: '70px'}}/>
                  <p className='justify-content-center d-flex mt-5'><span>NodeJs</span></p>
                </div>
                <div id="div9" className='card col-3 me-2'style={{height:'300px'}}>
                  <img src={img11} alt="python" style={{width:'200px',marginLeft: '70px'}}/>
                  <p className='justify-content-center d-flex mt-5'><span>Python</span></p>
                </div>
              
                <div id="div10" className='card col-3 me-2'style={{height:'300px'}}>
                  <img src={img9} alt="Reactjs" style={{width:'200px',marginLeft: '70px'}}/>
                  <p className='justify-content-center d-flex mt-5'><span>ReactJs</span></p>
                </div>
                <div id="div11" className='card col-3 me-2' style={{height:'300px'}}>
                  <img src={img2} alt="Angular" style={{width:'200px',marginLeft: '70px'}}/>
                  <p className='justify-content-center d-flex mt-5'><span>AngularJs</span></p>
                </div>
              </div>
            </div>
       

    )
}          