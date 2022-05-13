let btns = document.querySelectorAll(".num-button");
let resultBox = document.querySelector("#result-box");
let clearBtn = document.querySelector('#clear');

let total = document.querySelector("#total");

let btnSpread = [...btns];

btnSpread.forEach((button, i) => {
    button.addEventListener("click", () => {

        let value = btns[i].innerHTML
        resultBox.innerHTML += value
    });
});

const arrayStart = () => {
    if (resultBox.innerHTML.length == 0) {
        resultBox.innerHTML += "["
    }

}

const arrayEnd = () => {
    if ((!(resultBox.innerHTML.indexOf("]") > -1)) && resultBox.innerHTML[0] == "[") {
        resultBox.innerHTML += "]"
    }
}

const resClear = () => {
    resultBox.innerHTML = ""
}
const backSpace = () => {
    var newString = resultBox.innerHTML.substring(0, resultBox.innerHTML.length - 1)
    resultBox.innerHTML = newString
}


const checkJolly = () => {
    var givenString = resultBox.innerHTML
    if (givenString[0] == "[") {
        givenString = givenString.substring(1)

    }

    if (givenString[givenString.length - 1] == "]" || givenString[givenString.length - 1] == ",") {
        givenString = givenString.substring(0, givenString.length - 1)
    }
    var arr = givenString.split(",")

    arr.map(val => parseFloat(val))
    var diffArr = []
    for (let i = 0; i < arr.length - 1; i++) {
        diffArr.push(Math.abs(arr[i + 1] - arr[i]))
    }
    diffArr.sort((a, b) => a - b)
    var finalArr = []
    for (let i = 0; i < arr.length - 1; i++) {
        finalArr.push(Math.abs(diffArr[i + 1] - diffArr[i]))
    }
    finalArr.pop()
    finalArr.every((val, i, arr) => val === arr[0]) ? successModal(arr) : failedModal(arr)
    resultBox.innerHTML = ""
}

const successModal = (arr) => {

    var modal = document.getElementById('myModalSuccess');
    var givenArr = document.getElementById('givenArr1')

    modal.style.display = "block";
    givenArr.innerText = `[${arr}]`
    window.onclick = function (event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
}
const failedModal = (arr) => {
    var modal = document.getElementById('myModalfailed');
    var givenArr = document.getElementById('givenArr2')
    modal.style.display = "block";
    givenArr.innerText = `[${arr}]`

    window.onclick = function (event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
}