var APIkey = "65e9d908d8c61585942f8794a3890e10";

function clickFly(){
    let start = document.getElementById('start').value;
    let end = document.getElementById('end').value;
    let to = document.getElementById('to').selectedOptions[0].id;
    let from = document.getElementById('from').selectedOptions[0].id;
    console.log("from " + from + " on Date:" + start);
    console.log("To " + to + " Returning on:" + end);


    fetch("https://api.aviationstack.com/v1/flights?access_key=65e9d908d8c61585942f8794a3890e10&flight_date=2022-07-25&dep_iata=SLC&arr_iata=AZA")
    .then(response => response.json() )
    .then(json =>{
        var Data = json;
        console.log(Data['contents']['jokes'][0]['text']);

    })
    .catch(error =>{
            console.log(error);
        });

}

