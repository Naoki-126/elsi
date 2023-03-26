/* to-top
=========================== */
$(window).on("scroll", function ($) {
  if (100 < jQuery(this).scrollTop()) {
    jQuery("#js-to-top-button").show();
  } else {
    jQuery("#js-to-top-button").hide();
  }
});

/* drawer
=========================== */
//アイコンクリックで開閉
$('#js-drawer').on('click', function(e) {
  e.preventDefault();
  $('.c-drawer').toggleClass('is-open');
  $('.p-drawer__menu').toggleClass('is-open');
  $('.p-drawer__content').toggleClass('is-open');
  $('.p-drawer__background').toggleClass('is-open');
  return false;
});

/* swiper
=========================== */
const swiper = new Swiper('.swiper', {
  slidesPerView: 1,
  spaceBetween: 0,
  freeMode: true, // スワイプしたときに位置が固定されなくなる

  breakpoints: {
    // when window width is >= 767px
    768: {
      slidesPerView: 3,
      spaceBetween: 0,
    },
  },

  // スクロールバー 追加
  scrollbar: {
    el: '.swiper-scrollbar', // スクロールバーとして認識させるクラス
    hide: false, // ユーザー操作後にスクロールバーを非表示にしない
    draggable: true, // ドラッグ操作を可能にする
    dragClass: 'drag', // ドラッグ可能なクラスの指定
    dragSize: 19, // ドラッグのサイズ指定
    snapOnRelease: false // スクロールバーを離したときにスライダーの位置を固定しないようにする
  },
});
