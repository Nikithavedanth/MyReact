import React from "react";

export class ClassEvents extends React.Component{
    constructor(){
        super();
        this.state={msg:'',sty:{'display':'block'}}
        // this.handleInsertClick=this.handleInsertClick.bind(this);
     }
     handleInsertClick(){
        // document.write('Record inserted');
        alert("record inserted");
        this.setState({msg:'Record Inserted Successfully...',sty:{'display':'none'}})
    
    }
     render(){
       
        return(
            <React.Fragment>
                <div className="container-fluid">
                    <button style={this.state.sty} onClick={this.handleInsertClick.bind(this)} className="mt-4 btn btn-primary">Insert</button>
                    <p>{this.state.msg}</p>

                </div>
            </React.Fragment>
        )
     }

}