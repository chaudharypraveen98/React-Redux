import React,{Component}  from 'react';
import {connect} from 'react-redux';

class UserDetail extends  Component{
    render(){
        if (!this.props.user)
            return (<h3>select user first.....</h3>)
        return(
            <div>
                <img src ={this.props.user.url} />
                <h2>{this.props.user.name}</h2>
                <h3>address {this.props.user.adreess}</h3>
                <h3>Description {this.props.user.description}</h3>
            </div>
        );
    }
}
function mapStateToProps(state) {
    return {
        user:state.activeUser
    }
}

export default connect(mapStateToProps)(UserDetail);