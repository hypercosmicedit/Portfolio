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





//*********About Me Page*********//
const aboutMe = document.querySelector(".aboutBtn");
aboutMe.addEventListener("click", ()=>{ 
    document.body.innerHTML = "";
    let el = document.createElement("div");
        let name = document.createElement("div");
        let navigation = document.createElement("div");
        navigation.classList.add("grpBtn");


        let homeBtn = document.createElement("button")
        homeBtn.innerHTML = "<a href='./index.html'>HOME</a>";
        homeBtn.classList.add("navigationBarAbout");
        homeBtn.classList.add("aboutBtn");

        let AboutBtn = document.createElement("button")
        AboutBtn.innerText = "RESUME";
        AboutBtn.classList.add("navigationBarAbout");
        AboutBtn.classList.add("aboutBtn");

        let ContactBtn = document.createElement("button")
        ContactBtn.innerText = "CONTACT US";
        ContactBtn.classList.add("navigationBarAbout");
        ContactBtn.classList.add("contactBtn");


        navigation.appendChild(homeBtn);
        navigation.appendChild(AboutBtn);
        navigation.appendChild(ContactBtn);


        name.innerText = "HYPER COSMIC EDITS";
        name.classList.add("nameHome")

    el.classList.add("navBarHome");
    el.appendChild(name);
    el.appendChild(navigation);
    document.body.appendChild(el);
})



//*********Contact Us ***********//
const contactUs = document.querySelector(".contactBtn");
contactUs.addEventListener("click", ()=>{ 
    document.body.innerHTML = "";
    let el = document.createElement("div");
    el.innerHTML = "<h1>hii</h1>";
    document.body.appendChild(el);
})


const homePage = document.querySelector(".homeBtn");
contactUs.addEventListener("click", ()=>{ 
    window.location.href = "index.html";
})