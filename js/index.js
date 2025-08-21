// контейнер
let container = document.querySelector(`.container`);
let prevNode = ``;


container.addEventListener(`click`, function(evt) {
   let node = evt.target;
    if (node.classList.contains(`item_closed`)) {
    // открываем его
    node.classList.remove(`item_closed`);
    // если открытых карточек нет
    if (prevNode == ``) {
      // запоминаем текущую карточку
      prevNode = node;
    } else if (
      // если открыли две одинаковые карточки
      (prevNode.classList.contains(`item1`) &&
        node.classList.contains(`item1`)) ||
      (prevNode.classList.contains(`item2`) && node.classList.contains(`item2`))
    ) {
     setTimeout(function(){node.classList.add(`animate__bounceOutDown`)}, 100);
      prevNode.classList.add(`animate__bounceOutDown`);
      prevNode = ``;
    } else {
      // если открыли  разные карточки
      // закрываем предыдущую
      prevNode.classList.add(`item_closed`);
      prevNode = node;
    }
  }


      
      
   
  

   });