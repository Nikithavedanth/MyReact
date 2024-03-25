import React from 'react';
export class Login extends React.Component
{
    constructor(){
        super();
        this.state={title:"Product Details",id:101,name:"Samsung TV",price:45000.33,cities:["Delhi","Hyderabad"],rating:{rate:3.3,count:5000}}
    }
     // componentDidMount(){
    //     this.setState({price:60000.33})
    //             }
    render(){
        return(
        <div className='container-fluid'>
            <h2>{this.state.title}</h2>
            <dl>
                <dt>Name</dt>
                <dd>{this.state.name}</dd>
                <dt>Price</dt>
                <dd>{this.state.price}</dd>
                <dt>ShippedTo</dt>
                <dd>
                    <ol>
                        {
                            this.state.cities.map((city)=>
                                <li key={city}>{city}</li>
                                
                            )
                        }
                    </ol>
                </dd>
                <dt>Rating</dt>
                <dd>{this.state.rating.rate}<span className='bi bi-star-fill text-success'></span> {this.state.rating.count}</dd>
            </dl>

        </div>)
    }

}