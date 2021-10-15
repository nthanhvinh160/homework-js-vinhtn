const modal = document.querySelector('.modal');
const listPopUp = document.querySelectorAll('.gallery img');
const fullImage = document.querySelector('.full-img');
listPopUp.forEach((preview) => {
    preview.addEventListener('click', () => {
        modal.classList.add("open");
        fullImage.classList.add("open");
        const originalSrc = preview.getAttribute("data-original");
        fullImage.src = `./img/full/${originalSrc}`
    });
});

modal.addEventListener('click',(e) =>{
    if(e.target.classList.contains("modal")){
        modal.classList.remove("open");
        fullImage.classList.remove("open");
    };
});