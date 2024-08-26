
let Ele1 = document.getElementById("1");
let Ele2 = document.getElementById("2");
let Ele3 = document.getElementById("3");
let Ele4 = document.getElementById("4");
let Ele5 = document.getElementById("5");
let Ele6 = document.getElementById("6");
let Ele7 = document.getElementById("7");
let Ele8 = document.getElementById("8");
let Ele9 = document.getElementById("9");
let Ele0 = document.getElementById("0");


let MEle = document.getElementById("mc");
let MPEle = document.getElementById("m+");
let divEle = document.getElementById("/");
let multipleEle = document.getElementById("*");
let minusEle = document.getElementById("-");
let ElePl = document.getElementById("+");
let EleEqual = document.getElementById("=");
let EleDot = document.getElementById(".");


let displayEle = document.getElementById("display");





const buttons = [Ele0, Ele1, Ele2, Ele3, Ele4, Ele5, Ele6, Ele7, Ele8, Ele9, divEle, multipleEle, minusEle, ElePl, EleDot];

buttons.forEach(button => {
    button.onclick = function () {
        displayEle.value += button.textContent;
    };
});


// mEle
 MEle.onclick = function () {
    displayEle.value = 0;
    // console.log("hii")
}

// divEle
  divEle.onclick = function () {
    displayEle.value += "/";
    // console.log("hii")
}


// multipleEle
  multipleEle.onclick = function () {
    displayEle.value += "*";
    // console.log("hii")
}


// minusEle
  minusEle.onclick = function () {
    displayEle.value += "-";
    // console.log("hii")
}


// ElePl
 ElePl.onclick = function () {
    displayEle.value += "+";
    // console.log("hii")
}


// EleEqual
EleEqual.onclick = function () {
displayEle.value = eval(displayEle.value);
}