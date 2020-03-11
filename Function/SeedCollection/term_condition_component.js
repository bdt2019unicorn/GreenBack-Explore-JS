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
                count: window.term_condition_store_track.getState(),
                accept_button: false 
            };
        },
        template: 
        `
            <div class="full-width">
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

                <div class="card">
                    <div class="row">
                        <div class="col"></div>
                        <button class="btn btn-success col" :disabled="!accept_button">Accept</button>
                        <div class="col"></div>
                        <button class="btn btn-danger col">Decline</button>
                        <div class="col"></div>
                    </div>
                </div>
            </div>
        `, 
        watch: 
        {
            count()
            {
                var TotalTermCondition = function(terms)
                {
                    var total = 0; 
                    for(var term in terms)
                    {
                        total+= terms[term].text.length; 
                    }
                    return total; 
                }
                var total = TotalTermCondition(this.terms); 
                console.log("I am checking the acceptance and the state is ",window.term_condition_store_track.getState()); 
                console.log("this.count=",this.count); 
                console.log(window.term_condition_store_track.getState() ==total); 
                console.log(total); 
                this.accept_button = this.count ==total; 
            }
        },
    }, 
); 

export {TermConditionComponent, term_condition_wrapper, TermConditionHeader, CreateStoreTrack}; 