const complimentBtn = document.getElementById("complimentButton")
const fortuneButton = document.getElementById("fortuneButton")
const mealButton = document.querySelector("#meal")
const lifehackContainer = document.querySelector('#lifehackContainer')


const getCompliment = () => {
    axios.get("http://localhost:4000/api/compliment/")
        .then(res => {
            const data = res.data;
            alert(data);
    });
};
const getfortune = () => {
    axios.get("http://localhost:4000/api/fortune/")
        .then(res => {
            const data = res.data;
            alert(data);
    });
};
const getlifehack = () => {
    axios.get("http://localhost:4000/api/lifehack")
        .then(res => {
            const data = res.data;
            const container = document.createElement('div')
            container.innerHTML = `<img class = "images" alt='lifehack' src=${data}"/>`
            lifehackContainer.appendChild(container)
    });
};
const getjoke = () => {
    axios.get("http://localhost:4000/api/joke")
        .then(res => {
            const data = res.data;
            
            alert(data);
    });
};
// const getMeal = (req, res) => {
//         axios.get('https://www.themealdb.com/api/json/v1/1/random.php')
//         .then((data) => {
//             let {strMeal} = data.meals;
//             console.log(strMeal);
//             res.status(200).send(strMeal)
//         })
// };

complimentBtn.addEventListener('click', getCompliment)
fortuneButton.addEventListener('click', getfortune)
mealButton.addEventListener('click', getlifehack)

makeLifeHackContainer = () =>{
    const container = document.createElement('div')
    container.innerHTML = data
    lifehackContainer.appendChild(houseCard)
}