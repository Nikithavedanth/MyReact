import { Navbar } from "../custom-component/navbar";

export function Shopping(){
    return(
        <div className="container-fluid">
            <Navbar brandName="Shopper" navItems={["Home","Shop","Blog","About"]}/>
            <Navbar brandName="IT Company" navItems={["Home","courses","Reviews","Pages","Faculty"]}/>

        </div>
    )
}