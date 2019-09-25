import $ from 'jquery';

const aside = () => {
  $('#modalButton').click(showModal);
  $('.modal__close').click(hideModal);
  $('.modal-curtain').click(hideModal);
  $('#videoButton').click(showVideo);
  $('.video__close').click(hideVideo);
  $('.video-curtain').click(hideVideo);
}

const showModal = (event) => {
  event.preventDefault();
    $('.modal-curtain').fadeIn();
    $('.modal').fadeIn();
}

const hideModal = () => {
  $('.modal-curtain').fadeOut();
  $('.modal').fadeOut();
}

const showVideo = (event) => {
  event.preventDefault();
    $('.video-curtain').fadeIn();
    $('.video-block').fadeIn();
    $('.video-block__frame').attr('src', 'https://player.vimeo.com/video/248696949');
}

const hideVideo = () => {
  $('.video-curtain').fadeOut();
  $('.video-block').fadeOut();
  $('.video-block__frame').removeAttr('src');
}

export default aside;
