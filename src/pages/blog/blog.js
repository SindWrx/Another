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

  $('.dropdown').not('.disabled').children('.dropdown__head').click(dropdownToogle);
  $('.dropdown__item').not('.selected').click(dropdownSet);

  $('.validate').keyup(verify);

  $(window).on('load', setTumblerParametres);
  $('.tumbler__item').click(tumbler);

  $('.tarif__option').click(tarifSwitcher);

  $(document).ready(paginationInitial);
  $('.numbers__item').click(pagination);
  
  $('.pagination__arrow_next').click(pagination);
  $('.pagination__arrow_prev').click(pagination);
}

const toogleAccordeon = (event) => {
  let content = $(event.target).parents('.accordeon__item').children('.accordeon-content');
  let icon = $(event.target).parents('.accordeon__item').find('.accordeon-title__icon');

  if($(content).css('display') === 'none'){
    $(content).slideDown();
    $(icon).css('transform', 'rotate(180deg)');
  } else {
    $(content).slideUp();
    $(icon).css('transform', 'rotate(0deg)');
  }
}

const dropdownToogle = (event) => {
  let title = $(event.target).closest('.dropdown__head');
  let arrow = $(title).children('.dropdown__arrow');
  let list = $(title).siblings('.dropdown__body');
  
  if($(list).css('display') === 'none'){
    $(arrow).css('transform', 'rotate(180deg)');
    $(list).slideDown();
  } else {
    $(arrow).css('transform', 'rotate(0deg)');
    $(list).slideUp();
  }
}

const dropdownSet = (event) => {
  let choised = $(event.target).closest('.dropdown__item');
  let dropdown = $(event.target).closest('.dropdown');
  let selected = $(dropdown).find('.dropdown__item.selected');
  $(selected).text($(choised).text());
  $(dropdown).children('.dropdown__head').trigger('click');
}

const verify = (event) => {
  let input = event.target;
  let icon = $(event.target).siblings('.input__icon');
  let use = $(icon).children('use');
  let error = $(event.target).parents('.input').siblings('.input__error');
  let phoneReg = /^[+]7\s\d{3}\s\d{3}\s\d{2}\s\d{2}$/;
  let emailReg = /^\w*@\w*\.\w{2,3}$/;

  let regExp, warning;
  if($(event.target).attr('type') === 'tel') {regExp = phoneReg; warning = 'введите правильно телефон';}
  else if($(event.target).attr('type') === 'email') {regExp = emailReg; warning = 'введите правильно почту';}
  else return;
  
  if(regExp.test(event.target.value)){
    $(use).attr('href', './resources/images/sprite.svg#tick');
    $(input).removeClass('incorrect');
    $(input).addClass('correct');
    $(error).fadeOut();
    
  } else {
    $(use).attr('href', './resources/images/solid.svg#times');
    $(input).removeClass('correct');
    $(input).addClass('incorrect');
    $(error).text(warning);
    $(error).fadeIn();
  }
}

const setTumblerParametres = () => {
  let tumblers = $('.tumbler .tumbler__point');
  let firstEl = $('.tumbler .tumbler__item_active');
  let tumblerBox = $(firstEl).closest('.tumbler');
  
  $(tumblers).each((i) => {
    $(tumblers[i]).width($(firstEl[i]).outerWidth());
    $(tumblers[i]).height($(firstEl[i]).outerHeight());
    $(tumblers[i]).offset({
      left: $(tumblerBox[i]).offset().left + 4,
      top: $(tumblerBox[i]).offset().top + 4
    });
  })
}

const tumbler = (event) => {
  let current = $(event.target);
  let tumbler = $(current).closest('.tumbler');
  let switcher = $(tumbler).children('.tumbler__point');
  let items = $(tumbler).children('.tumbler__item');

  let parametres = {
    left: $(current).offset().left,
    top: $(current).offset().top,
    width: $(current).outerWidth(),
  } 
  
  $(switcher).animate({
    left: parametres.left,
    top: parametres.top,
    width: parametres.width
  })

  $(items).removeClass('tumbler__item_active');
  $(current).addClass('tumbler__item_active');
}

const tarifSwitcher = (event) => {
  let current = $(event.target);
  let wrapper = $(current).closest('.tarif');

  $(wrapper).children().removeClass('tarif__option_active');
  $(current).addClass('tarif__option_active');
}

const paginationInitial = () => {
  let item = $('.numbers__item');
  if(item.length > 4){
    let lastChild = $(item).last();
    $(lastChild).before("<p class='numbers__item numbers__item_stub'><span class='numbers__number'>0</span><span class='numbers__dots'>.....</span></div>");
    
    item.each((i) => {
      if(i < 4)
        $(item[i]).css('display', 'flex');  
    })
  }
}

const pagination = (event) => {
  let current;
  
  if($(event.target).hasClass('pagination__arrow_next')) {
    current = $(event.target).siblings('.numbers').children('.numbers__item_active').next('.numbers__item');
  }
  else if($(event.target).hasClass('pagination__arrow_prev')) {
    current = $(event.target).siblings('.numbers').children('.numbers__item_active').prev('.numbers__item');
  }
  else current = $(event.target).closest('.numbers__item');

  let parent = $(current).parents('.numbers');
  let lastChild = $(parent).children('.numbers__item').last();
  let firstChild = $(parent).children('.numbers__item').first();
  let empty = "<p class='numbers__item numbers__item_stub'><span class='numbers__number'>0</span><span class='numbers__dots'>.....</span></div>";
  let count = $(parent).children('.numbers__item').not('.numbers__item_stub').length;
  let position = $(current).index('.numbers__item:not(.numbers__item_stub)') + 1;

  $(parent).children('.numbers__item_stub').remove();
  $(parent).children('.numbers__item').removeClass('numbers__item_active').css('display', 'none');
  $(current).addClass('numbers__item_active').css('display', 'flex');
  $(current).next('.numbers__item').css('display', 'flex');
  $(current).next('.numbers__item').next('.numbers__item').css('display', 'flex');
  $(current).prev('.numbers__item').css('display', 'flex');
  $(current).prev('.numbers__item').prev('.numbers__item').css('display', 'flex');
  $(firstChild).css('display', 'flex');
  $(lastChild).css('display', 'flex');

  if(count - position > 2) $(lastChild).before(empty);
  if(position > 4) $(firstChild).after(empty);

  if(position === count) $('.pagination__arrow_next').addClass('pagination__arrow_disabled');
  else $('.pagination__arrow_next').removeClass('pagination__arrow_disabled');
  if(position === 1) $('.pagination__arrow_prev').addClass('pagination__arrow_disabled');
  else $('.pagination__arrow_prev').removeClass('pagination__arrow_disabled');
}

export default blog;