// //ios系統不放大
// document.documentElement.addEventListener(
//   "touchstart",
//   function (event) {
//     if (event.touches.length > 1) {
//       event.preventDefault();
//     }
//   },
//   false
// );
// var lastTouchEnd = 0;
// document.documentElement.addEventListener(
//   "touchend",
//   function (event) {
//     var now = Date.now();
//     if (now - lastTouchEnd <= 300) {
//       event.preventDefault();
//     }
//     lastTouchEnd = now;
//   },
//   false
// );
//字體
(function (d) {
  var config = {
      kitId: "lsi8hjo",
      scriptTimeout: 3000,
      async: true,
    },
    h = d.documentElement,
    t = setTimeout(function () {
      h.className = h.className.replace(/\bwf-loading\b/g, "") + " wf-inactive";
    }, config.scriptTimeout),
    tk = d.createElement("script"),
    f = false,
    s = d.getElementsByTagName("script")[0],
    a;
  h.className += " wf-loading";
  tk.src = "https://use.typekit.net/" + config.kitId + ".js";
  tk.async = true;
  tk.onload = tk.onreadystatechange = function () {
    a = this.readyState;
    if (f || (a && a != "complete" && a != "loaded")) return;
    f = true;
    clearTimeout(t);
    try {
      Typekit.load(config);
    } catch (e) {}
  };
  s.parentNode.insertBefore(tk, s);
})(document);
//banner字
function fadetext() {
  fade.style.filter = "alpha(opacity=" + x + ", style=0)";
  x = y < 50 ? x + 4 : x - 4;
  y += 2;
  if (y == 100) {
    z = z >= texts.length - 1 ? 1 : z + 1;
    y = 0;
    fade.innerHTML = texts[z];
  }
  setTimeout("fadetext();", 50);
}

var texts = new Array(3),
  tcolor = new Array(3),
  x = 0,
  y = 0,
  z = 1;
texts[1] = "公文模組";
texts[2] = "管理系統";
texts[3] = "工程模組";
fade.innerHTML = texts[z];
window.onload = fadetext;
// 滑動效果
$(window).scroll(function () {
  setScroll();
});

function setScroll() {
  var win = $(window),
    hWin = win.height(),
    //   wWin = win.width(),
    scroll = $(window).scrollTop();

  var bannerCont = $("#banner").offset().top;
  if (scroll > bannerCont) {
    $(".syt-nav").addClass("change-nav");
    $(".navbar-collapse").addClass("nav-no-bg");
    $(".nav-icon").css("display", "none");
    $(".nav-icon-change").css("display", "block");

    $(".navbar-toggler").css("outline", "transparent");
  } else {
    $(".syt-nav").removeClass("change-nav");
    $(".navbar-collapse").removeClass("nav-no-bg");
    $(".nav-icon").css("display", "block");
    $(".nav-icon-change").css("display", "none");

    $(".navbar-toggler").css("outline", "#223e72 2px solid");
  }
}

// swiper
var swiper = new Swiper(".mySwiper", {
  // cssMode: true,
  centeredSlides: true,
  spaceBetween: 60,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  loop: true,
  clickable: true,
});

function serviceBtn() {
  $(".service-icon-ul").toggleClass("active");
}
function phoneBtn() {
  $(".phone-icon").toggleClass("phone-active");
}

//表單js
$(function () {
  $(".submit").on("click", function () {
    // 姓名
    var company = $("#company").val() || "未填寫";

    // 性別
    // var sex = function() {
    //   var v;
    //   $('[name="demo_radio"]').each(function() {
    //     if($(this).prop('checked') === true) v = $(this).val();
    //   });
    //   return v;
    // };

    // 類別
    var cat = $("#demo_select").val() || "未填寫";

    // 內容
    var other = $("#other").val() || "未填寫";

    var data = {
      "entry.227149180": company,
      // "entry.814146377": name,
      // "entry.2119336975": phone,
      // "entry.840078373": email,
      // "entry.1020410891": other,
    };

    $("#myForm").submit(function () {
      $.ajax({
        type: "POST",
        url: "https://docs.google.com/forms/u/2/d/e/1FAIpQLSfgsLn2Mm2_s-WH9EWNlTcJrL68RDNtaqK5wujGTWg8-yd9Ew/formResponse",
        data: data,
        contentType: "application/json",
        dataType: "jsonp",
        complete: function () {
          alert("資料已送出！");
        },
      });
    });
  });
});
//vue
// const vueApp = new Vue({
//   data() {
//     return {
//       worksItem: [
//         {
//           workImg: "./img/work-sample.png",
//           // workTags: ["營造業", "零售業", "製造業", "一般企業"],
//           workTitle: "物料管理",
//           workContent:"垂直整合物料系統、請購單、採購單、進貨單，將採購流程系統化，一手輕鬆掌握採購進度。",
//         },
//         {
//           workImg: "./img/work-sample.png",
//           // workTags: ["營造業", "零售業", "製造業", "一般企業"],
//           workTitle: "物料管理",
//           workContent:"垂直整合物料系統、請購單、採購單、進貨單，將採購流程系統化，一手輕鬆掌握採購進度。",
//         },
//         {
//           workImg: "./img/work-sample.png",
//           // workTags: ["營造業", "零售業", "製造業", "一般企業"],
//           workTitle: "物料管理",
//           workContent:"垂直整合物料系統、請購單、採購單、進貨單，將採購流程系統化，一手輕鬆掌握採購進度。",
//         },
//       ],
//     };
//   },
//   methods: {
//     serviceBtn() {
//       $(".service-icon-ul").toggleClass("active");
//     },
//   },
//   mounted() {
//     var swiper = new Swiper(".mySwiper", {
//       // cssMode: true,
//       centeredSlides: true,
//       spaceBetween: 70,
//       navigation: {
//         nextEl: ".swiper-button-next",
//         prevEl: ".swiper-button-prev",
//       },
//       pagination: {
//         el: ".swiper-pagination",
//         clickable: true,
//       },
//       loop: true,
//       clickable: true,
//     });

// },
// }).$mount("#vueapp");
