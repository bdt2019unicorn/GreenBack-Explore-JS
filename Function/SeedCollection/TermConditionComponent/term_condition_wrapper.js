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
        data()
        {
            return {
                checkbox: 
                `
                    <span class="form-check" style="float: right;">
                        <input type="checkbox" class="form-check-input" onchange="GetChecked">
                    </span>

                `
            }
        },
        template: 
        `
            <p class="card-text">
                <span v-html="text">
                </span>
                <span class="form-check" style="float: right;">
                    <input type="checkbox" class="form-check-input" onchange="GetChecked">
                </span>
            </p>

        `, 
        methods: 
        {
            GetChecked: function(event)
            {
                console.log(event); 
                var checked = event.currentTarget.checked; 
                console.log(checked); 
            }
        },
    }
); 

export {TermConditionWrapper, TermCondition}; 


            // <p class="card-text" v-html="text+checkbox">
            // </p>