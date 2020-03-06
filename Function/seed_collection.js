// import 



var seed_collection = new Vue 
(
    {
        el: "#seed_collection", 
        data: 
        {
            title: "Seed Collection", 
            tree: {}
        }, 
        methods: 
        {
            GiveMeAFakeTree()
            {
                this.tree = 
                {
                    name: "Tree 2", 
                    type: "Kauri", 
                    store: 
                    `
                        Do a
                        Do b
                        Do c
                    `,
                    collect: 
                    `
                        collect 1
                        collect 2
                        collect 3
                    `
                }
            }    
        },
    }
); 