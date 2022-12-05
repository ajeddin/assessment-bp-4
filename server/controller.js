const axios = require("axios");
let names = [];
module.exports = {
  getCompliment: (req, res) => {
    const compliments = [
      "Gee, you're a smart cookie!",
      "Cool shirt!",
      "Your Javascript skills are stellar.",
    ];

    // choose random compliment
    let randomIndex = Math.floor(Math.random() * compliments.length);
    let randomCompliment = compliments[randomIndex];

    res.status(200).send(randomCompliment);
  },
  getfortune: (req, res) => {
    const fortune = [
      "A beautiful, smart, and loving person will be coming into your life",
      "A faithful friend is a strong defense",
      "A feather in the hand is better than a bird in the air",
    ];
    let randomIndex = Math.floor(Math.random() * fortune.length);
    let randomfortune = fortune[randomIndex];

    res.status(200).send(randomfortune);
  },
  getQoute: (req, res) => {
    axios.get("https://api.quotable.io/random").then((resp) => {
      let qoute = resp.data.content;
      console.log(qoute);
      res.status(200).send(qoute);
    });
  },

  getRandomImage: (req, res) => {
    // let img= []
    const images = [
      "https://robbreport.com/wp-content/uploads/2013/06/831971.jpg?w=943",
      "https://images.pexels.com/photos/14397947/pexels-photo-14397947.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
      "https://images.pexels.com/photos/7250029/pexels-photo-7250029.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
      "https://images.pexels.com/photos/10534018/pexels-photo-10534018.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
    ];
    let randomIndex = Math.floor(Math.random() * images.length);
    let getRandomImage = images[randomIndex];
    // img += `<img> src="${randomlifehack}"</img>`

    res.status(200).send(getRandomImage);
  },
  // other: (req, res) => {
  //     axios.get('https://api.breakingbadquotes.xyz/v1/quotes')
  //     .then((response) => {
  //         let output = response.data[0];
  //         const qoutes = response.data.qoute
  //         console.log(qoutes);
  //         // console.log(categories);
  //         let cat = ['heelo']
  //         // for (i=0;i<categories.length; i++){
  //         // cat.push(categories[i])
  //         res.status(200).send(output)
  //     })},
  // },
  // getjoke: (req, res) => {
  //     const joke = ["A beautiful, smart, and loving person will be coming into your life", "A faithful friend is a strong defense", "A feather in the hand is better than a bird in the air"];
  //     let randomIndex = Math.floor(Math.random() * joke.length);
  //     let randomjoke = joke[randomIndex];

  //     res.status(200).send(randomjoke);
  // },
  postArticle: (req, res) => {
    let { firstN } = req.body;
    console.log(req.body);
    names.push(firstN);
    console.log(firstN);
    res.status(200).send(names);

    // my main issue is i cant move input values from front to back end, need more practice on syntax, a lot of work on CSS and HTML.
  },
};
