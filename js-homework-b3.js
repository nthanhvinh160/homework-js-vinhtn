let nunmberArray = [1,2,3,4,5,6,7,8,9]
let sum = 0
// 
// nunmberArray.forEach(element => {
//     sum += element;
//     console.log(sum)
// });

let sumArr = nunmberArray.reduce((previous, current) =>{
    return previous + current;
}
,0
);
// document.querySelector(".number_array").innerHTML = sumArr;
const numberArrayChange = document.getElementsByClassName('number_array');
numberArrayChange[0].innerHTML = sumArr;

console.log(sumArr)
// ------------Bai2-------------
let strArray = ['hihi','hehe','haha']
let element1 = document.querySelector(".bai2");
let paraBefore = document.createElement("p");
let paraAfter = document.createElement("p");
let node = document.createTextNode("Insert ở đầu");
let last_node = document.createTextNode("Insert ở cuối");
let insertBefore = document.querySelector('.string_array');
strArray.forEach(
    element => {
        let para = document.createElement("p");
        let node = document.createTextNode(element);
        para.appendChild(node);
        element1.appendChild(para);
    }
);
paraBefore.appendChild(node);
paraAfter.appendChild(last_node);
element1.insertBefore(paraBefore, insertBefore);
element1.appendChild(paraAfter);



// ------------Bai3-------------
let btn = document.querySelector('.btn_events');
let currentBackground = true
btn.addEventListener(
    'click', function () {
        if(currentBackground){
            document.body.style.backgroundColor = 'rgba(0,0,0,0.2)';
            document.querySelector('.custom').innerHTML = "Change to White";
            currentBackground = false;
        } else {
            document.body.style.backgroundColor = '#fff';
            document.querySelector('.custom').innerHTML = "Change to Dark";
            currentBackground = true;
        }
    }
)
let btn2 = document.querySelector('.btn_events2');
let currentState = true
function noneAll(){
    // document.querySelector('#section2').toggleAttribute('hidden');
    if(currentState){
        document.querySelector('#section2').style.display = 'none';
        document.querySelector('#app').style.display = 'block';
        currentState = false;
    } else {
        document.querySelector('#section2').style.display = 'block';
        document.querySelector('#app').style.display = 'none';
        currentState = true;
    }
}
