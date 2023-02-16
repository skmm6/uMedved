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
// figure
const figuresContainer = document.querySelector(".figure-all");
const figureImgActive = document.querySelector(".figure-img__active");
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
// ========================== ФИГУРЫ 1 объект 1 фигура===================
const kvadrat = {
  figure: "kvadrat",
  name: "Квадрат",
  img: "./assets/img/figure/kvadrat.png",
};
const rectangle = {
  figure: "rectangle",
  name: "Прямоугольник",
  img: "./assets/img/figure/rectangle.png",
};
const circle = {
  figure: "circle",
  name: "Круг",
  img: "./assets/img/figure/circle.png",
};
const elips = {
  figure: "elips",
  name: "Элипс",
  img: "./assets/img/figure/elips.png",
};

const arrFigures = [kvadrat, rectangle, circle, elips];
// ========================== ФИГУРЫ 1 объект 1 фигура===================
console.log(arrFigures);

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
  } else if (pageNumber === 3) {
    displayFigures();
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

// ====================РЕНДЕР ФИГУРЫ ======================
const displayFigures = function () {
  const btns = document.querySelectorAll(".next");
  btns.forEach((btn) => {
    btn.classList.add("disabled");
  });

  figuresContainer.innerHTML = "";
  arrFigures.forEach((fig, id) => {
    const html = `
      <div class="figure-one">
        <div class="figure-one__img">
        <img src="./assets/img/figure/${fig.figure}-1.png" alt="" />
        </div>
        <div class="figure-one__text">${fig.name}</div>
      </div>
    `;
    figuresContainer.insertAdjacentHTML("beforeend", html);
  });

  const figuresEl = document.querySelectorAll(".figure-one");
  console.log(figuresEl);
  figuresEl.forEach((figure, id) => {
    figure.addEventListener("click", () => {
      btns.forEach((btn) => {
        btn.classList.remove("disabled");
      });
      figuresEl.forEach((fig) => {
        fig.classList.remove("active");
      });
      figure.classList.add("active");
      stateDataForm.figure = `${arrFigures[id].figure}`;
      stateDataForm.figureName = `${arrFigures[id].name}`;
      figureImgActive.src = `./assets/img/figure/${stateDataForm.figure}.png`;
    });
  });
};

// ====================РЕНДЕР ФИГУРЫ ======================
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
