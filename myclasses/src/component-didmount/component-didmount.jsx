import React from 'react';
import axios from 'axios';
export class ComponentDM extends React.Component{
    constructor(){
        super();
        // this.state={title:"Product Details",id:101,name:"Samsung TV",price:45000.33,cities:["Delhi","Hyderabad"],rating:{rate:3.3,count:5000}}
        this.state={categories:[],products:[]};
    }
    loadCategories(){
        axios({method:"get",url:"http://fakestoreapi.com/products/categories"}).then(Response=>{
            this.setState({categories:Response.data})
        })  
    }
    loadProducts(){
        axios({method:'get',url:'http://fakestoreapi.com/products'}).then(response=>{
            this.setState({
                products:response.data
            })
        })
    }
    componentDidMount(){
        this.loadCategories();
        this.loadProducts();
    }
    render(){
        
        return(
            <div className='container-fluid'>
                <section className='mt-4 row'>
                    <nav className='col-3'>
                        <label className='form-label fw-bold'>Select Categ  ory</label>
                        <div>
                            <select className='form-select'>
                            {
                                this.state.categories.map(category=>
                                    <option key={category}>{category}</option>)
                            }</select>
                        </div> 
                    </nav>
                    <main className='col-9 flex-wrap overflow-auto d-flex' style={{height:"500px"}}>
                        {
                            this.state.products.map(product=>
                                <div className='card m-2 p-2' style={{width:'200px'}}>
                                <img src = {product.image} className='card-img-top'height='150px' alt=""/>
                                <div className='card-header'>
                                    <p>{product.title}</p>
                                </div>
                                </div>
                            
                            )
                        }

                    </main>
                   
                </section>
            </div>
        )
    }

}