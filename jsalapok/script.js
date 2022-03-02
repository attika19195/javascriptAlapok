console.log("Szkriptben");

function uzenet(){
    console.log("Függvényben");
}

function init(){
    document.getElementById("elem").innerHTML = "hahó";
    document.getElementById("gomb").addEventListener("click", uzenet);
}



window.addEventListener("load", init, false);



//változok hasznalata vara, let, const */

var szoveg = "alma";
var szoveg2;

console.log(szoveg2);

szoveg2 = "körte";

console.log(szoveg3);
var szoveg3 = "szilva";

var a = "2";
var b = 3;
var osszeg = Number(a) + Number(b);

console.log(osszeg);



var logikai=false;

if(a === 2){
    console.log("Az a szám!")
    console.log(typeof a);
}else{
    console.log("Az a nem szám!")
    console.log(typeof a);
}

var szin = "green"



if(szin === "red"){
    console.log("piros")
    console.log(typeof a);
}else if(szin === "green"){
    console.log("zöld")
    console.log(typeof a);
}else if(szin === "puple"){
    console.log("lila")
    console.log(typeof a);
}else if(szin === "blue"){
    console.log("kék")
    console.log(typeof a);
}else{
    console.log("ezt a szint nem ismerem!")
}