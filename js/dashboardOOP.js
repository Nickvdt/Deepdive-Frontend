class Header {
  placeToRenderHeader;
  headerElement;
  navElement;
  figureElement;
  ulElement;
  ulLiElement;
  headerUlAElement;
  headerAElement;
  imgElement;
  constructor(placeToRenderHeader) {
    this.placeToRenderHeader = document.getElementsByTagName(placeToRenderHeader)[0];
    this.headerElement = document.createElement("header");
    this.headerElement.classList.add("header");

    this.navElement = document.createElement("nav");
    this.navElement.classList.add("header__nav");

    this.figureElement = document.createElement("figure");
    this.figureElement.classList.add("header__figure");

    this.ulElement = document.createElement("ul");
    this.ulElement.classList.add("header__ul");

    this.ulLiElement = document.createElement("li");
    this.ulLiElement.classList.add("header__ul--li");

    this.headerUlAElement = document.createElement("a");
    this.headerUlAElement.classList.add("header__ul--a");
    this.headerUlAElement.href = "logout.php";
    this.headerUlAElement.innerText = "Uitloggen";

    this.headerAElement = document.createElement("a");
    this.headerAElement.classList.add("header__a");
    this.headerAElement.href = "index.php";

    this.imgElement = document.createElement("img");
    this.imgElement.classList.add("header__img");
    this.imgElement.src = "img/logo.webp";
    this.imgElement.alt = "Logo van doesburg coaching";
  }
  render() {
    this.placeToRenderHeader.appendChild(this.headerElement);
    this.headerElement.appendChild(this.navElement);
    this.navElement.appendChild(this.figureElement);
    this.figureElement.appendChild(this.headerAElement);
    this.headerAElement.appendChild(this.imgElement);
    this.navElement.appendChild(this.ulElement);
    this.ulElement.appendChild(this.ulLiElement);
    this.ulLiElement.appendChild(this.headerUlAElement);
  }
}


class Dashboard {
  constructor(mainElement) {
    this.mainElement = mainElement;

    this.ulElement = document.createElement("ul");
    this.ulElement.classList = "cards";
    this.items = [
      {
        imgSrc: "img/thought_balloon.webp",
        imgAlt: "Afbeelding van een denk ballon",
        text: "Gedachten schema",
        href: "gschema.php",
        className: "card card__first",
        aClassName: "card__first--a",
      },
      {
        imgSrc: "img/writing_hand.webp",
        imgAlt: "Afbeelding van een checklist icoon",
        text: "Vragenlijst",
        href: "vragenlijst.php",
        className: "card card__second",
        aClassName: "card__second--a",
      },
      {
        imgSrc: "img/bar_chart.webp",
        imgAlt: "Afbeelding van een analyse icoon",
        text: "Vragenlijst Resultaten",
        href: "results.php",
        className: " card card__third",
        aClassName: "card__third--a",
      },
    ];
  }

  render() {
    this.mainElement.appendChild(this.ulElement);
    this.items.forEach((item) => {
      this.liElement = document.createElement("li");
      this.liElement.classList = item.className;

      this.aElement = document.createElement("a");
      this.aElement.classList = item.aClassName;
      this.aElement.href = item.href;

      this.figureElement = document.createElement("figure");

      this.imgElement = document.createElement("img");
      this.imgElement.src = item.imgSrc;
      this.imgElement.alt = item.imgAlt;
      this.imgElement.classList.add('img__card');

      this.spanElement = document.createElement("span");
      this.spanElement.innerText = item.text;

      this.ulElement.appendChild(this.liElement);
      this.figureElement.appendChild(this.imgElement);
      this.aElement.appendChild(this.figureElement);
      this.aElement.appendChild(this.spanElement);
      this.liElement.appendChild(this.aElement);
    });
  }

}


class Main {
  placeToRenderMain;
  mainElement;
  dashboard;
  constructor(placeToRenderMain) {
    this.placeToRenderMain = document.getElementsByTagName(placeToRenderMain)[0];
    this.mainElement = document.createElement("main");
    this.dashboard = new Dashboard(this.mainElement);
  }
  render() {
    this.placeToRenderMain.appendChild(this.mainElement);
    this.dashboard.render();
  }
}

class App {
  header;
  main;
  constructor() {
    this.header = new Header("body");
    this.header.render();

    this.main = new Main("body")
    this.main.render();
  };
}

const app = new App();