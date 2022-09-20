
$(function () {
  // $('body').style('background','0000')
  
  var mixer = mixitup('.product__items');
  var mixer = mixitup('.design__items');
  
  $('.top-slider__inner').slick({
    dots: true,
    arrows: false,
    // fade:true,
    autoplay:true,
    autoplaySpead:2000,

    
    
    
  });


    // $(".star").rateYo({
    //   starWidth:"17px",
    //   normalFill: "#сссссу",
    //   ratedFill: "#ffc35b",
    //   readOnly:true
    // });

  function getTimeRemaining(endtime) {
    const total = Date.parse(endtime) - Date.parse(new Date());
    const seconds = Math.floor((total / 1000) % 60);
    const minutes = Math.floor((total / 1000 / 60) % 60);
    const hours = Math.floor((total / (1000 * 60 * 60)) % 24);
    const days = Math.floor(total / (1000 * 60 * 60 * 24));

    return {
      total,
      days,
      hours,
      minutes,
      seconds
    };
  }

  function initializeClock(id, endtime) {
    const clock = document.querySelector('.promo__clock');
    const daysSpan = clock.querySelector('.promodays');
    const hoursSpan = clock.querySelector('.promohours');
    const minutesSpan = clock.querySelector('.promominutes');
    const secondsSpan = clock.querySelector('.promoseconds');

    function updateClock() {
      const t = getTimeRemaining(endtime);

      daysSpan.innerHTML = t.days;
      hoursSpan.innerHTML = ('0' + t.hours).slice(-2);
      minutesSpan.innerHTML = ('0' + t.minutes).slice(-2);
      secondsSpan.innerHTML = ('0' + t.seconds).slice(-2);

      if (t.total <= 0) {
        clearInterval(timeinterval);
      }
    }

    updateClock();
    const timeinterval = setInterval(updateClock, 1000);
  }
  
  const deadline = $('.promo__clock').attr('data-time');
  initializeClock('promo__clock', deadline);
}); 