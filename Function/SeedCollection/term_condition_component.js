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
                terms: term_condition_data, 
                count: 0, 
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
                        @check-changed="UpdateChecking"
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
        computed: 
        {
            TotalTermCondition()
            {
                var total = 0; 
                for(var term in this.terms)
                {
                    total+= this.term[term].text.length; 
                }
                return total; 
            } 
        },
        methods: 
        {
            UpdateChecking(checked)
            {
                var value = Number(checked); 
                value = 2*value - 1; 
                this.count+=value; 
            }   
        },
        watch: 
        {
            count()
            {
                if(this.count==this.TotalTermCondition)
                {
                    alert("I am bigger than 0 now"); 
                }
            }
        },
    }, 
); 

export {TermConditionComponent, term_condition_wrapper, TermConditionHeader}; 