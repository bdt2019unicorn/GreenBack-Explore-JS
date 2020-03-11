export function CreateStoreTrack()
{
    return new Vuex.Store
    (
        {
            state: 
            {
                term_condition_count:0, 
                total_terms: 0, 
                accept_button: false 
            }, 
            mutations: 
            {
                UpdateAcceptButton(state, checked)
                {
                    var support_functions = 
                    {
                        NewCount()
                        {
                            var value = Number(checked); 
                            value = 2*value - 1; 
                            let new_count = state.term_condition_count+value; 
                            return (isNaN(new_count))? state.term_condition_count:new_state; 
                        }, 
                        ModifyAccept(new_count)
                        {
                            state.accept_button = (new_count==state.total_terms); 
                        }
                    }
                    var new_count = support_functions.NewCount(); 
                    support_functions.ModifyAccept(new_count); 
                }, 
                GetTotalTerms(state,total)
                {
                    state.total_terms = total; 
                }
            }
        }
    ); 
}