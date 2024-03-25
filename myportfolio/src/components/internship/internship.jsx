import './internship.css';
export function Internships(){
    return(
        <div id="internships"class="container-fluid p-3" style={{color:'black'}}>
            <h1 className='justify-content-center d-flex p-3' style={{ color:'darkblue',backgroundColor:'lightsalmon'}}>MY INTERNSHIPS</h1>
            <hr/>
            <div className='justify-content-center d-flex'>
                 <div class="card" style={{width:'1000px'}}>
                    <h1 className='p-2' style={{borderRadius:'20%',backgroundColor:'green'}}>Machine Learning  with Python</h1>
                    <hr></hr>
                    <div class="container-fluid" style={{height:'318px',backgroundColor:'lightcyan'}}> 
                         <p>Created and put into operation a comprehensive methodology for assessing the accuracy of different classification models in predicting the gender of individuals. The models considered in this analysis encompassed a range of techniques, including Logistic Regression, Random Forest, K-Nearest Neighbors (KNN), Decision Tree, and Natural Language Processing (NLP). This initiative involved a systematic approach to evaluating the performance of each model, allowing for a comparative analysis of their accuracy in predicting gender based on the chosen dataset. The methodology considered factors such as precision, recall, and F1-score to provide a thorough understanding of the strengths and weaknesses of each classification model in the context of gender prediction.</p> 
                    </div>
                 </div>
             </div>
             <div className='justify-content-center d-flex' >
                 <div class="card" style={{width:'1000px'}}>
                    <h1 className='p-2' style={{borderRadius:'10%',backgroundColor:'green'}}>Hybrid Electric Vehicle</h1>
                    <hr></hr>
                    <div class="container-fluid" style={{height:'318px',backgroundColor:'lightcyan'}}> 
                         <p>Developed a comprehensive model focused on electric vehicles using advanced design and analysis tools, namely CATIA CAD software and ANSYS software for Finite Element Analysis (FEA). This involved a detailed exploration of the vehicle design, leveraging the capabilities of CATIA CAD to meticulously structure and visualize the electronic vehicle's components and overall architecture. Subsequently, ANSYS was employed to perform Finite Element Analysis, which allowed for an in-depth assessment of the model's performance with a specific emphasis on aerodynamics.The use of ANSYS facilitated a thorough examination of how the vehicle design interacts with aerodynamic forces, ensuring that the model's performance aligns with expected outcomes. This approach aimed to validate and optimize the design, identifying potential areas for improvement and ensuring that the electric vehicle met stringent standards for aerodynamic efficiency. The integration of CATIA and ANSYS in this modeling process contributed to a robust analysis, enhancing the overall understanding of the e-vehicle's design and its performance under different conditions.</p> 
                    </div>
                 </div>
             </div>
        </div>
    
    )
}
    
    