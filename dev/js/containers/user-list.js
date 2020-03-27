/* containers take two functions one is data and other is componenet and how are connected.
*they are basically component that hooked up with the data storage
* they are 99% similiar with the component
*mapStateToPops takes a piece of application store,your application state the main data and it passes it into your component as a property and they can pass whatever pieces of the store in that it want do so.
* we wanna make a property nd make it equal to state users.
* what mapStateToPops does it take a part os the store and it sends it to the component as props
* whenever we are exporting default userlist it means that we are exporting a dumb component but when we connect with the mapStateToPops then we are make aware that about the application store or user data
* the export with double parenthesis ()() was because the connect function requires a function as a parameter and the connect function RETURNS a FUNCTION, which you then call right away for convenience with the other parenthesis. /

* if you study javascript or programming more generally, this is known as a higher order function. Also related to that concept is the fact that javascript uses first class functions; they can be passed around like any other value. */
import React,{Component}  from 'react';
import {bindActionCreators} from "redux";
import {connect} from 'react-redux';
import {selectUser} from "../actions";

class UserList extends Component{

    createListItems(){
        return this.props.users.map((user)=> <li key={user.id} onClick={() =>this.props.selectUser(user)}> {user.first}</li>)
    }

    render(){
        return (
            <ul>
                {this.createListItems()}
            </ul>
        );
    }
}
//it is a container glue to it
function mapStateToProps(state) {
    return {
        users:state.users
    }
}

function matchDispatchToProps(dispatch) {
    return bindActionCreators({selectUser:selectUser},dispatch)
}

export default connect(mapStateToProps,matchDispatchToProps)(UserList);