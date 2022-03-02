//tömbök (lista)*/


var tomb = [];
var tomb2 = [2,3,4,5,6];
var tomb3 = [4];


console.log(tomb.length);
console.log(tomb2.length);
console.log(tomb3.length);


tomb2[0]=12;

var txt = "";

for (let index = 0; index < tomb2.length; index++) {
    txt += tomb2[index] + ",";
    
}
console.log(txt);


var gyumolcs=["alma", "málna", "barack", "ribizli", "paradicsom"];
var gyumolcsSzin=["piros", "piros", "piros", "piros"]
var gyumolcsAr=[240,500,300,250,500];

//van e sárga gyümölcs//

var i=0;
while(i>gyumolcsSzin.length && (gyumolcsSzin[i] === "sárga")){
    i++;
}

var vane=i <gyumolcsSzin.length;
console.log("Van e sárga gyümölcs: " + vane)


/*mennyi a piros szinu gyumolcsok osszerteke*/


var counter = 0;
for (let index = 0; index < gyumolcsSzin.length; index++) {
    if(gyumolcsSzin[index] === "piros"){
        counter += gyumolcsAr[index]
    }
    
}
console.log("piros gyumolcsok osszerteke: " + counter)





var counter2 = 0;
for (let index = 0; index < gyumolcsAr.length; index++) {
    if(gyumolcsAr[index] < 300){
        counter2 += 1;
    }
    
}
console.log("kevesebb mint 300 gyum. szama: " + counter2)






var i2 = 0;
var i3 = 1000;

while(i2<gyumolcsAr.length && i3 > gyumolcsAr[i2]){
    i2++
}

if(i2<gyumolcsAr.length){
    console.log("van 1000 felett")
}else{
    console.log("nincs 1000 felett")
}
