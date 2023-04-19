class Dashboard {
    constructor(placeToRender) {
      this.placeToRender = document.getElementsByTagName(placeToRender)[0];
      this.header = new Header();
      this.list = new DashboardList();
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
      const ul = document.createElement("ul");
      ul.classList = "header__ul";
      const li = document.createElement("li");
      li.classList = "header__ul--li";
      const ulLink = document.createElement("a");
      ulLink.classList = "header__ul--a";
      ulLink.href = "logout.php";
      ulLink.innerText = "uitloggen"

  
      link.appendChild(image);
      figure.appendChild(link);
      nav.appendChild(figure);
      this.element.appendChild(nav);
      nav.appendChild(ul);
      ul.appendChild(li);
      li.appendChild(ulLink);
     

    }
    render() {
    }
  }
  
  class DashboardList {
    constructor() {
      this.element = document.createElement("ul");
      this.element.classList = "cards";
  
      const items = [
        {
          imgSrc: "img/thought_balloon.webp",
          imgAlt: "Afbeelding van een denk ballon",
          text: "Gedachten schema",
          href: "schema.php",
          className: "card card__first",
          aClassName: "card__first--a",
        },
        {
          imgSrc: "img/vertical_traffic_light.webp",
          imgAlt: "Afbeelding van een stoplicht",
          text: "Stress stoplicht",
          href: "stoplicht.php",
          className: "card card__second",
          aClassName: "card__second--a",
        },
        {
          imgSrc: "img/writing_hand.webp",
          imgAlt: "Afbeelding van een checklist icoon",
          text: "Vragenlijst",
          href: "vragenlijst.php",
          className: "card card__third",
          aClassName: "card__third--a",
        },
        {
          imgSrc: "img/bar_chart.webp",
          imgAlt: "Afbeelding van een analyse icoon",
          text: "Vragenlijst Resultaten",
          href: "results.php",
          className: " card card__fourth",
          aClassName: "card__fourth--a",
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
      
    }
  }
  
  const dashboard = new Dashboard("body");
  dashboard.render();
  