import imageSrc from '../NWMSU.jpg';
import imgSrc from '../MGIT.jpeg';
import './education.css';
export function Education(){
    return(
      <div id="education"className='container-fluid'>
        <h1 className='container-fluid d-flex p-3'style={{textAlign:'center',padding:'20px',backgroundColor:'lightcoral'}}>MY EDUCATIONAL BACKGROUND</h1>  
        <div className='d-flex justify-content-center'style={{textAlign:'center', alignItems:'center', paddingLeft:'1rem'}}>
          
            <div class="flip-card me-3">
                <div class="flip-card-inner">
                  <div class="flip-card-front">
                    <img src={imageSrc} style={{backgroundSize:'cover',height:'200px'}}alt=''/>
                    <h3>Northwest Missouri State University</h3>
                  </div>
                  <div class="flip-card-back">
                    <p style={{marginTop:'120px'}}>Masters in Applied Computer Science</p>
                  </div>
                </div>
            </div>
            <div class="flip-card">
                <div class="flip-card-inner">
                  <div class="flip-card-front">
                    <img src={imgSrc} alt=''style={{width:'100%',height:'200px'}}/>
                    <h3 className="d-flex justify-content-center"style={{textAlign:'center', alignItems:'center'}}>Mahatma Gandhi Institute of Technology</h3>
                  </div>
                  <div class="flip-card-back">
                  <p style={{marginTop:'120px'}}>Bachelors of Technology in Electrical and Electronics Engineering</p>
                  </div>
                </div>
            </div>
          </div> 
        </div>
    )
}