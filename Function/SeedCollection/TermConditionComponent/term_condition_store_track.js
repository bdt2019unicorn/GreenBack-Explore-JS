export function CreateStoreTrack()
{
    var redux_store_support =
    {
        ReducerFunctionNextStateFromCurrentStateAction(state=this.current_state_count,action)
        {
            var value = Number(action.checked); 
            value = 2*value - 1; 
            let new_state = state+value; 
            return (isNaN(new_state))? state:new_state; 
        }, 
        current_state_count: 0
    } 

    var store_terms_count = Redux.createStore(redux_store_support.ReducerFunctionNextStateFromCurrentStateAction, redux_store_support.current_state_count); 
    return store_terms_count; 
}