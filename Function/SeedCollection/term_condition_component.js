import {term_condition_data} from "./TermConditionComponent/term_condition_data.js"; 
import {TermConditionHeader} from "./TermConditionComponent/term_condition_header.js"; 
import * as term_condition_wrapper from "./TermConditionComponent/term_condition_wrapper.js"; 




var TermConditionComponent = Vue.component
(
    "TermConditionComponent", 
    {
        data: function() 
        {  
            return {
                terms: term_condition_data
            };
        },
        template: 
        `
            <div>
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
            </div>
        `
    }
); 

export {TermConditionComponent, term_condition_wrapper, TermConditionHeader}; 