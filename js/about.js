function printMessage(){
    let vote = document.getElementById('vote-choice');
    let answer = document.getElementById('answer')
    switch(vote.value){
        case "#1":
            answer.style.color = "green"
            answer.innerText = "Correct! I actually got married at 21";
            break;
        case "#2":
            answer.style.color = "white"
            answer.innerText = "So close. I drank a lot of milk growing up. Try Again";
            break;
        case "#3":
            answer.style.color = "white"
            answer.innerText = "Muwhahaha incorrect. I actually get very motion sick... Try Again.";
            break;
        default:
            answer.innerText = "Waiting for vote..."
            
    }
}
