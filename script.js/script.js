const suave = document.querySelectorAll('.menu a[href^="#"]')


function scroolsuave(event) {
    event.preventDefault();
    const href= event.currentTarget.getAttribute('href');
   const section = document.querySelector(href);
   const topo = section.offsetTop;
   
   window.scrollTo({
       top:topo,
       behavior:"smooth",

   })
}



suave.forEach ((item) => {

    item.addEventListener('click',scroolsuave);
    });




  



const sumir = document.querySelectorAll('.js-op')
window.addEventListener('scroll',ss)



function ss() {

    sumir.forEach((item) => {

        const toper = item.getBoundingClientRect().top - 500;
        if(toper < 0){

item.classList.add('ativo')


        }

         })
    
}


ss();
