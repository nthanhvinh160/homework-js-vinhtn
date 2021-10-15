const modal = document.querySelector('.modal');
const listPopUp = document.querySelectorAll('.gallery img');
const fullImage = document.querySelector('.full-img');
listPopUp.forEach((preview) => {
    preview.addEventListener('click', () => {
        modal.classList.add("open");
        fullImage.classList.add("open");
        const alt = preview.getAttribute("alt");
        fullImage.src = `./img/full/${alt}.jpg`
    });
});

modal.addEventListener('click',(e) =>{
    if(e.target.classList.contains("modal")){
        modal.classList.remove("open");
        fullImage.classList.remove("open");
    };
});