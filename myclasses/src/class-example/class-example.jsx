import React from 'react';

export class Login extends React.Component{
    constructor(){
        super();
    }
    render(){
        return(
            <div className='container-fluid'>
                <h2> Welcome to class Components User Login</h2>
                <dl>
                    <dt>UserName</dt>
                    <dd><input type='text' /></dd>
                    <dt>Password</dt>
                    <dd><input type='text'/></dd>
                </dl>
                <button className='btn btn-primary'>Login</button>
            </div>
        )
    }
}