$(document).ready(function () {
  // проверяем подключение скрипта
  // console.log('Страница загрузилась');

  // создаем новую переменную
  let tabsItem = $('.tabs-item');
  // Проверяем
  // console.log(tabsItem)

  // отслеживаем клики по нашим переменным
  tabsItem.on('click', function(event){
    // отменяем перенос в начало страницы
    // либо любое другое стандартное действие
    event.preventDefault();
    // console.log('Клик по табу');

    let activeContent = $(this).attr('href');
    // console.log(activeContent);
    $('.visible').toggleClass('visible')
    $(activeContent).toggleClass('visible');
    $('.tabs-item-active').toggleClass('tabs-item-active');
    $(this).toggleClass('tabs-item-active');
  })
});