

function goHome() {
    document.getElementById('JokePage').style.display = "none";
    document.getElementById('HomePage').style.display = "grid";
    document.getElementById('HistoryPage').style.display = "none";
    document.getElementById('AboutPage').style.display = "none";

    document.getElementById('jokeButton').setAttribute('class','');
    document.getElementById('homeButton').setAttribute('class','active');
    document.getElementById('aboutButton').setAttribute('class','');
    document.getElementById('workButton').setAttribute('class','');

    let RightSideBar = document.getElementById('RightList');
    RightSideBar.children[0].innerText = "Changing"
    RightSideBar.children[1].innerHTML = "<li>Test1</li><li>Test2</li><li>Test3</li>"


}


function goAboutMe() {
    document.getElementById('JokePage').style.display = "none";
    document.getElementById('HomePage').style.display = "none";
    document.getElementById('HistoryPage').style.display = "none";
    document.getElementById('AboutPage').style.display = "grid";

    document.getElementById('jokeButton').setAttribute('class','');
    document.getElementById('homeButton').setAttribute('class','');
    document.getElementById('aboutButton').setAttribute('class','active');
    document.getElementById('workButton').setAttribute('class','');
}


function goHistory() {
    document.getElementById('JokePage').style.display = "none";
    document.getElementById('HomePage').style.display = "none";
    document.getElementById('HistoryPage').style.display = "grid";
    document.getElementById('AboutPage').style.display = "none";

    document.getElementById('jokeButton').setAttribute('class','');
    document.getElementById('homeButton').setAttribute('class','');
    document.getElementById('aboutButton').setAttribute('class','');
    document.getElementById('workButton').setAttribute('class','active');

}

function printMessage(){
    let vote = document.getElementById('vote-choice');
    let answer = document.getElementById('answer')
    switch(vote.value){
        case "#1":
            answer.style.color = "green"
            answer.style.backgroundColor = "white";
            answer.innerText = "Correct! I actually got married at 21";
            break;
        case "#2":
            answer.style.color = "darkred"
            answer.style.backgroundColor = "white";
            answer.innerText = "So close. I drank a lot of milk growing up. Try Again";
            break;
        case "#3":
            answer.style.color = "darkred"
            answer.style.backgroundColor = "white";
            answer.innerText = "Muwhahaha incorrect. I actually get very motion sick... Try Again.";
            break;
        default:
            answer.innerText = "Waiting for vote..."
            
    }
}

function getJoke() {

    document.getElementById('JokePage').style.display = "grid";
    document.getElementById('HomePage').style.display = "none";
    document.getElementById('HistoryPage').style.display = "none";
    document.getElementById('AboutPage').style.display = "none";

    document.getElementById('jokeButton').setAttribute('class','active');
    document.getElementById('homeButton').setAttribute('class','');
    document.getElementById('aboutButton').setAttribute('class','');
    document.getElementById('workButton').setAttribute('class','');



    fetch("https://api.jokes.one/jod")
    .then(response => response.json() )
    .then(json =>{
        let Data = json;
        document.getElementById('joke').innerText = Data.contents.jokes[0].joke.text;
    }) 
}

