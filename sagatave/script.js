//1.uzd
function ievade(){
    let v = document.getElementById("nozime").value;
    document.getElementById("izvade").innerHTML = "Tu ierakstīji "+ v;
}

//2.uzd
function ja(){
    document.getElementById("atb_ja").style.background="green";
}
function ne(){
    document.getElementById("atb_ne").style.background="red";
}

//3.uzd
function paslept(){
    document.getElementById("att").style.display="none";
}