let listElement= document.querySelectorAll(".list__buttom--click");


listElement.forEach(listElement => {
    listElement.addEventListener('click', ()=>{
        listElement.classList.toggle('arrow');
        let height=0;
        let menu = listElement.nextElementSibling;

        console.log(menu.scrollHeight);

        if(menu.clientHeight=="0"){
            height=menu.scrollHeight;
        }
        menu.style.height=`${height}px`
    })
});