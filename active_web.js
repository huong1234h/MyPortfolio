

// === ACTIVE OF NAVIGATION ====== //

const toggle_menu = document.querySelector(".toggle-menu"),
        toggle_cancel = document.querySelector(".toggle-cancel"),
            nav_menu = document.querySelector(".nav_menu") ;

// Display Menu

var displayMenu = function(){
    nav_menu.style.bottom = "0" ;
}

toggle_menu.addEventListener("click",displayMenu);

// Hidden Menu

var hiddenMenu = function(){
    nav_menu.style.bottom = "-100%" ;
}

toggle_cancel.addEventListener("click" , hiddenMenu) ;


// ACTIVE FOR DISPLAY LIST SKILLS

const arrow_active = document.querySelectorAll(".arrow"),
        skill_lists = document.querySelectorAll(".list_skills") ;

for(let i = 0 ; i < arrow_active.length ; i++){
    arrow_active[i].addEventListener('click',function(){
        if(arrow_active[i].classList.contains('active') === true){
            arrow_active[i].classList.remove('active') ;
            skill_lists[i].classList.remove('active');
        }
        else{
            arrow_active[i].classList.add('active') ;
            skill_lists[i].classList.add('active') ;
        }
    });
}

// ACTIVE FOR DISPLAYING EDUCATION OR WORK OF MY BLOG

const btn_education = document.querySelector('.education'),
        btn_work = document.querySelector('.work'),
            education_data = document.querySelector('.education_data'),
                work_data = document.querySelector('.work_data') ;

btn_education.addEventListener('click' ,function(){
    if(btn_work.classList.contains('btn_qualification_active') == true || work_data.classList.contains('active') == true){
        btn_work.classList.remove('btn_qualification_active') ;
        work_data.classList.remove('active');
    }
    btn_education.classList.add('btn_qualification_active') ;
    education_data.classList.add('active') ;
});

btn_work.addEventListener('click' ,function(){
    if(btn_education.classList.contains('btn_qualification_active') == true){
        btn_education.classList.remove('btn_qualification_active') ;
        education_data.classList.remove('active') ;
    }
    btn_work.classList.add('btn_qualification_active') ;
    work_data.classList.add('active') ;
});


// SLICK SLIDER FOR LIST PROJECT

$(document).ready(function(){
    $('.list_projects').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        infinite:true,
        prevArrow:`
        <button type="button" class="slick-prev slick-custom"><i class="uil uil-angle-left-b"></i></button>
        `,
        nextArrow:`
        <button type="button" class="slick-next slick-custom"><i class="uil uil-angle-right-b"></i></button>
        `,
        dots:true
    });
});

// DISPLAY SCROLL UP

const scroll_up_active = document.querySelector('.scroll_up');
const header_active = document.querySelector('.header') ;

window.onscroll = function(){
    if(window.scrollY > 340){
        scroll_up_active.classList.add('active') ;
        header_active.classList.add('active') ;
    }
    else if(scroll_up_active.classList.contains('active') == true){
        scroll_up_active.classList.remove('active');
        header_active.classList.remove('active');
    }
}

// CHANGE DARK/LIGHT THEME

const item_theme = document.querySelector('.icon_theme .uil') ;
item_theme.addEventListener('click',change_theme);

function change_theme(){
    document.body.classList.toggle('dark_theme');
    if(item_theme.classList.contains('uil-moon') == true){
        item_theme.classList.remove('uil-moon');
        item_theme.classList.add('uil-sun') ;
    }
    else{
        item_theme.classList.remove('uil-sun') ;
        item_theme.classList.add('uil-moon');
    }
}