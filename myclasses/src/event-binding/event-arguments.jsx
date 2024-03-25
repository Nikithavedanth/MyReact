import React from "react";

export class EventArguments extends React.Component{
    constructor(){
        super();
        this.state={msg:''}}
    handleInsertClick(e){
        this.setState({msg:`ButtonId:${e.target.id} ButtonClass:${e.target.className} X:${e.clientX}`});
        alert(`ButtonId:${e.target.id} ButtonClass:${e.target.className} X:${e.clientX}`)
    }
    render(){
        return(
            <div className="container-fluid">
                <button onClick={this.handleInsertClick.bind(this)} className="mt-4 btn btn-primary" id="btnInsert">Insert</button>
                <p>{this.state.msg}</p>

            </div>
        )
    }
}