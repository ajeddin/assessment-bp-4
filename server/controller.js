module.exports = {

    getCompliment: (req, res) => {
        const compliments = ["Gee, you're a smart cookie!", "Cool shirt!", "Your Javascript skills are stellar."];
      
        // choose random compliment
        let randomIndex = Math.floor(Math.random() * compliments.length);
        let randomCompliment = compliments[randomIndex];
      
        res.status(200).send(randomCompliment);
    
    }
,
    getfortune: (req, res) => {
        const fortune = ["A beautiful, smart, and loving person will be coming into your life", "A faithful friend is a strong defense", "A feather in the hand is better than a bird in the air"];
        let randomIndex = Math.floor(Math.random() * fortune.length);
        let randomfortune = fortune[randomIndex];
      
        res.status(200).send(randomfortune);
    },
    // getMeal : (req, res) => {
    //     axios.get('https://www.themealdb.com/api/json/v1/1/random.php')
    //     .then((data) => {
    //         let {strMeal} = data.meals;
    //         res.status(200).send(strMeal)
    //     })
            
        // let randomIndex = Math.floor(Math.random() * fortune.length);
        // let randomfortune = fortune[randomIndex];
      
    // },
    getlifehack: (req, res) => {
        let img= []
        const lifehack = ['https://robbreport.com/wp-content/uploads/2013/06/831971.jpg?w=943'];
        let randomIndex = Math.floor(Math.random() * lifehack.length);
        let randomlifehack = lifehack[randomIndex];
        // img += `<img> src="${randomlifehack}"</img>`

        res.status(200).send(randomlifehack);
    },
    getjoke: (req, res) => {
        const joke = ["A beautiful, smart, and loving person will be coming into your life", "A faithful friend is a strong defense", "A feather in the hand is better than a bird in the air"];
        let randomIndex = Math.floor(Math.random() * joke.length);
        let randomjoke = joke[randomIndex];
      
        res.status(200).send(randomjoke);
    }
    
}