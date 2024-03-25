import { BrowserRouter,Routes,Route } from "react-router-dom";
import { ReactFormDemo } from "../../function/react-form-demo/react-form-demo";

export function TutorialApp(){
    return(
        <div>
            {/* <h3>Tutorial Home</h3> */}
            <BrowserRouter>
                <Routes>
                    <Route path="html" element= {
                        <div>
                            <h5>HTML</h5>
                            <p>It is a markup language</p>
                        </div>}/>
                    <Route path="css" element={
                        <div>
                            <h5>CSS</h5>
                            <p>It defines style for HTML</p>
                        </div>}/>
                    <Route path="home" element={
                    <div>
                        <h3>Home</h3>
                    </div>}>http://localhost:3000/home</Route>
                    <Route path="shop-home" element={
                        <div>
                            <h3>Shop-Home</h3>
                        </div>
                    }>http://localhost:3000/shop-home</Route>
                    <Route path="math" element={<ReactFormDemo/>}/>
                    <Route path="/"  element={<ReactFormDemo/>}/>
                    <Route path="*"element={
                        <div>
                            <code>Not Found:Tutorial app requested not found</code>
                        </div>
                    }
                    />
                </Routes>
            </BrowserRouter>
        </div>
    )
}