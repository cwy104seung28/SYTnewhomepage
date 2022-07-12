// 滑動到最上方的效果---------------
$(window).scroll(function () {
    setScroll();
  });

  function setScroll() {
    var win = $(window),
      hWin = win.height(),
    //   wWin = win.width(),
      scroll = $(window).scrollTop();
  
    var bannerCont = $("#banner").offset().top;
    console.log(scroll);
    
    console.log(bannerCont);
    if (scroll > bannerCont) {
      $(".syt-nav").addClass("change-nav");
      $(".navbar-collapse").addClass("nav-no-bg");

      $(".navbar-toggler").css("outline","transparent");
    } else {
      $(".syt-nav").removeClass("change-nav");
      $(".navbar-collapse").removeClass("nav-no-bg");

      $(".navbar-toggler").css("outline","#223e72 2px solid");
    }
  }
  // swiper
  var swiper = new Swiper(".mySwiper", {
    cssMode: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
    },
    mousewheel: true,
    keyboard: true,
  });

  function serviceBtn(){
    $(".service-icon-ul").toggleClass("active");
  }
// const express = require('express');
// const app = express();
// // 加入這兩行
// const server = require('http').Server(app);
// const io = require('socket.io')(server);
 
// app.get('/', (req, res) => {
//     res.sendFile('C:/works/banner-sample-2/test.html');
// });
 
// // 當發生連線事件
// io.on('connection', (socket) => {
//     console.log('Hello!');  // 顯示 Hello!
 
//     // 當發生離線事件
//     socket.on('disconnect', () => {
//         console.log('Bye~');  // 顯示 bye~
//     });
// });
 
// // 注意，這邊的 server 原本是 app
// server.listen(3000, () => {
//     console.log("Server Started. http://localhost:3000");
// });
 