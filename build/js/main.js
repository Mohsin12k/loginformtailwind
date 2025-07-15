const hideLogin = document.querySelector('.hideLogin');
const showMain = document.querySelector('.showMain');
const popupbtn = document.querySelector('.popupBtn');
const showRegisteration = document.querySelector('.showRegisteration');
const registerNow = document.querySelector('.registerNow');
const accountExist = document.querySelector('.accountExist');
const closeBtn = document.querySelector('.closeBtn');

popupbtn.addEventListener('click', ()=>{
    showMain.classList.toggle('flex');
    showMain.classList.toggle('hidden');
    hideLogin.classList.add('flex');
    hideLogin.classList.remove('hidden');
    showRegisteration.classList.add('hidden');
    showRegisteration.classList.remove('flex');
});

registerNow.addEventListener('click', ()=>{
    hideLogin.classList.add('hidden');
    showRegisteration.classList.remove('hidden');
    showRegisteration.classList.add('flex');
    showMain.style.height = "490px";
});

accountExist.addEventListener('click', ()=>{
    showRegisteration.classList.add('hidden');
    showRegisteration.classList.remove('flex');
    hideLogin.classList.add('flex');
    hideLogin.classList.remove('hidden');
     showMain.style.height = "470px";
});

closeBtn.addEventListener('click', ()=>{
    showMain.classList.add('hidden');
    showRegisteration.classList.remove('flex');
    showRegisteration.classList.add('hidden');
});