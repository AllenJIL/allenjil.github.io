$(document).ready(function() {


  $('a.blog-button').click(function() {
    // If already in blog, return early without animate overlay panel again.
    if (location.hash && location.hash == "#blog") return;
    if ($('.panel-cover').hasClass('panel-cover--collapsed')) return;
    $('.main-post-list').removeClass('hidden');
    currentWidth = $('.panel-cover').width();
    if (currentWidth < 2000) {
      $('.panel-cover').addClass('panel-cover--collapsed');
    } else {
      $('.panel-cover').css('max-width',currentWidth);
      $('.panel-cover').animate({'max-width': '320px', 'width': '22%'}, 400, swing = 'swing', function() {} );
    }

    
  });

  if (window.location.hash && window.location.hash == "#blog") {
    $('.panel-cover').addClass('panel-cover--collapsed');
    $('.main-post-list').removeClass('hidden');
  }

  if (window.location.pathname.substring(0, 5) == "/tag/") {
    $('.panel-cover').addClass('panel-cover--collapsed');
  }

  $('.btn-mobile-menu__icon').click(function() {
    // 导航按钮被点击
    // this.style.backgroundColor = '#fff'; 设置颜色后会自动消失
  });  
  
  $(function(){
    arrMusicID = [28804591,34033985,36492681,37955044,4875911,36496655,25862800,19183595,29732995,21223795,447926025,5264302,526956071];  //musicID array
    musicID = Math.floor(Math.random()*(arrMusicID.length)) //get a ran num as index
    $('body').css('height',document.documentElement.clientHeight -5);

    if (!Number.isInteger(arrMusicID[musicID])) return; // load failed, bye~

    var iframe = document.createElement('iframe');
    iframe.id="bgm";
    iframe.style = "position: absolute; bottom: 0; left: 30px; border: 0px;";
    iframe.src = '//music.163.com/outchain/player?type=2&id=' +arrMusicID[musicID]+ '&auto=1&height=32';
    console.log(iframe.src)
    iframe.frameborder="no";
    iframe.marginwidth="0";
    iframe.marginheight="0";
    iframe.width=250;
    iframe.height=52;
    document.body.appendChild(iframe);
  });
});