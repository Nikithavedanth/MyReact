import React from 'react';
export class ClassEvents extends React.PureComponent{
    constructor(){
        super();
        this.state={status:new Date(),categories:["Electronics","Jewelries"]};
        this.handleAddClick=this.handleAddClick.bind(this);
    }
    handleAddClick(){
        this.setState({
            categories:["Electronics","Jewelries","Footwear"]
        })
    }
    render(){
        return(
            <React.Fragment>
                 <div>
                    <p>Component Mounted on:{this.state.status.toLocaleTimeString()}</p>
                    <button onClick={this.handleAddClick} className="mt-3 btn btn-primary">Add New</button>
                    <ol>{
                         this.state.categories.map(category=>
                            <li key={category}>{category}</li>)}
                    </ol>
                   

                 </div>
            </React.Fragment>
        )
    }
}