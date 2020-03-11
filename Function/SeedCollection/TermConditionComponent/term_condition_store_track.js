export function CreateStoreTrack()
{
    var redux_store_support =
    {
        ReducerFunctionNextStateFromCurrentStateAction(state=this.current_state_count,action)
        {
            var value = Number(action.checked); 
            value = 2*value - 1; 
            console.log("state",state); 
            console.log("value",value);
            console.log("state+value=",state+value); 
            console.log("I have just got run, reducer");
            console.log(action);  
            return state+value; 
        }, 
        current_state_count: 0
    } 

    var store_terms_count = Redux.createStore(redux_store_support.ReducerFunctionNextStateFromCurrentStateAction, redux_store_support.current_state_count); 
    return store_terms_count; 
}