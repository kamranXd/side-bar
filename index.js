const menuBtn = document.querySelector('.menu');
const sidebar = document.querySelector('.sidebar');

menuBtn.addEventListener('click',()=>{
    sidebar.classList.add("showSidebar");
});


document.addEventListener('click',(e)=>{
    if(!sidebar.contains(e.target) && !menuBtn.contains(e.target)){
        sidebar.classList.remove('showSidebar')
    }
});
