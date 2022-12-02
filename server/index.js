const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());

app.use(express.json());

const { getCompliment,getfortune,getlifehack,getjoke
} = require('./controller')
// getMeal

app.get("/api/compliment", getCompliment);
app.get("/api/fortune", getfortune); 
app.get("/api/lifehack", getlifehack); 
app.get("/api/joke", getjoke); 
// app.get("/api/meal", getMeal); 

app.listen(4000, () => console.log("Server running on 4000"));
