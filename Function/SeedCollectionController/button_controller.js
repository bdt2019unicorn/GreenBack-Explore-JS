export var ButtonController = Vue.component
(
    "ButtonController", 
    {
        props: ["name", "subset","db_top_key", "current_component", "onclick"],
        data: function() 
        {  
            return {
                base_url: "https://plantme.co.nz/img/Web2App/Explore/"
            };
        },
        template: 
        `

            <input 
                type="image" 
                :onclick="onclick"
                :src="this.base_url +subset + name+'.png'" 
                :class="'common-popup '+ name"
                :data-db_top_key="db_top_key"
                :data-current_component="current_component"
            >

        `
    }, 
); 

