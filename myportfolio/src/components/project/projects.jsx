import './projects.css';
export function Projects(){
    return(
        <div id="projects"className='row container-fluid'>
            <h1 className='p-2 justify-content-center d-flex' style={{marginTop:'10px',color:'darkcyan',backgroundColor:'lightgreen'}}>MY PROJECTS DURING MY CURRICULUM</h1><hr></hr>
             <div className='col-4'>
                 <div class="card" style={{width:'400px'}}>
                    <h1 style={{textAlign:'center',fontStyle:'oblique'}}>Video Tutorial</h1>
                    <hr></hr>
                    <div class="container" style={{height:'318px'}}> 
                         <p>Developed a web-based application carrying out the CRUD operations like create, update, read and delete videos.Added two screens one for users and one for admin, where users will be able to view the videos
                            only while for admin we have added an option to add, update, delete videos.Developed the application using Reactjs , Nodejs, Mongodb and Expressjs</p> 
                    </div>
                 </div>
             </div>
             <div className='col-4'>
                 <div class="card " style={{width:'400px'}}>
                    <h1 style={{textAlign:'center', fontStyle:'oblique'}}>Git Analyzer</h1>
                    <hr></hr>
                    <div class="container" style={{height:'318px'}}> 
                         <p>Created a replica of GitHub, generating user-related repository information and analyzed the data
                        using D3.js to generate radial structures and bar graphs.
                        Developed the application using Pug, Nodejs, JavaScript, CSS, Bootstrap, and GitHub API
                        tokens</p> 
                    </div>
                 </div>
             </div>
             <div className='col-4'>
                 <div class="card " style={{width:'400px'}}>
                    <h1 style={{textAlign:'center', fontStyle:'oblique'}}>NBA Dataset 2003-2022</h1>
                    <hr></hr>
                    <div class="container" style={{height:'270px'}}> 
                         <p>Explored player performance metrics (PTS, APT, TRB) and team-centric stats (W/L%, SRS,PS/G) through scatter plots, bar graphs, and lollipop charts.Developed prediction models for MVP awards and positional analyses to gain insights into player contributions and team dynamics.Analyzed the correlation between player performance and team success to understand the interplay between individual skills and overall team achievements.</p> 
                    </div>
                 </div>
             </div>
             <div className='col-4'>
                 <div class="card " style={{width:'400px'}}>
                    <h1 style={{textAlign:'center', fontStyle:'oblique'}}>Supermarket Sales</h1>
                    <hr></hr>
                    <div class="container"> 
                         <p>Designed a Machine Learning model to predict the Profit Margin per Item using Gross Income and Quantity.Utilizing various plots and regression, classification, and clustering algorithms, I analyze and visualize features like gross income and quantity to predict the profit margin per item.Performance metrics such as accuracy, f1 score, precision, and mean squared error guide the selection of the most effective algorithm for accurate prediction.</p> 
                    </div>
                 </div>
             </div>
             <div className='col-4'>
                 <div class="card " style={{width:'400px'}}>
                    <h1 style={{textAlign:'center', fontStyle:'oblique'}}>Dog Management System</h1>
                    <hr></hr>
                    <div class="container" style={{height:'248px'}}> 
                         <p>Developed a web-based application that enables users to create, view, edit, and search for dog details.Additionally, the application allows users to create trainers and assign them to specific dogs.The application was built using Java and Eclipse and used Spring Boot Framework.</p> 
                    </div>
                 </div>
             </div>
             <div className='col-4'>
                 <div class="card " style={{width:'400px'}}>
                    <h1 className='justify-content-center d-flex' style={{fontStyle:'oblique'}}>Bearcat Canteen</h1>
                    <hr></hr>
                    <div class="container"style={{height:'296px'}}> 
                         <p>Created a IOS based mobile application for different stations like Starbucks, Chick-Fil-A, Mooyah through which you can place an order for the food items that you like and even add or remove no of items in the cart and pay the total amount in the end. Used SWIFT Code for building the application. </p> 
                    </div>
                 </div>
             </div>
             
        </div>
    )
}