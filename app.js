// Importer le module express
const express = require('express');
// Importer le module mongoose
const mongoose = require('mongoose');



mongoose.connection.once('open', () => {
    console.log("Connexion à la base de données effectué");
});

// Quand la bdd aura des erreurs
mongoose.connection.on('error', () => {
    console.log("Erreur dans la BDD");
});
mongoose.connect("mongodb://localhost:27017/db_demo");

const article = mongoose.model('Article', { name: String }, 'articles');

const app = express();

app.use(express.json());

app.get('/articles',async (request, response) => {

    const product = await Product.find();

    if (!product.length) return response.json({ message : "les differents articles" });

    return response.json(product);

})

app.get('/todo', async (request, response) => {
    return response.json({ message : "Ceci est juste un exemple"}); 
});


app.listen(3000, () => {
    console.log("Le serveur a démarré");
});