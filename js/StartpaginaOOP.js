class StartPage {
    constructor(placeToRender) {
      this.placeToRender = document.getElementsByTagName(placeToRender)[0];
      this.header = new Header();
      this.list = new StartpaginaList();
    }
  
    render() {
      this.header.render();
      this.list.render();
      this.placeToRender.appendChild(this.header.element);
      this.placeToRender.appendChild(this.list.element);
    }
  }
  
  class Header {
    constructor() {
      this.element = document.createElement("header");
      this.element.classList = "header";
  
      const nav = document.createElement("nav");
      nav.classList = "header__nav";
      const figure = document.createElement("figure");
      figure.classList = "header__figure";
      const link = document.createElement("a");
      link.classList = "header__a";
      link.href = "";
      const image = document.createElement("img");
      image.classList = "header__img";
      image.alt = "Logo van doesburg coaching";
      image.src = "img/logo.webp";
  
      link.appendChild(image);
      figure.appendChild(link);
      nav.appendChild(figure);
      this.element.appendChild(nav);
    }
  
    render() {
      // nothing to do here
    }
  }
  
  class StartpaginaList {
    constructor() {
      this.element = document.createElement("ul");
      this.element.classList = "startpagina";
  
      const items = [
        {
          imgSrc: "img/writing_hand.webp",
          imgAlt: "Afbeelding van een iemand die schrijft",
          text: "Vragenlijst",
          href: "vragenlijst.php",
          className: "startpaginaItem startpaginaItem__first",
          aClassName: "startpaginaItem__first--a",
        },
        {
          imgSrc: "img/thought_balloon.webp",
          imgAlt: "Afbeelding van een denk ballon",
          text: "Gedachten schema",
          href: "schema.php",
          className: "startpaginaItem startpaginaItem__second",
          aClassName: "startpaginaItem__second--a",
        },
        {
          imgSrc: "img/vertical_traffic_light.webp",
          imgAlt: "Afbeelding van een stoplicht",
          text: "Stress stoplicht",
          href: "stoplicht.php",
          className: "startpaginaItem startpaginaItem__third",
          aClassName: "startpaginaItem__third--a",
        },
      ];
  
      items.forEach((item) => {
        const li = document.createElement("li");
        li.classList = item.className;
  
        const a = document.createElement("a");
        a.classList = item.aClassName;
        a.href = item.href;
  
        const figure = document.createElement("figure");
  
        const img = document.createElement("img");
        img.src = item.imgSrc;
        img.alt = item.imgAlt;
        img.classList.add('img__card');
  
        const span = document.createElement("span");
        span.innerText = item.text;
  
        figure.appendChild(img);
        a.appendChild(figure);
        a.appendChild(span);
        li.appendChild(a);
        this.element.appendChild(li);
      });
    }
  
    render() {
      // nothing to do here
    }
  }
  
  const startPage = new StartPage("body");
  startPage.render();
  