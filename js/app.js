(function() {
    const listElements = document.querySelectorAll('.menuItem-show');
    const list = document.querySelector('.menuLinks');
    const menu = document.querySelector('.menuShoes');
    const menuLinks = document.querySelectorAll('.menuLink');

    const addClick = ()=>{
        listElements.forEach((element) => {
            element.addEventListener('click', ()=>{
                
                let subMenu = element.children[1];
                let height = 0;
                element.classList.toggle('menuItem-active');

                if (subMenu.clientHeight === 0) {
                    height = subMenu.scrollHeight;
                }

                subMenu.style.height = `${height}px`;

            });
        })
    }

    const deleteStyleHeight = ()=>{
        listElements.forEach((element) => {
            if (element.children[2].getAttribute('style')) {
                element.children[2].removeAttribute('style');
                element.classList.remove('menuItem-active');
            }
        });
    }

    window.addEventListener('resize', ()=>{
        if (window.innerWidth > 800){
            deleteStyleHeight();
            if (list.classList.contains('menuLinks-show')) {
                list.classList.remove('menuLinks-show');
            }
        } else {
            addClick();
        }
    });

    if (window.innerWidth <= 800) {
        addClick();
    }
    
    menu.addEventListener('click', ()=> list.classList.toggle('menuLinks-show'));

    menuLinks.forEach((element, index) => {
        if (index!==2) {
            element.addEventListener('click', ()=>{
                list.classList.remove('menuLinks-show');
            });
        }
    });

})();
