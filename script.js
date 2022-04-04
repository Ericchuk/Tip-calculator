let button = document.querySelectorAll("button");
let each = document.querySelectorAll("small");
let error =  document.querySelector(".onlast");
let person, total;
console.log(button.value)
// console.log(bill,NOP, input3)
console.log(each,error)

function calculateTip(){
    let bill = document.querySelector('#input').value;
    let NOP = document.querySelector("#nop").value;
    let input = document.querySelector(".nop");
    
    if(NOP == 0 || NOP == ""){
        error.style.visibility = "visible";
        input.style.border = "2px solid red";
    }else{
        error.style.visibility = "hidden",
        input.style.border = "2px solid hsl(185, 41%, 84%)";
    }
    person = (bill * 0.05) / NOP;
    let perPerson = (bill / NOP);
    each[0].innerHTML = person.toFixed(2);
    each[1].innerHTML = perPerson.toFixed(2);
}

button[0].addEventListener("click", calculateTip);

function calculateTip1(){
    let bill = document.querySelector('#input').value;
    let NOP = document.querySelector("#nop").value;
    let input = document.querySelector(".nop");
    
    if(NOP == 0 || NOP == ""){
        error.style.visibility = "visible";
        input.style.border = "2px solid red";
    }else{
        error.style.visibility = "hidden",
        input.style.border = "2px solid hsl(185, 41%, 84%)";
    }
    person = (bill * 0.1) / NOP;
    let perPerson = (bill / NOP);
    each[0].innerHTML = person.toFixed(2);
    each[1].innerHTML = perPerson.toFixed(2);
}
button[1].addEventListener("click", calculateTip1);

function calculateTip2(){
    let bill = document.querySelector('#input').value;
    let NOP = document.querySelector("#nop").value;
    let input = document.querySelector(".nop");
    
    if(NOP == 0 || NOP == ""){
        error.style.visibility = "visible";
        input.style.border = "2px solid red";
    }else{
        error.style.visibility = "hidden",
        input.style.border = "2px solid hsl(185, 41%, 84%)";
    }
    person = (bill * 0.15) / NOP;
    let perPerson = (bill / NOP);
    each[0].innerHTML = person.toFixed(2);
    each[1].innerHTML = perPerson.toFixed(2);
}
button[2].addEventListener("click", calculateTip2);

function calculateTip3(){
    let bill = document.querySelector('#input').value;
    let NOP = document.querySelector("#nop").value;
    let input = document.querySelector(".nop");
    
    if(NOP == 0 || NOP == ""){
        error.style.visibility = "visible";
        input.style.border = "2px solid red";
    }else{
        error.style.visibility = "hidden",
        input.style.border = "2px solid hsl(185, 41%, 84%)";
    }
    person = (bill * 0.25) / NOP;
    let perPerson = (bill / NOP);
    each[0].innerHTML = person.toFixed(2);
    each[1].innerHTML = perPerson.toFixed(2);
}

button[3].addEventListener("click", calculateTip3)

function calculateTip4(){
    let bill = document.querySelector('#input').value;
    let NOP = document.querySelector("#nop").value;
    let input = document.querySelector(".nop");
    
    if(NOP == 0 || NOP == ""){
        error.style.visibility = "visible";
        input.style.border = "2px solid red";
    }else{
        error.style.visibility = "hidden",
        input.style.border = "2px solid hsl(185, 41%, 84%)";
    }
    person = (bill * 0.5) / NOP;
    let perPerson = (bill / NOP);
    each[0].innerHTML = person.toFixed(2);
    each[1].innerHTML = perPerson.toFixed(2);
}

button[4].addEventListener("click", calculateTip4)


custom.addEventListener("input", function(){
    let bill = document.querySelector('#input').value;
    let NOP = document.querySelector("#nop").value;
    let custom = document.querySelector("#custom").value; 
    let input = document.querySelector(".nop");
    
    if(NOP == 0 || NOP == ""){
        error.style.visibility = "visible";
        input.style.border = "2px solid red";
    }else{
        error.style.visibility = "hidden",
        input.style.border = "2px solid hsl(185, 41%, 84%)";
    }
    person = ((bill / NOP ) * (custom / 100)) ;
    let perPerson = (bill / NOP);
    each[0].innerHTML = person.toFixed(2);
    each[1].innerHTML = perPerson.toFixed(2);
})

button[5].addEventListener("click", function(){
    each[0].innerHTML = 0..toFixed(2);
    each[1].innerHTML = 0..toFixed(2);
})


































// let span = document.querySelector('span');
// let peopleBox = document.querySelector('#number');
// function calculateTip(){
//     let bill = document.querySelector('#input').value;
//     let percent5 = document.querySelector('#percent5');
//     let people = document.querySelector('#number').value;
//     let totalTip = document.querySelector("#total-tip");
//     let span = document.querySelector('span');
//     let personTip = document.querySelector("#perPersonTip");
//     let total, person;

//     console.log(bill);

//     if(bill === "" || people === ""){
//         span.style.display = "block";
//         peopleBox.style.border = "2px solid red";
//         return;
//     }else{
//         span.style.display = "none"
//         peopleBox.style.border = "none;"
//     }
    
    
//     person = (bill * people) * 0.05;
//     console.log(person);
//     personTip.innerHTML = person.toFixed(2);
//     total = (bill * people);
//     console.log(total);
//     totalTip.innerHTML = total.toFixed(2);
// }


// percent5.addEventListener("click", calculateTip);

// function calculateTip10(){
//     let bill = document.querySelector('#input').value;
//     let percent10 = document.querySelector('#percent10');
//     let people = document.querySelector('#number').value;
//     let totalTip = document.querySelector("#total-tip");
//     let personTip = document.querySelector("#perPersonTip");
//     let total, person;

//     console.log(bill);

//     if(bill === "" || people === ""){
//         span.style.display = "block";
//         peopleBox.style.border = "2px solid red";
//         return;
//     }else{
//         span.style.display = "none"
//         peopleBox.style.border = "none;"
//     }
    
    
//     person = (bill * people) * 0.10;
//     console.log(person);
//     personTip.innerHTML = person.toFixed(2);
//     total = (bill * people);
//     console.log(total);
//     totalTip.innerHTML = total.toFixed(2);
// }

// percent10.addEventListener("click", calculateTip10);


// function calculateTip15(){
//     let bill = document.querySelector('#input').value;
//     let percent15 = document.querySelector('#percent15');
//     let people = document.querySelector('#number').value;
//     let totalTip = document.querySelector("#total-tip");
//     let personTip = document.querySelector("#perPersonTip");
//     let total, person;

//     console.log(bill);

//     if(bill === "" || people === ""){
//         span.style.display = "block";
//         peopleBox.style.border = "2px solid red";
//         return;
//     }else{
//         span.style.display = "none"
//         peopleBox.style.border = "none;"
//     }
    
    
//     person = (bill * people) * 0.15;
//     console.log(person);
//     personTip.innerHTML = person.toFixed(2);
//     total = (bill * people);
//     console.log(total);
//     totalTip.innerHTML = total.toFixed(2);
// }

// percent15.addEventListener("click", calculateTip15);


// function calculateTip25(){
//     let bill = document.querySelector('#input').value;
//     let percent25 = document.querySelector('#percent25');
//     let people = document.querySelector('#number').value;
//     let totalTip = document.querySelector("#total-tip");
//     let personTip = document.querySelector("#perPersonTip");
//     let total, person;

//     console.log(bill);

//     if(bill === "" || people === ""){
//         span.style.display = "block";
//         peopleBox.style.border = "2px solid red";
//         return;
//     }else{
//         span.style.display = "none"
//         peopleBox.style.border = "none;"
//     }
    
    
//     person = (bill * people) * 0.25;
//     console.log(person);
//     personTip.innerHTML = person.toFixed(2);
//     total = (bill * people);
//     console.log(total);
//     totalTip.innerHTML = total.toFixed(2);
// }

// percent25.addEventListener("click", calculateTip25);

// function calculateTip50(){
//     let bill = document.querySelector('#input').value;
//     let percent50 = document.querySelector('#percent50');
//     let people = document.querySelector('#number').value;
//     let totalTip = document.querySelector("#total-tip");
//     let personTip = document.querySelector("#perPersonTip");
//     let total, person;

//     console.log(bill);

//     if(bill === "" || people === ""){
//         span.style.display = "block";
//         peopleBox.style.border = "2px solid red";
//         return;
//     }else{
//         span.style.display = "none"
//         peopleBox.style.border = "none;"
//     }
    
    
//     person = (bill * people) * 0.50;
//     console.log(person);
//     personTip.innerHTML = person.toFixed(2);
//     total = (bill * people);
//     console.log(total);
//     totalTip.innerHTML = total.toFixed(2);
// }

// percent50.addEventListener("click", calculateTip50);

// function customSelf(){
//     let bill = document.querySelector('#input').value;
//     let custom = document.querySelector('#custom').value;
//     let people = document.querySelector('#number').value;
//     let totalTip = document.querySelector("#total-tip");
//     let personTip = document.querySelector("#perPersonTip");
//     let total, person;

//     console.log(bill);

//     if(bill === "" || people === ""){
//         span.style.display = "block";
//         peopleBox.style.border = "2px solid red";
//         return;
//     }else{
//         span.style.display = "none"
//         peopleBox.style.border = "none;"
//     }
    
    
//     person = (bill * people * custom) / 100;
//     console.log(person);
//     personTip.innerHTML = person.toFixed(2);
//     total = (bill * people);
//     console.log(total);
//     totalTip.innerHTML = total.toFixed(2);
//     return;
// }

// custom.addEventListener("input", customSelf);

// let btn6 = document.getElementById("reset");
// function resetBack(){
//     let people = document.querySelector('#number').value;
//     let bill = document.querySelector('#input').value;
//     let totalTip = document.querySelector("#total-tip");
//     let personTip = document.querySelector("#perPersonTip");
//     if(people != "0" || bill != "0"){
//         bill.value = "";
//         people.value = "";
//         custom.value = "";
//         totalTip.innerHTML = "0.00";
//         personTip.innerHTML = "0.00";
//         span.style.display = "none";
//     }
// }

// btn6.addEventListener("click", resetBack);