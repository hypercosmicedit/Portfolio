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


const aboutMe = document.querySelector("#aboutBtn");
aboutMe.addEventListener("click", ()=>{ 
    document.body.innerHTML = "";
    let el = document.createElement("div");
    el.add.classList("navBarHome");
    el.innerHTML = "Hi";
    document.body.appendChild(el);
})

const contactUs = document.querySelector("#contactBtn");
contactUs.addEventListener("click", ()=>{ 
    document.body.innerHTML = "";
    let el = document.createElement("div");
    el.innerHTML = "<h1>hii</h1>";
    document.body.appendChild(el);
})