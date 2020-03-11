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
                    var NewCount = function()
                    {
                        var value = Number(checked); 
                        value = 2*value - 1; 
                        let new_count = state.term_condition_count+value; 
                        return (isNaN(new_count))? state.term_condition_count:new_count; 
                    }
                    state.term_condition_count = NewCount(); 
                    state.accept_button = (state.term_condition_count==state.total_terms);
                }, 
                GetTotalTerms(state,total)
                {
                    state.total_terms = total; 
                }
            }
        }
    ); 
}