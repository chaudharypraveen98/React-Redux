/* it does layout other component
* it is brainless part
* it is main styling component which does the styling so we need to incude scss here
* whenever we want to import anything , we first we need to export it
* */
import React from 'react';
import UserList from "../containers/user-list";
import UserDetail from '../containers/user-details'
import "../../scss/style.scss";

const App = () =>(
    <div>
        <h2>Username List:</h2>
        <UserList/>
        <hr/>
        <h2>User Details:</h2>
        <UserDetail />
    </div>
);

export default App;