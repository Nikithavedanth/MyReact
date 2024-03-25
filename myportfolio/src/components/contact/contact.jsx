import imgsrc from'../GitHub.jpg';
import imgSrc from '../LinkedIn.png';
export function Contact(){
    return(
        <div id="contact"className="container-fluid justify-content-center p-3" style={{textAlign:'center', marginTop:'50px',marginBottom:'150px'  , backgroundColor:'lightseagreen'}}>
            <h1 style={{marginBottom:'100px'}}>CONTACT ME</h1>
            <h4><b>Open To Work</b></h4>
            <p><b>Phone no:</b>+1(510)-598-9909</p>
            <p><b>Email Id:</b> nikithavedanth@gmail.com</p>
            <p><b>Current Location:</b>Maryville,Missouri,United States</p>
            <hr></hr>
            <h3>Nikitha Vedant Madabhushi</h3>
            <a href='https://github.com/Nikithavedanth'><img src={imgsrc} alt='' width='30px' height='30px' className='me-2'/></a>
            <a href='https://www.linkedin.com/in/nikitha-vedant-madabhushi-0643b1182/'><img src={imgSrc} alt='' width='30px' height='30px'/></a>
        </div>
    )
}