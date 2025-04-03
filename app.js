import express from "express";

const app = express();


app.get('/', (req, res) => {
    console.log('Breakpoin processed.');    
})


app.listen(3000);
console.log('Server mongo is working on! http://localhost/3000');