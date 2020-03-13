import {term_condition_data} from "./TermConditionComponent/term_condition_data.js"; 
import {TermConditionHeader} from "./TermConditionComponent/term_condition_header.js"; 
import * as term_condition_wrapper from "./TermConditionComponent/term_condition_wrapper.js"; 
import {CreateStoreTrack} from "./TermConditionComponent/term_condition_store_track.js"; 


var TermConditionComponent = Vue.component
(
    "TermConditionComponent", 
    {
        data: function() 
        {  
            return {
                terms: term_condition_data, 
                btn_class: "btn btn-sm btn-block col-3"
            };
        },
        template: 
        `
            <div>
                <div class="card-body">
                    <div 
                        class="card" 
                        v-for="collapse_id of Object.keys(terms)"
                    > 

                        <TermConditionHeader
                            :collapse_id="collapse_id"
                            :title="terms[collapse_id].title"
                        >

                        </TermConditionHeader>

                        <TermConditionWrapper
                            :collapse_id="collapse_id"
                            :term_condition="terms[collapse_id]"
                        >

                        </TermConditionWrapper>
                    </div>

                    <div class="card-footer">
                        <div class="row">
                            <div class="col"></div>
                            <button 
                                :class="this.btn_class+' btn-success'" 
                                :disabled="!AcceptButton"
                            >
                                Accept
                            </button>
                            <div class="col"></div>
                            <button 
                                :class="this.btn_class+' btn-danger'"
                            >
                                Decline
                            </button>
                            <div class="col"></div>
                        </div>
                    </div>
                </div>
            </div>
        `, 
        mounted() 
        {
            var TotalTerms = function(terms)
            {
                var total = 0; 
                for (var term in terms)
                {
                    total+=terms[term].text.length; 
                }
                return total; 
            }

            window.term_condition_store_track.commit
            (
                "GetTotalTerms", TotalTerms(this.terms)
            ); 
        },
        computed: 
        {
            AcceptButton()
            {
                return window.term_condition_store_track.state.accept_button; 
            }    
        },
    }, 
); 

export {TermConditionComponent, term_condition_wrapper, TermConditionHeader, CreateStoreTrack}; 