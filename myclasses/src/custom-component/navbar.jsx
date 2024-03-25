import React from "react";
export class Navbar extends React.Component{
    constructor(){
        super();
    }
    render(){
        return(
            <div className="container-fluid">
                <h3 className="d-flex justify-content-around bg-secondary p-2">{this.props.brandName}</h3>
                <nav>
                    {
                        this.props.navItems.map(item=>
                            <button key ={item} className="btn btn-warning me-3">{item}</button>)
                    }
                </nav>

                
            </div>
        )
    }

}