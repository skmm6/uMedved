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
// SIZES
const sizesContainer = document.querySelector(".sizes-all");
// HEndel
const hendelContainer = document.querySelector(".hendel-all");

// стейт для страниц
let pageNumber = 5;

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
// ========================== РАЗМЕРЫ 1 объект 1 РАЗМЕР===================
const size150x150 = {
  width: 150,
  height: 150,
};

const size160x160 = {
  width: 160,
  height: 160,
};

const size170x170 = {
  width: 170,
  height: 170,
};

const size180x180 = {
  width: 180,
  height: 180,
};

const size190x190 = {
  width: 190,
  height: 190,
};

const size200x200 = {
  width: 200,
  height: 200,
};

// МАССИВ ВСЕХ размеров

const arrSizes = [
  size150x150,
  size160x160,
  size170x170,
  size180x180,
  size190x190,
  size200x200,
];
// ========================== РАЗМЕРЫ 1 объект 1 РАЗМЕР===================

// ========================== РУЧКА===================
const arrHendels = [
  "Без ручки",
  "hendel1",
  "hendel2",
  "hendel3",
  "hendel4",
  "hendel5",
  "hendel6",
];
// ========================== РУЧКА===================
console.log(arrFigures);

// собираем данные с форм
let stateDataForm = {
  figure: "kvadrat",
  figureName: "Квадрат",
  kitchen: "Итальянская кухня",
  sizeHeight: "150",
  sizeWidth: "150",
  hendelImg: "kvadrat-hendel1",
};

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
  } else if (pageNumber === 4) {
    displaySizes();
  } else if (pageNumber === 5) {
    displayHendel();
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
      <div class="figure-one page-box__one">
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

// ==================== РЕНДЕР РАЗМЕРОВ ==================
// Рендер размеров
const renderSizesWH = function (position) {
  const posotions = document.querySelector(`.${position}-position`);
  const sizesWidth = document.querySelector(`.${position}-width`);
  const sizesHeight = document.querySelector(`.${position}-height`);

  if (sizesWidth == null) {
    const html = `
    <span class="${position}-width width">${stateDataForm.sizeWidth}</span>
    <span class="${position}-height height">${stateDataForm.sizeHeight}</span>
  `;
    posotions.insertAdjacentHTML("beforeend", html);
  } else {
    sizesWidth.textContent = `${stateDataForm.sizeWidth}`;
    sizesHeight.textContent = `${stateDataForm.sizeHeight}`;
  }
};

const displaySizes = function () {
  renderSizesWH("sizes");
  const sizesWidth = document.querySelector(".sizes-width");
  const sizesHeight = document.querySelector(".sizes-height");
  const btns = document.querySelectorAll(".next");
  btns.forEach((btn) => {
    btn.classList.add("disabled");
  });

  const pageImgFigureSize = document.querySelector(".sizes-img__active");
  pageImgFigureSize.src = `./assets/img/figure/${stateDataForm.figure}-size.png`;
  sizesContainer.innerHTML = "";
  arrSizes.forEach((size, i) => {
    const html = `
    <div class="sizes-one page-box__one">
       <span>${size.height} X ${size.width}</span>
    </div>
  `;
    sizesContainer.insertAdjacentHTML("beforeend", html);
  });
  const sizesEl = document.querySelectorAll(".sizes-one");
  console.log(sizesEl);
  sizesEl.forEach((size, id) => {
    size.addEventListener("click", () => {
      btns.forEach((btn) => {
        btn.classList.remove("disabled");
      });
      sizesEl.forEach((size) => {
        size.classList.remove("active");
      });
      size.classList.add("active");
      stateDataForm.sizeWidth = `${arrSizes[id].width}`;
      stateDataForm.sizeHeight = `${arrSizes[id].height}`;
      sizesWidth.textContent = `${stateDataForm.sizeWidth}`;
      sizesHeight.textContent = `${stateDataForm.sizeHeight}`;
    });
  });
};
// ==================== РЕНДЕР РАЗМЕРОВ ==================

// ==================== РЕНДЕР РУЧКИ =====================
const displayHendel = function () {
  const btns = document.querySelectorAll(".next");
  btns.forEach((btn) => {
    btn.classList.add("disabled");
  });

  // рендер картинки актуальной и размеров
  const pageImgHendel = document.querySelector(".hendel-img__active");
  pageImgHendel.src = `./assets/img/figure/const5/${stateDataForm.figure}-size.png`;
  renderSizesWH("hendel");
  hendelContainer.innerHTML = ``;
  arrHendels.forEach((hendel) => {
    if (hendel[0] !== "h") {
      const html = `
        <div class="hendel-one page-box__one">
        <span>${hendel}</span>
        </div>
      `;
      hendelContainer.insertAdjacentHTML("beforeend", html);
    } else {
      const html = `
      <div class="hendel-one page-box__one">
        <img
          src="./assets/img/figure/const5/${hendel}.png"
          alt=""
          srcset=""
        />
      </div>
      `;
      hendelContainer.insertAdjacentHTML("beforeend", html);
    }
  });
  const hendelEl = document.querySelectorAll(".hendel-one");
  hendelEl.forEach((hendel, id) => {
    hendel.addEventListener("click", function () {
      btns.forEach((btn) => {
        btn.classList.remove("disabled");
      });
      hendelEl.forEach((hendel) => {
        hendel.classList.remove("active");
      });
      hendel.classList.add("active");
      if (arrHendels[id][0] !== "h") {
        stateDataForm.hendelText = `${arrHendels[id]}`;
        stateDataForm.hendelImg = `${stateDataForm.figure}-size`;
      } else {
        stateDataForm.hendelImg = `${stateDataForm.figure}-${arrHendels[id]}`;
      }
      pageImgHendel.src = `./assets/img/figure/const5/${stateDataForm.hendelImg}.png`;
    });
  });
};
// ==================== РЕНДЕР РУЧКИ =====================

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
