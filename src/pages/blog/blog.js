import $ from 'jquery';

const blog = () => {
  $('.button').click((event) => {
    $(event.target).animate({
      top: '1px'
    }, 100); 
  })

  $('.accordeon__item').click(toogleAccordeon);

  $('.slider').slick({
    dots: true,
    infinite: false,
    prevArrow: $('.slider-box__arrow_prev'),
    nextArrow: $('.slider-box__arrow_next'),
    dotsClass: 'slider-box__dots'
  });

}

const toogleAccordeon = (event) => {
  let content = $(event.target).parents('.accordeon__item').children('.accordeon-content');
  let icon = $(event.target).parents('.accordeon__item').find('.accordeon-title__icon');
  console.log($(icon));
  if($(content).css('display') === 'none'){
    $(content).slideDown();
    $(icon).css('transform', 'rotate(180deg)');
  } else {
    $(content).slideUp();
    $(icon).css('transform', 'rotate(0deg)');
  }
}

export default blog;