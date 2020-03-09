export var TermConditionHeader = Vue.component
(
    "TermConditionHeader", 
    {
        props:["collapse_id","title"], 
        template: 
        `
            <div class="card-header">
                <h5 class="mb-0">
                        <span>{{title}}</span>
                        <a data-toggle="collapse" :href="'#'+collapse_id">
                            <i class="fa fa-plus" style="float: right;"></i>
                        </a>
                </h5>
            </div>
        `
    }
); 