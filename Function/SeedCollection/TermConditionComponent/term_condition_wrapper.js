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
                        @check-changed="$this.$emit('check-changed',1);"
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
                        <input type="checkbox" class="form-check-input" id="materialUnchecked" @change="OnCheckChanged">
                    </span>

                `
            }
        },
        template: 
        `
            <p class="card-text" v-html="text+checkbox">
            </p>
        `, 
        methods: 
        {
            OnCheckChanged(event)
            {
                var checked = event.currentTarget.checked; 
                console.log("I have just got checked"); 
                console.log(checked);
                this.$emit("check-changed", checked); 
            }
        },

    }
); 

export {TermConditionWrapper, TermCondition}; 