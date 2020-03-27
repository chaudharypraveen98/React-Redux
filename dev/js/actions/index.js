/*action is a part that have to return
action is of two type
*type: it is a just a string that explains what happen like new button clocked ,user button clicked, slider.
*Payload:any information that you want to give to app
 A ation creator is just a function whose part is just render a action with type and data
 */
export const selectUser = (user) =>{
    console.log("the selected user is "+user.first);
    return {
        type:"USER_SELECTED",
        payload: user
    }
};