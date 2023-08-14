const pagesMap = {
    login: '.page-login',
    main: '.page-main',
    profile: '.page-profile',
  };
  
  export default {
    openPage(name) {
        // получаем элемент 
        const page = document.querySelector(pagesMap[name]);
        const container = name.parentNode;
        // проверяем соседей на класс hidden и добавляем если его нет 
        for(const child of container.childNodes){
            if(!child.classList.containes('hidden')){
                child.classList.add('hidden');
            }
        }
        // проверяем элемент на класс hidden и удаляем его если есть 
        page.classList.remove('hidden');
    },
  };
  