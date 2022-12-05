const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());

app.use(express.json());

const { getCompliment,getfortune,getRandomImage,getQoute,postArticle} = require('./controller')
// getMeal

app.get("/api/compliment", getCompliment);
app.get("/api/fortune", getfortune); 
app.get("/api/getRandomImage", getRandomImage); 
// app.get("/api/joke", getjoke);
app.get("/api/qoute", getQoute); 
app.post('/api/article', postArticle);

app.listen(4000, () => console.log("Server running on 4000"));
