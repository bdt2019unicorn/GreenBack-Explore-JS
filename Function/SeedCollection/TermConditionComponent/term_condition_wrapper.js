var TermConditionWrapper = Vue.component 
(
    "TermConditionWrapper", 
    {
        props: ["collapse_id","term_condition"], 
        
        template: 
        `
            <div :id="collapse_id" class="collapse show">
                <div class="card-body">
                    <TermCondition 
                        v-for="term in term_condition.text"
                        :text="term"
                    >
                    </TermCondition>
                </div>
            </div>
        `
    } 
); 

var TermCondition = Vue.component
(
    "TermCondition", 
    {
        props: ["text"], 
        template: 
        `
            <p class="card-text" v-html=text>
                // {{text}}
                <span style="float: right;">
                    <input type="checkbox" class="checkbox-circle">
                </span>
            </p>
        `

    }
); 

export {TermConditionWrapper, TermCondition}; 