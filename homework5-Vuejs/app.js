
const app = Vue.createApp({
    data(){
        return{
            imgArr:[
                {
                    image:"img/small/pexels-anna-shvets-4588065.jpg",
                    alt: 1
                },
                {
                    image:  "img/small/pexels-anthony-139639.jpg",
                    alt: 2
                },
                {
                    image:"img/small/pexels-burst-374825.jpg",
                    alt: 3
                },
                {
                    image:"img/small/pexels-carlos-spitzer-17811.jpg",
                    alt: 4
                },
                {
                    image:"img/small/pexels-charles-1851164.jpg",
                    alt: 5
                },
                {
                    image:"img/small/pexels-frans-van-heerden-631292.jpg",
                    alt: 6
                },
                {
                    image:"img/small/pexels-gratisography-4602.jpg",
                    alt: 7
                },
                {
                    image:"img/small/pexels-jan-kopřiva-3614358.jpg",
                    alt: 8
                },
                {
                    image:"img/small/pexels-jeremy-bishop-2422915.jpg",
                    alt: 9
                },
                {
                    image: "img/small/pexels-jim-long-949859.jpg",
                    alt: 10
                },
            ],
            imagePopUp: '',
            isOpenModal: false,
            menu:[
                "gallery",
                "books",
                "students",
                "color",
            ],
            colorChanged: {
                color: 'red',
            },
            randomColor1: 22,
            randomColor2: 22,
            randomColor3: 22,
            
        }
    },
    methods:{
        popUp(image){
           this.imagePopUp = image;
           this.isOpenModal = true;
        //    console.log(this.imagePopUp);
        },
        closePopUp(event){
        //    console.log(event.target.classList.contains("modal"));
        if(event.target.classList.contains("modal")){
            if(this.isOpenModal){
                this.isOpenModal = false;
            }
        }
        },
        scrollToSection(event) {
            let alt = event.target.getAttribute('alt');
            console.log(alt);
            document.querySelector(`#${alt}`).scrollIntoView(true);
        },
        changeColor(){
            this.randomColor1 = Math.floor(Math.random() * 256);
            this.randomColor2 = Math.floor(Math.random() * 256);
            this.charandomColor3 = Math.floor(Math.random() * 256);
        }
    },
    // watch:{
       
    // }
    computed:{
        changeColor2(){
            return {color: `rgb(${this.randomColor1},${this.randomColor2},${this.randomColor3})`};
        },
        changeColorBg(){
            return {backgroundColor: `rgb(${this.randomColor1},${this.randomColor2},${this.randomColor3})`};
        }
    }
})
app.mount('body')

