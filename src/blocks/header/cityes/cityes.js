import $ from 'jquery';

const cityesHorizontal = () => {
  let items = $('.cityes#cityesHorizontal .item');
  let activeItem = $('.cityes#cityesHorizontal .item.active');

  $(items).click(() => {
    if ($(items).not('.active').css('display') === 'flex') {
      let newEl = $(event.target).closest('.item').children('.item__city-name').clone();
      let oldEl = $(activeItem).children('.item__city-name').clone();

      $(activeItem).children('.item__city-name').replaceWith(newEl);
      $(event.target).closest('.item').children('.item__city-name').replaceWith(oldEl);

      $(items).not('.active').slideUp(300);
    } else {
      $(items).slideDown(300).css('display', 'flex');
    }
  })
}

export default cityesHorizontal;