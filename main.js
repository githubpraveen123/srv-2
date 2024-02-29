var swiper = new Swiper(".slide-content", {
    slidesPerView: 3,
    spaceBetween: 30,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });


  const question=document.querySelectorAll('.question-answer');

question.forEach(function(question){
    const btn = question.querySelector('.question-btn');
    btn.addEventListener("click",function(){
        question.classList.toggle("show-text");
    })

})