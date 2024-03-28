const observer = new IntersectionObserver((entries =>{
    entries.forEach((entry)=>{
        if(entry.isIntersecting){
            entry.target.classList.add('show');
        }else{
            entry.target.classList.remove('show');
        }
    })
}))
const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el)=> observer.observe(el));



const container = document.querySelector(".firstHalf");
const container1 = document.querySelector(".secondHalf");

container.addEventListener('mouseenter', (e)=>{
    console.log(e);
    container1.style.overflow = 'hidden';
    console.log("hello");
});





