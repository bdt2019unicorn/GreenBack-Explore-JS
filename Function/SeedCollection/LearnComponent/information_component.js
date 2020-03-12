export var Information = Vue.component
(
    "Information", 
    {
        props: ["data"], 
        computed: 
        {
            ItemArray: function()
            {
                return this.data!=undefined? this.data.trim().split("\n"):[]; 
            }
        },
        template:
        `
            <div class="container">
                <ListItem
                    v-for="item in ItemArray"
                    :value="item"
                >
                </ListItem>
            </div>
        `
    }
); 