const modal = document.querySelector('.modal');
const listPopUp = document.querySelectorAll('.gallery img');
const fullImage = document.querySelector('.full-img');


// console.log(listLink);
// ---------------------PopUp-Modal---------------------------
listPopUp.forEach((preview) => {
    preview.addEventListener('click', () => {
        modal.classList.add("open");
        fullImage.classList.add("open");
        const alt = preview.getAttribute("alt");
        fullImage.src = `./img/full/${alt}.jpg`;
    });
});

modal.addEventListener('click',(e) =>{
    if(e.target.classList.contains("modal")){
        modal.classList.remove("open");
        fullImage.classList.remove("open");
    };
});
// ---------------------ScrollToView----------------------------
const listLink = document.querySelectorAll('.list_menu li a');
const itemScroll = document.querySelector('section');
let books = document.getElementById('books');
listLink.forEach(element => {
    element.addEventListener('click', () => {
        itemScroll.scrollIntoView(true);
        const alt = element.getAttribute("alt");
        element.href = `#${alt}`
    });
});
// ---------------------RandomColor----------------------------
function rgb(){
    let randNum = Math.floor(Math.random() * 256);
    let randNum2 = Math.floor(Math.random() * 256);
    let randNum3 = Math.floor(Math.random() * 256);
    rand = randNum;
    return 'rgb(' + randNum + ',' + randNum2 + ',' + randNum3 + ')';
}
const textColor = document.querySelector('.text-color');
const btnSwitch = document.querySelector('.btn_switch');

btnSwitch.addEventListener('click',(e) => {
    let rgbColor = rgb();
    textColor.style.color = rgbColor;
    textColor.innerHTML = rgb();
    btnSwitch.style.backgroundColor = rgbColor;
    // -----------------------
 
})
let goTop = document.querySelector('.goTop');
window.addEventListener('scroll',() => {
    let scrollIndex = this.scrollY;
    // console.log(scrollIndex)
    if(scrollIndex > 680){
        goTop.style.opacity = 1;
    } else {
        goTop.style.opacity = 0;
    }
});
goTop.addEventListener('click',() => {
    window.scroll(0,0);
});
// const add = (function() {
//     let counter = 0;
//     return function() {
//         counter += 1;
//         return counter;
//     }
// })();
// console.log(add);
// console.log(add());

// --------------
let btn_add = document.querySelector('.btn_add');
btn_add.addEventListener('click', () =>{
    let firstName = document.getElementById('firstName').value;
    let lastName = document.getElementById('lastName').value;
    let email = document.getElementById('email').value;
    let table = document.querySelector('.table');
    let count = table.rows.length;
    let newRow = table.insertRow(table.rows.length);
    let newCell = newRow.insertCell(0).outerHTML = `<th  scope="row">${count++}</th>`;
    let newCell2 = newRow.insertCell(1).outerHTML = `<td >${firstName}</td>`;
    let newCell3 = newRow.insertCell(2).outerHTML  = `<td >${lastName}</td>`
    let newCell4 = newRow.insertCell(3).outerHTML  = `<td  >${email}</td>`
})
