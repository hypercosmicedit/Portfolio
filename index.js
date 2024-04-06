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


const form = document.getElementById('contactForm');

form.addEventListener('submit', (e)=>{
    e.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    console.log(name, email, message);

    Email.send({
        Host : "smtp.elasticemail.com",
        Username : "sarthak613singh@gmail.com",
        Password : "B9966F82772B8FA4E224D213642C35F83909",
        To : "mits1451@gmail.com",
        From : "sarthak613singh@gmail.com",
        Subject : "You have a new message from your website from " + name,
        Body : email + message
    }).then(
        message => {
            console.log(message);
            alert('Message sent successfully');
            form.reset();
        },
        error => {
            console.error('Error:', error);
            alert('Failed to send message. Please try again later.');
        }
    );
})
