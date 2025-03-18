x=5
y=7
z=x+y
console.log(z)

A="Hello"
B=" world!"
C=A+B
console.log(C)

function SumNPrint(x1, x2) {
    x3=x1+x2;
    console.log(x3)
}

let value= SumNPrint(x,y)
let text= SumNPrint(A,B)

if(C>z){
    console.log(C);
} else if (C<z){
    console.log(z);
} else {
    console.log("good job!");
}

let L1=["Watermelon", "Pineapple", "Pear", "Banana"];
let L2=["Apple", "Banana", "Kiwi", "Orange"];

function findTheBanana(array){
    array.forEach(item => {
        if (item=="Banana") {
            alert('Found Bananas!');
        }
    });
}
findTheBanana(L1);
findTheBanana(L2);

//function greetingFunc() {
    //const d = new Date();
    //h = d.getHours();{
        //if (h < 12) {
          //  console.log("Good morning");
        //} else if (h >= 12 & h < 18) {
          //  console.log("Good afternoon");
        //} else if (h >= 18 & h < 20) {
          //  console.log("Good evening");
        //} else {
      //      console.log("Good night");
    //    }
  //  }
//}
//greetingFunc();

function greetingFunc() {
    const d = new Date();
    const h = d.getHours();
    const greetingElement = document.getElementById('greeting');
    if (h < 12) {
        greetingElement.innerHTML = "Good morning, my name is Jullie Cach!";
    } else if (h >= 12 & h < 18) {
        greetingElement.innerHTML = "Good afternoon, my name is Jullie Cach!";
    } else if (h >= 18 & h < 20) {
        greetingElement.innerHTML = "Good evening, my name is Jullie Cach!";
    } else {
        greetingElement.innerHTML = "Good night, my name is Jullie Cach!";
    }
}
greetingFunc();

function addYear() {
    var d = new Date();
    var y = d.getFullYear();
    var E = document.getElementById("copyYear");
    E.innerHTML=y;
}
addYear();

function showList() {
    document.getElementById("activities").style.display = 'block';
    document.getElementById("showButton").style.display = 'none';
}
showList();