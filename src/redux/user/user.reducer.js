//The user reducer is going to be that reducer that will store the state of our current user.
//A reducer is actually just a function that gets two properties it gets a state object which represents the last state or an initial state.
//And then it receives an action that action is just an object that has a type which is a string value. The other thing it's going to have which it might or might not is something called a payload.
import { UserActionTypes } from './user.types'

const INITIAL_STATE = {
    currentUser: null
};

const userReducer = (state = INITIAL_STATE, action) => { //user reducer gets the state and some action. Now the state is going to be something that the redux store is going to pass to this reducer. Whenever an action fires and the state will be whatever the state it is currently when that action gets fired so because when we actually fire the state for the first time it's going to be nothing right.

    switch (action.type) { //action.type will be a string 
        case UserActionTypes.SET_CURRENT_USER:
            return {
                ...state,
                currentUser: action.payload
            };
        default:
            return state;
    }
};

export default userReducer;