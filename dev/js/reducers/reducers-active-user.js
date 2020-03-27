//whenever any action is invoked it is send to all the reducer
// all the reducers ignores the response  till it is specially set to respond.
//whenever the state is none it will show blank and throw error but workds
export default function (state = null, action) {
    switch (action.type) {
        case "USER_SELECTED":
            return action.payload;
            break;
    }
    return state;
}