function add1() {
    document.getElementById("screen").innerHTML += 1;
}

function add2() {
    document.getElementById("screen").innerHTML += 2;
}

function add3() {
    document.getElementById("screen").innerHTML += 3;
}

function add4() {
    document.getElementById("screen").innerHTML += 4;
}

function add5() {
    document.getElementById("screen").innerHTML += 5;
}

function add6() {
    document.getElementById("screen").innerHTML += 6;
}

function add7() {
    document.getElementById("screen").innerHTML += 7;
}

function add8() {
    document.getElementById("screen").innerHTML += 8;
}

function add9() {
    document.getElementById("screen").innerHTML += 9;
}

function add0() {
    document.getElementById("screen").innerHTML += 0;
}

function adddt() {
    document.getElementById("screen").innerHTML += ".";
}

function reset() {
    document.getElementById("screen").innerHTML = "";
}

function del() {
    let content = document.getElementById("screen").textContent
    cont = content.slice(0, -1);
    // console.log(cont);
    document.getElementById("screen").innerHTML = cont;
}


function add() {
    let content = document.getElementById("screen");
    content.innerHTML += "+"
        // let a = content + 5;
        // console.log(a);
}

function sub() {
    let content = document.getElementById("screen");
    content.innerHTML += "-"
}

function mul() {
    let content = document.getElementById("screen");
    content.innerHTML += "X"
}

function div() {
    let content = document.getElementById("screen");
    content.innerHTML += "/"
}


function equ() {
    let content = document.getElementById("screen").textContent;
    cont = parseFloat(content);
    if (content.includes("+")) {
        console.log("ki beh");
        let iplus = content.indexOf("+");
        let cont2 = content.slice(iplus, );
        cont2 = parseFloat(cont2);
        let result = cont + cont2;
        document.getElementById("screen").innerHTML = result;
    } else if (content.includes("-")) {
        console.log("true");
        let iminus = content.indexOf("-");
        let cont2 = content.slice(iminus + 1, );
        num2 = parseFloat(cont2);
        let result = cont - num2;
        document.getElementById("screen").innerHTML = result;
    } else if (content.includes("X")) {
        console.log("xxx");
        let imul = content.indexOf("X");
        let cont2 = content.slice(imul + 1, );
        num2 = parseFloat(cont2);
        let result = cont * num2;
        document.getElementById("screen").innerHTML = result;
    } else if (content.includes("/")) {
        console.log("true");
        let idiv = content.indexOf("/");
        let cont2 = content.slice(idiv + 1, );
        num2 = parseFloat(cont2);
        let result = cont / num2;
        document.getElementById("screen").innerHTML = result;
    }
}


function theme() {
    let before = document.getElementById("agot").textContent;
    let after = document.getElementById("pisot").textContent;
    if (after == "....") {
        document.getElementById("agot").innerHTML = "..";
        document.getElementById("pisot").innerHTML = "..";
        let stylesheet = document.getElementById("style");
        stylesheet.removeAttribute("href");
        stylesheet.href = "./theme2.css";

    } else if (after == "..") {
        document.getElementById("agot").innerHTML = "....";
        document.getElementById("pisot").innerHTML = "";
        let stylesheet = document.getElementById("style");
        stylesheet.removeAttribute("href");
        stylesheet.href = "./theme3.css";
    } else {
        document.getElementById("agot").innerHTML = "";
        document.getElementById("pisot").innerHTML = "....";
        let stylesheet = document.getElementById("style");
        stylesheet.removeAttribute("href");
        stylesheet.href = "./theme1.css";
    }
}
