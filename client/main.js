const complimentBtn = document.getElementById("complimentButton");
const fortuneButton = document.getElementById("fortuneButton");
const imageButton = document.querySelector("#getRandomImage");
const addName = document.querySelector("#addName");
const qouteButton = document.querySelector("#qoute");
const lifehackContainer = document.querySelector("#lifehackContainer");

const getCompliment = () => {
  axios.get("http://localhost:4000/api/compliment/").then((res) => {
    const data = res.data;
    alert(data);
  });
};
const getfortune = () => {
  axios.get("http://localhost:4000/api/fortune/").then((res) => {
    const data = res.data;
    alert(data);
  });
};
const getRandomImage = () => {
  axios.get("http://localhost:4000/api/getRandomImage").then((res) => {
    const data = res.data;
    const container = document.createElement("div");
    container.innerHTML = `<img class = "images" alt='image' src=${data}"/>`;
    imageContainer.appendChild(container);
  });
};
const getjoke = () => {
  axios.get("http://localhost:4000/api/joke").then((res) => {
    const data = res.data;
  });
};
const getQoute = () => {
  axios.get("http://localhost:4000/api/qoute/").then((res) => {
    const data = res.data;
    console.log(data);
    const container = document.createElement("div");
    container.innerHTML = `<h3>${data}</h3>`;
    imageContainer.appendChild(container);
  });
};
const postArticle = (e) => {
  let formNameInput = document.querySelector("#name");
  let name = formNameInput.value;
  e.preventDefault();
  // console.log(name);
  // console.log(formNameInput.value);
  axios.post("http://localhost:4000/api/article/").then((res) => {
    alert("Name Added");
  });

  // }) //it didnt work for some reason, i spent over 5 hours on it today i neeed practice
};

complimentBtn.addEventListener("click", getCompliment);
fortuneButton.addEventListener("click", getfortune);
imageButton.addEventListener("click", getRandomImage);
qouteButton.addEventListener("click", getQoute);
addName.addEventListener("submit", postArticle);

// makeLifeHackContainer = () =>{
//     const container = document.createElement('div')
//     container.innerHTML = data
//     lifehackContainer.appendChild(houseCard)
// }
