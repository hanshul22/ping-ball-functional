const play = document.querySelector("#button");

play.onclick = () => {
    location.href = "./MainGame.html";
};


const userName = document.getElementById('userName');
const userNickName = document.getElementById('userNickName');

userName.onchange = () =>{
    localStorage.setItem('userName', userName.value);
}
userNickName.onchange =() =>{
    localStorage.setItem('userNickName', userNickName.value);
}