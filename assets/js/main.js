// =======================OPEN CONST=================//
const app = document.querySelector(".app");
const containerContent = document.querySelector(".app-content");
const homeImg = document.querySelector(".app-img");
const homePage = document.querySelector(".home-page");
const constructorPage1 = document.querySelector(".constructor-page-1");
const footer = document.querySelector(".footer");
const btnOpenConstructor = document.getElementById("open-constructor");

// const кнопок
const btnsNext = document.querySelectorAll(".next");
const btnsPrev = document.querySelectorAll(".prev");

// kitchen контейнер форма
const containersKitchens = document.querySelector(".kitchen-form");

// стейт для страниц
let pageNumber = 3;

const kitchens = [
  "Итальянская кухня",
  "Грузинская кухня",
  "Русская кухня",
  "Японская кухня",
  "Корейская кухня",
  "Ирландская кухня",
  "Испанская кухня",
  "Американская кухня",
];

// собираем данные с форм
let stateDataForm = {};

// отоброжение контента конструктора

const displayContent = function () {
  if (pageNumber === 2) {
    displayKitchens();
    document.forms.kitchens.oninput = function () {
      stateDataForm["kitchen"] =
        document.forms.kitchens.elements.kitchens.value;
      console.log(stateDataForm);
    };
  }
};

const pagesNumber = function () {
  pages.forEach((page, id) => {
    if (pageNumber === id) {
      page.classList.add("open");
      displayContent();
    } else {
      page.classList.remove("open");
    }
  });
};

//Рендер kitchen
const displayKitchens = function () {
  containersKitchens.innerHTML = "";
  if (kitchens.length + 1 <= 40) {
    containersKitchens.classList.add("autof");
  }
  kitchens.forEach((kitchen, id) => {
    const html = `
      <div class="kitchen-checkbox">
        <input
        type="radio"
        name="kitchens"
        id="kitchen${id + 1}"
        value="${kitchen}"
        />
        <label for="kitchen${id + 1}">${kitchen}</label>
      </div>
    `;
    containersKitchens.insertAdjacentHTML("beforeend", html);
  });
};

btnOpenConstructor.addEventListener("click", () => {
  pageNumber++;
  pagesNumber();
  app.classList.add("open");
  containerContent.classList.remove("container-home");
  containerContent.classList.add("container-constructor");
  homeImg.classList.add("close");
  homePage.classList.add("close");
  constructorPage1.classList.add("open");
  footer.classList.add("footer-constructor");
});

if (pageNumber > 0) {
  app.classList.add("open");
  containerContent.classList.remove("container-home");
  containerContent.classList.add("container-constructor");
  homeImg.classList.add("close");
  // homePage.classList.add("close");
  // constructorPage1.classList.add("open");
  footer.classList.add("footer-constructor");
}

// =======================OPEN CONST=================//

// =======================КОНСТРУКТОР СЛАЙДЕР СТРАНИЦ=================//

const pages = document.querySelectorAll(".pages");
console.log(pages);

// для кнопки продолжить
btnsNext.forEach((btn) => {
  btn.addEventListener("click", () => {
    if (pageNumber < pages.length - 1) {
      pageNumber++;
      pagesNumber();
      console.log(pageNumber);
    }
  });
});

// для кнопки назад
btnsPrev.forEach((btn) => {
  btn.addEventListener("click", () => {
    if (pageNumber > 0) {
      pageNumber--;
      pagesNumber();
    }
  });
});

pagesNumber();
// pages[i].classList.add("open");

// =======================КОНСТРУКТОР СЛАЙДЕР СТРАНИЦ=================//

console.log(document.forms.kitchens);

if (pageNumber === 2) {
}
