
const sliderContent = document.querySelector('.slider__wrapper');
const sliderCard = document.getElementsByClassName('.slider__card');
const changeButton = document.querySelector('.new-items-btn')

const itemsImgPack = ['cap', 'chevron', 'clothe', 'souvenir']

for (let index = 1; index < 7; index++){
    sliderContent.innerHTML += `
    <div class="slider__card anim-items">
        <img width="350px" height="350px" src="./images/caps/cap${index}.webp" alt="img">
    </div>
`
}

changeButton.addEventListener('click', ()=>{

    let item = itemsImgPack[Math.floor(Math.random()*4)]
    
    sliderContent.innerHTML = ``
    for (let index = 1; index < 7; index++){
        sliderContent.innerHTML += `
        <div class="slider__card anim-items">
            <img width="350px" height="350px" src="./images/${item}s/${item}${index}.webp" alt="img">
        </div>
    `
    }
    const animItems = document.querySelectorAll(".anim-items");

if(animItems.length > 0 ){


    window.addEventListener("scroll", animOnScroll)


    function animOnScroll(){
        

        for(let i = 0; i < animItems.length; i++){
            

            const     animItem = animItems[i];
            
            const     animItemHeight = animItem.clientHeight;
            const     animItemOffset = offset(animItem).top;
            const     animStart = 4;


         
            let animItemPoint = window.innerHeight - animItemHeight / animStart;
                
            if(animItemHeight > window.innerHeight){
                animItemPoint = window.innerHeight - window.innerHeight / animStart
            }

            if((pageYOffset > animItemOffset - animItemPoint) && (pageYOffset < animItemOffset + animItemHeight)){
                
                animItem.classList.add("_activist")
            }else{
                
                animItem.classList.remove("_activist")
            }
    }
    }

    function offset(el) {
        const rect = el.getBoundingClientRect(),
            scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
            scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        return {top: rect.top + scrollTop, left: rect.left + scrollLeft}


    }
    animOnScroll()
}
})


const animItems = document.querySelectorAll(".anim-items");

if(animItems.length > 0 ){


    window.addEventListener("scroll", animOnScroll)


    function animOnScroll(){
        

        for(let i = 0; i < animItems.length; i++){
            

            const     animItem = animItems[i];
            
            const     animItemHeight = animItem.clientHeight;
            const     animItemOffset = offset(animItem).top;
            const     animStart = 4;


         
            let animItemPoint = window.innerHeight - animItemHeight / animStart;
                
            if(animItemHeight > window.innerHeight){
                animItemPoint = window.innerHeight - window.innerHeight / animStart
            }

            if((pageYOffset > animItemOffset - animItemPoint) && (pageYOffset < animItemOffset + animItemHeight)){
                
                animItem.classList.add("_activist")
            }else{
                
                animItem.classList.remove("_activist")
            }
    }
    }

    function offset(el) {
        const rect = el.getBoundingClientRect(),
            scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
            scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        return {top: rect.top + scrollTop, left: rect.left + scrollLeft}


    }
    animOnScroll()
}