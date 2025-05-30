// обратная свзяь 
  const form = document.getElementById('contactForm');
  const loadingMessage = document.getElementById('loadingMessage');

  form.addEventListener('submit', function(event) {
    event.preventDefault();

    loadingMessage.style.display = 'block'; // показываем сообщение

    const formData = new FormData(form);

    fetch(form.action, {
      method: 'POST',
      body: formData,
      headers: {
        'Accept': 'application/json'
      }
    })
    .then(response => {
      loadingMessage.style.display = 'none'; // скрываем сообщение

      if (response.ok) {
        alert('Спасибо! Ваша заявка отправлена.');
        form.reset();
      } else {
        alert('Ошибка отправки. Попробуйте позже.');
      }
    })
    .catch(error => {
      loadingMessage.style.display = 'none';
      alert('Ошибка сети. Попробуйте позже.');
    });
  });

 
// слайд шоу в галереи 
  const swiper = new Swiper(".mySwiper", {
    loop: true,
    spaceBetween: 20,
    centeredSlides: true,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    slidesPerView: 1,
    breakpoints: {
      768: {
        slidesPerView: 2,
      },
      1024: {
        slidesPerView: 3,
      },
    },
  });

   ymaps.ready(init);

   // метка на карте 
function init() {
    var myMap = new ymaps.Map("map", {
        center: [61.256674, 73.431534], // координаты ТЦ Вершина
        zoom: 13
    });

    var myPlacemark = new ymaps.Placemark([61.256674, 73.431534], {
        hintContent: 'ТЦ Вершина',
        balloonContent: 'г. Сургут, ул. Генерала Иванова, 1'
    });
     var placemark2 = new ymaps.Placemark([61.256380, 73.421644], { 
        hintContent: 'Крепость',
        balloonContent: 'г. Сургут, ул. Мира, 44'
         });
    myMap.geoObjects.add(myPlacemark);
    myMap.geoObjects.add(placemark2);
}
