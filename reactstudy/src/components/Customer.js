import React from 'react'
class Customer extends React.Component{
    render(){
        return(
            <div>
                <CustomerInfo
                id={this.props.id} name={this.props.name}
                age={this.props.age}/>
            <CustomerProfile id={this.props.id} image={this.props.image}/>
            </div>
        )
    }
}
class CustomerProfile extends React.Component{
    render(){
        return(
            <div>
                <img src={this.props.image} alt="profile"/>
            </div>
        )
    }
}
class CustomerInfo extends React.Component{
    render(){
        return(
            <div>
                <h2>{this.props.id}</h2>
                <p>{this.props.name}</p>
                <p>{this.props.age}</p>
            </div>
        )
    }
}
export default Customer;