import express from "express";
import { connecter } from "./bd/connect.js";

const app = express();

app.get('/', (req, res) => {
    console.log('Breakpoin processed.');    
})

connecter("mongodb://127.0.0.1:27017/", (error) => {
    if(error) {
        console.log("Erreur lors de la connexion à la base de données");
        process.exit(-1);     
    }else {
        console.log("Connexion avec la basse de données établie");
        app.listen(3000);
        console.log('Server mongo is working on! http://localhost/3000');        
    }
});
