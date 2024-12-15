$(document).ready(function () {

  $(".sub").hide(); //display:none 과 동일함

  $('.main').hover(
    function () {
      $(this).find(".sub").stop().slideDown();
      $(".bg_box").stop().slideDown();
    },
    function () {
      $(this).find(".sub").stop().slideUp();
      $(".bg_box").stop().slideUp();
    }
  );

  var swiper = new Swiper(".mySwiper", 
    {
    slidesPerView: 3,             // 한 번에 하나의 슬라이드만 보이도록 설정
    centeredSlides: true,         // 슬라이드를 중앙에 배치
    spaceBetween: 10,             // 슬라이드 간의 간격 (원하는 값으로 조정)
    loop: true,                   // 무한 루프 설정
    pagination: {
      el: ".swiper-pagination",
      clickable: true,            // 페이지네이션 클릭 가능
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    keyboard: true,               // 키보드로 슬라이드 제어 가능
  });

  
  $(".sub").hide(); //display:none 과 동일함

  $('.main').hover(
    function () {
      $(this).find(".sub").stop().slideDown();
      $(".bg_box").stop().slideDown();
    },
    function () {
      $(this).find(".sub").stop().slideUp();
      $(".bg_box").stop().slideUp();
    }
  );

  var swiper = new Swiper(".myCarousel", {
    slidesPerView: 3,
    spaceBetween: 3,
    pagination: {
      el: ".swiper-pagination",
      dynamicBullets: true,
    },
  });


  var swiper = new Swiper(".mySecondc", {
    slidesPerView: 3,
    spaceBetween: 3,
    pagination: {
      el: ".swiper-pagination",
      dynamicBullets: true,
    },
  });


// Select all list items and the modal
const items = document.querySelectorAll('.item_list li a');
const modal = document.querySelector('.modal');
const modalContentItems = document.querySelectorAll('.modal-content > li');
const closeButton = document.querySelector('.close');

// Add event listeners to each item to open the modal and display corresponding content
items.forEach((item, index) => {
  item.addEventListener('click', (e) => {
    e.preventDefault();
    modal.style.display = 'block'; // Show the modal

    // Display the corresponding modal content based on the clicked item
    modalContentItems.forEach((content, contentIndex) => {
      content.style.display = contentIndex === index ? 'block' : 'none';
    });
  });
});

// Add event listener to the close button to hide the modal
closeButton.addEventListener('click', () => {
  modal.style.display = 'none'; // Hide the modal
});


});

$(document).ready(function(){
// Select all list items and the modal
const items = document.querySelectorAll('.item_list2 li a');
const modal = document.querySelector('.modal2');
const modalContentItems = document.querySelectorAll('.modal-content2 > li');
const closeButton = document.querySelector('.close');

// Add event listeners to each item to open the modal and display corresponding content
items.forEach((item, index) => {
  item.addEventListener('click', (e) => {
    e.preventDefault();
    modal.style.display = 'block'; // Show the modal

    // Display the corresponding modal content based on the clicked item
    modalContentItems.forEach((content, contentIndex) => {
      content.style.display = contentIndex === index ? 'block' : 'none';
    });
  });
});

// Add event listener to the close button to hide the modal
closeButton.addEventListener('click', () => {
  modal.style.display = 'none'; // Hide the modal
});


});







