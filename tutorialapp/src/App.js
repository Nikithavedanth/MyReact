// import logo from './logo.svg';
import { BrowserRouter,Routes,Route,Link, useNavigate } from 'react-router-dom';
import './App.css';
import { MainComponent } from './components/main-component/main-component';
import { Login } from './components/login/login';
import { Unregistered } from './components/unregistered/unregistered';
import { Register } from './components/register/register';
import { VideosHome } from './components/videos-home/videos-home';
import { AdminHome } from './components/admin-home/admin-home';
import { AdminLogin } from './components/admin-login/admin-login';
import { AddVideo } from './components/add-video/add-video';
import { ViewVideo } from './components/view-video/view-video';
import { EditVideo } from './components/edit-video/edit-video';
import { DeleteVideo } from './components/delete-video/delete-video';
import { useCookies } from 'react-cookie';
import { useEffect } from 'react';

function App() {
  const [cookies,setCookie,removeCookie]=useCookies();
  // const navigate=useNavigate();
  useEffect(()=>{

  },[])
//   function handleSignout(){
//     removeCookie('user-Id');
//     navigate("/admin-login");
// }
  return (
    <div className='container-fluid'>
     <BrowserRouter>
     <header className='d-flex justify-content-between mt-2 p-2 bg-dark text-white'>
        <div>
          <h2><Link to="/" className='text-white text-decoration-none'>Tech-Videos</Link></h2>
        </div>
        <div>
          {
            cookies['user-Id']==undefined?
          <div>
            <Link to="/login"className='btn btn-danger'>User SignIn</Link>
            <Link to="/admin-login" className='btn btn-danger ms-2'>Admin SignIn</Link>
          </div>:
          <div>
            {cookies['user-Id']}
            {/* <button onClick={handleSignout}className='btn btn-danger ms-2'>SignOut</button> */}
          </div>
            }
        </div>
      </header>
      <section className='d-flex ' style={{height:"100vh"}}>
      {/* justify-content-center align-items-center */}
        <div>
          <Routes>
            <Route path="/" element={<MainComponent/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/unregister" element={<Unregistered/>}/>
            <Route path ="/register" element={<Register/>}/>
            <Route path ="/videos" element={<VideosHome/>}/>
            <Route path="/admin-home" element={<AdminHome/>}/>
            <Route path="/admin-login" element={<AdminLogin/>}/>
            <Route path="/add-video" element={<AddVideo/>}/>
            <Route path="/view-video/:id" element={<ViewVideo/>}/>
            <Route path="/edit-video/:id" element={<EditVideo/>}/>
            <Route path="/delete-video/:id" element={<DeleteVideo/>}/>
          </Routes>
          
        </div>
      </section>
     </BrowserRouter>

    </div>
   
  )
}

export default App;
