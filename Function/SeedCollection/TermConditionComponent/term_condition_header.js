export var TermConditionHeader = Vue.component
(
    "TermConditionHeader", 
    {
        props:["collapse_id","title"], 
        template: 
        `
            <div class="card-header">
                <h5>
                        <span>{{title}}</span>
                        <a 
                            data-toggle="collapse" 
                            data-parent="#accordion"
                            :href="'#'+collapse_id" 
                        >
                            <i class="fa fa-plus" style="float: right;"></i>
                        </a>
                </h5>
            </div>
        `
    }
); 