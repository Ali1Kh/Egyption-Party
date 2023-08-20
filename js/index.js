//! Side Bar
let innerWidth = $(".sideBarInner").innerWidth();
$(".sideBar").css("left", -innerWidth);
$(".sideBar .barBtn").click(() => {
  if ($(".sideBar").css("left") == "0px") {
    $(".sideBar").animate({ left: -innerWidth }, 800);
    $(".sideBar .barBtn i").addClass("fa-bars");
    $(".sideBar .barBtn i").removeClass("fa-xmark");
  } else {
    $(".sideBar").animate({ left: "0px" }, 800);
    $(".sideBar .barBtn i").addClass("fa-xmark");
    $(".sideBar .barBtn i").removeClass("fa-bars");
  }
});
// ?Smoothing
$(".sideBarInner ul li a").click((e)=>{
  let sectionTop = $($(e.target).attr("href")).offset().top;
  $("html,body").animate({scrollTop:sectionTop},1000)
});
//! Signers Section
$("#signers .cardItem h5").click((e) => {
  let target = $(e.target).next("p");
  console.log(target);
  $(target).slideToggle(600);
  $(target).siblings("p").slideUp(600);
});
//! Event Section
let eventDate, today, remainingDays, hours, minutes, seconds;
countTime();
setInterval(countTime, 1000);
function countTime() {
  eventDate = new Date("2023-10-20 7:00:00");
  today = new Date();
  remainingDays = Math.round((eventDate - today) / (1000 * 60 * 60 * 24));
  hours = eventDate.getHours() - today.getHours();
  minutes = eventDate.getMinutes() - today.getMinutes();
  seconds = eventDate.getSeconds() - today.getSeconds();
  $(".day").html(remainingDays + " D");
  $(".hour").html(hours + " h");
  $(".min").html(minutes + " m");
  $(".sec").html(seconds + " sec");
}
// !Contact Section
$("#contact textarea").keyup(() => {
  let inputLength = $("#contact textarea").val().length;
  if (inputLength <= 100) {
    $("#contact .charchters .length").html(100 - inputLength);
  } else {
    $("#contact textarea").$("#contact .charchters .length").html(0);
  }
});