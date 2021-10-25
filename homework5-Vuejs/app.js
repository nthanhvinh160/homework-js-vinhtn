
const app = Vue.createApp({
    data(){
        return{
            imgArr:[
                "pexels-anna-shvets-4588065.jpg",
                "pexels-anthony-139639.jpg",
                "pexels-burst-374825.jpg",
                "pexels-carlos-spitzer-17811.jpg",
                "pexels-charles-1851164.jpg",
                "pexels-frans-van-heerden-631292.jpg",
                "pexels-gratisography-4602.jpg",
                "pexels-jan-kopřiva-3614358.jpg",
                "pexels-jeremy-bishop-2422915.jpg",
                "pexels-jim-long-949859.jpg",
            ],
            menu:[
                "gallery",
                "books",
                "students",
                "color",
            ]
            
            
        }
    },
    methods:{
        popUp(event){
            let fullImg = document.querySelector('.full-img');
            let modal = document.querySelector('.modal');
            let alt = event.target.getAttribute('alt');
            fullImg.src = `img/full/${alt}.jpg`;
            setTimeout(()=>{
                modal.classList.add('open');
            },200)
            fullImg.classList.add('open');
        },
        turnBack(event){
            let modal = document.querySelector('.modal');
            if(event.target.classList.contains('modal')){
                modal.classList.remove("open");
            };
        },
        scrollToSection(event) {
            let alt = event.target.getAttribute('alt');
            console.log(alt);
            document.querySelector(`#${alt}`).scrollIntoView(true);
        },
        changeColor(){
            let randomColor1 = `${(Math.floor(Math.random() * 256))}`;
            let randomColor2 = `${(Math.floor(Math.random() * 256))}`;
            let randomColor3 = `${(Math.floor(Math.random() * 256))}`;
            let textColor = document.querySelector('.text-color');
            let btnSwitch = document.querySelector('.btn_switch');
            let rdColor = `rgb(${randomColor1},${randomColor2},${randomColor3})`;
            textColor.style.color = rdColor;
            textColor.innerHTML = rdColor;
        }
    },
    watch:{
        openClass:{
            handler() {
                console.log('Class was changed')
            },
            deep: true
        },
        'openClass.open'(event){
            console.log('class was change state')
        }
    }
})
app.mount('body')

