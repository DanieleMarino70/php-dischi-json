// Descrizione
// Dobbiamo creare una web-app che permetta di leggere una lista di dischi presente nel nostro server.
// Stack
// Html, CSS, VueJS (importato tramite CDN), axios, PHP
// Consigli
// Nello svolgere l'esercizio seguite un approccio graduale.
// Prima assicuratevi che la vostra pagina index.php (il vostro front-end) riesca a comunicare correttamente con il vostro script PHP (le vostre "API").
// Solo a questo punto sarà utile passare alla lettura della lista da un file JSON.

const app = Vue.createApp({
    data() {
        return {
          disks: [],
          
          
        };


    },

    methods: {
      

    },

    created(){
        axios.get("http://localhost/php-dischi-json/API/get-list.php").then((result) =>{
        this.disks = result.data;
        console.log(this.disks);
        });

        
    },

    mounted(){
        
    }
    

});

app.mount("#root");



