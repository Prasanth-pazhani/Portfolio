const hamburger = document.querySelector('.header .new-bar .nav-list .hamburge');
const mobile_menu = documnt.querySelector('header .new-bar .nav-list u1');
const menu_item = document.querySelectorAll('header .new-bar .nav-list u1 li a');
const header = document.querySelector('#header .container');

hamburger.addEventListener('click',()=>{ hamburger.classList.toggle('active');mobile_menu.classList.toggle('active');});

document.addEventListener('scroll',( )=>{
    var scroll_position = window.scrollY; // console.log(scroll_position); 
    if(scroll_position > 250) {
        header.style.backgroundColor = 'gray';
    }
    else{
        header.style.backgroundColor='transparent';
    }
});

menu_item.forEach((item)=>{
    item.addEventListener('click',()=>{
        hamburger.classList.toggle('active');
        mobile_menu.classList.toggle('active');
    });
});
