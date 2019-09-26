import $ from 'jquery';

const aside = () => {
  $('#modalButton').click(showModal);
  $('.modal__close').click(hideModal);
  $('.modal-block__curtain').click(hideModal);
  $('#videoButton').click(showVideo);
  $('.video__close').click(hideVideo);
  $('.video-block__curtain').click(hideVideo);
}

const showModal = (event) => {
  event.preventDefault();
    $('.modal-block__curtain').fadeIn();
    $('.modal').fadeIn();
}

const hideModal = () => {
  $('.modal-block__curtain').fadeOut();
  $('.modal').fadeOut();
}

const showVideo = (event) => {
  event.preventDefault();
    $('.video-block__curtain').fadeIn();
    $('.video-block').fadeIn();
    $('.video-block__frame').attr('src', 'https://player.vimeo.com/video/248696949');
}

const hideVideo = () => {
  $('.video-block__curtain').fadeOut();
  $('.video-block').fadeOut();
  $('.video-block__frame').removeAttr('src');
}

export default aside;
