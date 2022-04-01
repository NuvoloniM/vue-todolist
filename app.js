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
            //istanzio una variabile nuova che dipende dal v-model in input
            toDo: ' ',
        },
        methods: {
            //creo funzione per aggiungere in jobs l'imput messo
            addJob: function() {
                //dato il messaggio nell'imput creo un oggetto da inserire nell'array in dati
                let jobObj = {
                    message: this.toDo,
                    done: 'false'
                }
                console.log(jobObj);
                //pusho l'oggetto in jobs
                this.jobs.push(jobObj);
            },
            //creo funzione per eliminare la task
            //il parametro inserito nella funzione è l'index dell'oggetto nell'array preso da html
            delJob: function(jobPosition){
                this.jobs.splice(jobPosition,1);
            },
            //creo funzione per barrare la task al click
            complete: function(element){
                //condizione per modificare .done
                if (element.done == 'False') {
                    element.done = 'True'
                } else {
                    element.done = 'False'
                }
                console.log(element.done)
            },
            delAll: function() {
                this.jobs = '';
            }
        }   
    }
)