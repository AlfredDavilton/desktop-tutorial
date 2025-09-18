const sheetUrls = [
  'https://docs.google.com/spreadsheets/d/1Q7ZMOzJ92WS8UgIZdlqDSqKUao6nM79WklYszQQwSmQ/edit?usp=sharing',  // Пример embed-ссылки
  'https://docs.google.com/spreadsheets/d/1XiKE2moWTC0ulSzEyTKD5sKUIaeTBGPrCH3yOXgHk4M/edit?usp=sharing'
];

let currentIndex = 0;
let slides = [];

function loadAllSheets() {
  const container = document.getElementById('slider-content');
  container.innerHTML = '';
  slides = [];

  for (let i = 0; i < sheetUrls.length; i++) {
    const slide = document.createElement('div');
    slide.classList.add('slide');

    const iframe = document.createElement('iframe');
    iframe.src = sheetUrls[i] + '&t=' + Date.now();  // Добавляем timestamp для обхода кэша
    iframe.width = '100%';
    iframe.height = '6000px';
    iframe.frameBorder = '0';
    iframe.allowFullscreen = true;
    iframe.onload = () => console.log('Iframe loaded for slide ' + i);  // Лог для отладки
    iframe.onerror = () => {
      console.error('Iframe failed to load for slide ' + i);
      // Альтернатива: показать сообщение
      slide.innerHTML = '<p>Не удалось загрузить файл. <a href="' + sheetUrls[i] + '" target="_blank">Открыть в новой вкладке</a></p>';
    };

    slide.appendChild(iframe);
    container.appendChild(slide);
    slides.push(slide);
  }

  if (slides.length > 0) {
    showSlide(0);
  }
}

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.remove('active');
    if (i === index) {
      slide.classList.add('active');
    }
  });
  currentIndex = index;
}

// Кнопки навигации
document.querySelector('.prev').addEventListener('click', () => {
  if (slides.length > 0) {
    showSlide((currentIndex - 1 + slides.length) % slides.length);
  }
});

document.querySelector('.next').addEventListener('click', () => {
  if (slides.length > 0) {
    showSlide((currentIndex + 1) % slides.length);
  }
});

// // Автопереключение
// setInterval(() => {
//   if (slides.length > 0) {
//     showSlide((currentIndex + 1) % slides.length);
//   }
// }, 10000);

loadAllSheets();
