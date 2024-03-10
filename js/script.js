window.onload = function() {
  var isMobileDevice = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);

  // スマートフォンの場合の動作
  if (isMobileDevice) {
      var mapPins = document.getElementsByClassName('map-pin');
      for (var i = 0; i < mapPins.length; i++) {
          var mapPin = mapPins[i];
          mapPin.href = "javascript:void(0)";

          var popup = mapPin.nextElementSibling;
          popup.classList.add('sp-popup');

          mapPin.addEventListener('click', function() {
              var popup = this.nextElementSibling;
              popup.style.display = 'block';
          });

          var closeButtons = popup.getElementsByClassName('close-button');
          for (var j = 0; j < closeButtons.length; j++) {
              var closeButton = closeButtons[j];
              closeButton.addEventListener('click', function() {
                  var popup = this.parentElement;
                  popup.style.display = 'none';
              });
          }
      }
  } else { // スマートフォンでない場合の動作
      var mapPins = document.getElementsByClassName('map-pin');
      for (var i = 0; i < mapPins.length; i++) {
          var mapPin = mapPins[i];
          mapPin.addEventListener('mouseover', function() {
              var popup = this.nextElementSibling;
              popup.style.display = 'block';
          });

          mapPin.addEventListener('mouseout', function() {
              var popup = this.nextElementSibling;
              popup.style.display = 'none';
          });
      }
  }
}


let fadeInTarget = document.querySelectorAll('.fade-in');
window.addEventListener('scroll', () => {
  for (let i = 0; i < fadeInTarget.length; i++) {
    const rect = fadeInTarget[i].getBoundingClientRect().top;
    const scroll = document.documentElement.scrollTop;
    const offset = rect + scroll;
    const windowHeight = window.innerHeight; // 現在のブラウザの高さ
    if (scroll > offset - windowHeight + 150) {
      fadeInTarget[i].classList.add('scroll-in');
    }
  }
});



document.addEventListener('DOMContentLoaded', function () {
  const hamburger = document.querySelector('.openbtn');
  const headNav = document.querySelector('#js-nav');

  hamburger.addEventListener('click', () => {
    if (hamburger.classList.contains("active")) {
      hamburger.classList.remove('active');
      hamburger.querySelector('.hamburger-text').textContent = 'menu';
      headNav.classList.remove('active')
    } else {
      hamburger.classList.add('active');
      hamburger.querySelector('.hamburger-text').textContent = 'close';
      headNav.classList.add('active')
    }
  });


  headNav.addEventListener('click', () => {
    hamburger.classList.remove('active');
    hamburger.querySelector('.hamburger-text').textContent = '';
    headNav.classList.remove('active')
  });

});



$(".gallery").modaal({
 	type: 'image',
 	overlay_close:true,//モーダル背景クリック時に閉じるか
 	before_open:function(){// モーダルが開く前に行う動作
 		$('html').css('overflow-y','visible');/*縦スクロールバーを出さない*/
 	},
 	after_close:function(){// モーダルが閉じた後に行う動作
 		$('html').css('overflow-y','scroll');/*縦スクロールバーを出す*/
 	}
});