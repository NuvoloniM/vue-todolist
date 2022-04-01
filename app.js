var app = new Vue (
    {
        el: '#root',
        data: {
            jobs:[
                {
                    message: 'Portare a passeggio il cane',
                    done: 'False'
                },
                {
                    message: 'Buttare la Spazzatura',
                    done: 'False'
                },
                {
                    message: 'Svuotare la lavastoviglie',
                    done: 'False'
                }
            ],
            toDo: ' ',
        },
        methods: {
            addJob: function() {
                let jobObj = {
                    message: this.toDo,
                    done: 'false'
                }
                console.log(jobObj);
                this.jobs.push(jobObj);
            }
        }
    }
)