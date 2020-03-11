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
            <p class="card-text">
                <span v-html="text">
                </span>
                <span class="form-check" style="float: right;">
                    <input type="checkbox" class="form-check-input" @change="OnCheckChanged">
                </span>
            </p>

        `, 
        methods: 
        {
            OnCheckChanged: function(event)
            {
                var checked = event.currentTarget.checked; 
                window.term_condition_store_track.commit
                (
                    "UpdateAcceptButton", checked
                ); 
            }
        },
    }
); 

export {TermConditionWrapper, TermCondition}; 