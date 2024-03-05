const headerMenu = document.querySelector('.nav-content');
const headerMenuButton = document.querySelector('.header-menu');

headerMenuButton.addEventListener('click', function() {
    headerMenu.classList.toggle('block-menu');
/*     if(headerMenu.classList.contains('block-menu') && document.body.classList.contains('no_scroll') == false){
        document.body.classList.add('no_scroll');
    }else{
        document.body.classList.remove('no_scroll');
    } */
})



const langButton =  document.querySelector('.language-icon');
const langContent = document.querySelector('.language-content');

langButton.addEventListener('click', function() {
    langContent.classList.toggle('block');
})


const buttonRu = document.querySelector('.ru');
const buttonUz = document.querySelector('.uz');
let langInfo = document.querySelector('.language-icon');

buttonRu.addEventListener('click', function() {
    langInfo.innerHTML = 'RU<i class="fa-solid fa-arrow-down"></i>';
    langContent.classList.toggle('block');
})

buttonUz.addEventListener('click', function() {
    langInfo.innerHTML = 'UZ<i class="fa-solid fa-arrow-down"></i>';
    langContent.classList.toggle('block');
})
