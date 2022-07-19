//change title
document.title = "JS Calculator";

//mainDiv
var div1 = document.createElement('div');
div1.setAttribute("class" , "black stuff-box");
div1.setAttribute("id" , "mainDiv");

//Title Header
var Header = document.createElement('h1');
Header.textContent = "JavaScript Calculator";

//instruction p
var intro = document.createElement('p');
intro.textContent = "Create An Expression";

//form for inupt
var form = document.createElement('FORM');

//number input
var numberField1 = document.createElement('INPUT');
numberField1.setAttribute("type","number");
numberField1.setAttribute("placeholder","5");
numberField1.setAttribute("id","firstNumber");
//2nd number input
var numberField2 = document.createElement('INPUT');
numberField2.setAttribute("type","number");
numberField2.setAttribute("placeholder","8");
numberField2.setAttribute("id","secondNumber");


//make operations menu
var operation = document.createElement('select');
operation.setAttribute("id", "operator");

//addition
var option1 = document.createElement('option');
option1.setAttribute('value',"+");
option1.setAttribute('id',"add");
option1.textContent = "+";

//subtraction
var option2 = document.createElement('option');
option2.setAttribute('value',"-");
option2.setAttribute('id',"sub");
option2.textContent = "-";

//multiply
var option3 = document.createElement('option');
option3.setAttribute('value', "*");
option3.setAttribute('id', "multiply");
option3.textContent = "*";

//divide
var option4 = document.createElement('option');
option4.setAttribute('value', "/");
option4.setAttribute('id', "divide");
option4.textContent = "/";

//modulo
var option5 = document.createElement('option');
option5.setAttribute('value', "%");
option5.setAttribute('id', "mod");
option5.textContent = "%";

//exponet
var option6 = document.createElement('option');
option6.setAttribute('value', "**");
option6.setAttribute('id', "exponets");
option6.textContent = "**";

//next div color
var colorInput = document.createElement('INPUT');
colorInput.setAttribute('type','color');
colorInput.setAttribute('id','colors');
var colorLable = document.createElement('label');
colorLable.setAttribute("for","colors");
colorLable.textContent = "Color Of New Result <Div>";

//submit button
var submit = document.createElement("INPUT");
submit.setAttribute('type','button');
submit.setAttribute('value', "compute");

var counter = 0;

submit.addEventListener('click', function (event) {
    //get data
    let num1 = document.querySelector('#firstNumber').value;
    let num2 = document.querySelector('#secondNumber').value;
    let operator = document.querySelector('#operator').value;
    let divcolor = document.querySelector('#colors').value;
    
    //get date
    date = new Date().toLocaleString();

    //new div with color and id number
    let newDiv = document.createElement('div');
    newDiv.setAttribute("class" , "stuff-box");
    newDiv.setAttribute("id" , "div" + counter);
    counter++;

    //check if blank input
    if(num1 == "" || num2 == ""){
        newDiv.setAttribute("class" , "red stuff-box");
        newDiv.textContent = date + " Error! Missing one or more operands!";

    }
    else{
        //evaluate and print with div color
        newDiv.setAttribute("style","background-color: " + divcolor);
        let a = parseFloat(num1);
        let b = parseFloat(num2);
        let ans = DoMath(operator, a, b);
        let expr = num1 + " " + operator + " " + num2;
        //let ans = eval(expr);
        expr += " = " + ans;
        newDiv.textContent = date + "   " + expr;
    }

    //click to remove
    newDiv.addEventListener('click', function(event){
        newDiv.remove();
    });

    //add to documnet
    let mainDiv = document.querySelector('#mainDiv');
    document.body.appendChild(newDiv);
    mainDiv.insertAdjacentElement("afterend", newDiv);
    
  });

//for space needed
var blank = document.createElement("p");



// add all to select
operation.appendChild(option1);
operation.appendChild(option2);
operation.appendChild(option3);
operation.appendChild(option4);
operation.appendChild(option5);
operation.appendChild(option6);

//add to form
form.appendChild(numberField1);
form.appendChild(operation);
form.appendChild(numberField2);
form.appendChild(submit);
form.appendChild(blank);
form.appendChild(colorInput);
form.appendChild(colorLable);

// add to div
div1.appendChild(Header);
div1.appendChild(intro);
div1.appendChild(form);

//add div to DOM
document.body.appendChild(div1);



function add(a,b) {
    return a + b;
}

function subtract(a,b){
    return a - b;
}

function multiply(a,b){
    return a*b;
}

function divide(a,b){
    return a/b;
}

function modulo(a,b) {
    return a%b
}

function expo(a,b) {
    return a ** b;
}

function DoMath(operator,a,b) {
    let ans;
    console.log(operator)
    switch(operator){
        case "+":
            ans = add(a,b);
            break;
        case "-":
            ans = subtract(a,b);
            break;
        case "/":
            ans = divide(a,b);
            break;
        case "*":
            ans = multiply(a,b);
            break;
        case "%":
            ans = modulo(a,b);
            break;
        case "**":
            ans = expo(a,b);
            break;
        default:
            ans = "err";
    }
    return ans;
}




