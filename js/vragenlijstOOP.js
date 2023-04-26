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
        this.headerUlAElement.href = "dashboard.php";
        this.headerUlAElement.innerText = "Dashboard";

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

class Vragenlijst {
    mainElement;
    constructor(mainElement) {
        this.mainElement = mainElement;
        // popup
        this.articleElement = document.createElement("article");
        this.articleElement.classList.add("vragenlijst__popup");
        this.articleElement.id = "js--popup";

        this.h2Element = document.createElement("h2");
        this.h2Element.innerText = "Vragenlijst informatie";

        this.pElement = document.createElement("p");
        this.pElement.innerText = "IC4 Vragenlijst LoopbaanankersSchein De meeste mensen volgen een opleiding, vinden een baan, doen allerlei cursussen en veranderen van baan zonder dat ze systematisch kijken naar hun drijfveren. Hierdoor komt het regelmatig voor dat mensen, ondanks hun opleiding en ervaring, toch niet gelukkig zijn in hun werk. Schein noemt deze drijfveren carrièreankers. Carrièreankers zeggen iets over je motivatie, houding, voorkeur en waarden. Ben je bijvoorbeeld meer geïnteresseerd in individuele vrijheid of ga je meer voor macht en status? Je loopbaananker is een combinatie van waargenomen competentieterreinen, drijfveren en waarden die je niet wilt opgeven; het staat voor je werkelijke zelf. Zonder kennis van deze ankers, zouden externe prikkels je kunnen brengen in situaties of banen die uiteindelijk niet bevredigend zijn, omdat je voelt dat je dit niet werkelijk bent. Schein onderscheidt acht carrièreankers; technisch/functioneel (TF), algemeen management (AM), autonomie/onafhankelijkheid (AU), zekerheid en stabiliteit (ZE), ondernemingsgerichte creativiteit (OC), dienstverlening/toewijding aan de zaak (DV), zuivere uitdaging (UI) en levensstijl (LS). Om erachter te komen welke loopbaanankers voor jou leidend zijn, kun je de test op de volgende pagina doen. Aldaar zie je een aantal beweringen (1 tot 40). De beweringen beschrijven een activiteit, waarde of een eigenschap. Geef per keer aan in hoeverre deze bewering op jou van toepassing is. Ook als deze minder of niet op je van toepassing is. Maak dus altijd een keuze.";

        this.closeButton = document.createElement("button");
        this.closeButton.classList.add("vragenlijst__button--popup");
        this.closeButton.id = "js--closeButton";
        this.closeButton.innerText = "Sluiten";

        // vragenlijst
        this.sectionElement = document.createElement("section");
        this.sectionElement.classList.add("vragenlijst");

        this.topButtons = document.createElement("figure");
        this.topButtons.classList.add("vragenlijst__buttons");

        this.infoButton = document.createElement("button");
        this.infoButton.classList.add("vragenlijst__button--info");
        this.infoButton.id = "js--infoButton";
        this.infoButton.innerText = "Informatie";

        this.bonusButton = document.createElement("button");
        this.bonusButton.classList.add("vragenlijst__button--bonus");
        this.bonusButton.innerText = "Geef extra punten";

        this.h1Element = document.createElement("h1");
        this.h1Element.id = "js--vraag";
        this.h1Element.classList.add("vragenlijst__h1");
        this.h1Element.innerText =
            "Vraag: 1. Ik droom ervan zo goed te zijn in wat ik doe dat er voortdurend om mijn deskundige advies wordt gevraagd?";

        this.figureLabels = document.createElement("figure");
        this.figureLabels.classList.add("vragenlijst__labels");

        this.labelElements = [];
        for (let i = 1; i <= 6; i++) {
            this.labelElement = document.createElement("p");
            this.labelElement.classList.add("vragenlijst__label");
            this.labelElement.innerText = i;
            this.labelElements.push(this.labelElement);
            this.figureLabels.appendChild(this.labelElement);
        }

        this.figureSlider = document.createElement("figure");
        this.figureSlider.classList.add("vragenlijst__slider");

        this.inputElement = document.createElement("input");
        this.inputElement.type = "range";
        this.inputElement.min = "1";
        this.inputElement.max = "6";
        this.inputElement.step = "1";
        this.inputElement.value = "2";

        this.elementDesktop = document.createElement("figure");
        this.elementDesktop.classList = "vragenlijst__tabel vragenlijst__tabel--desktop";

        this.tableElementDesktop = document.createElement("table");

        this.theadElementDesktop = document.createElement("thead");

        this.trElementDesktop = document.createElement("tr");
        this.thElement1 = document.createElement("th");
        this.thElement1.innerText = "Nooit op mijn van toepassing";

        this.thElement2 = document.createElement("th");
        this.thElement2.innerText = "Is zo nu en dan op mijn van toepassing";

        this.thElement3 = document.createElement("th");
        this.thElement3.innerText = "Is vaak op mij van toepassing";

        this.thElement4 = document.createElement("th");
        this.thElement4.innerText = "Is altijd op mij van toepassing";

        this.tbodyElementDesktop = document.createElement("tbody");

        this.trElement2Desktop = document.createElement("tr");

        this.tdElement1 = document.createElement("td");
        this.tdElement1.innerText = "1";

        this.tdElement2 = document.createElement("td");
        this.tdElement2.innerText = "2/3";

        this.tdElement3 = document.createElement("td");
        this.tdElement3.innerText = "4/5";

        this.tdElement4 = document.createElement("td");
        this.tdElement4.innerText = "6";

        this.figureElementResponsive = document.createElement("figure");
        this.figureElementResponsive.classList = "vragenlijst__tabel vragenlijst__tabel--responsive";

        this.tableElementResponsive = document.createElement("table");

        this.tbodyElementResponsive = document.createElement("tbody");

        this.trElement3 = document.createElement("tr");

        this.tdElement5 = document.createElement("td");
        this.tdElement5.innerText = "Nooit op mijn van toepassing";

        this.tdElement6 = document.createElement("td");
        this.tdElement6.innerText = "1";

        this.trElement4 = document.createElement("tr");

        this.tdElement7 = document.createElement("td");
        this.tdElement7.innerText = "Is zo nu en dan op mijn van toepassing";

        this.tdElement8 = document.createElement("td");
        this.tdElement8.innerText = "2/3";

        this.trElement5 = document.createElement("tr");

        this.tdElement9 = document.createElement("td");
        this.tdElement9.innerText = "Is vaak op mij van toepassing";

        this.tdElement10 = document.createElement("td");
        this.tdElement10.innerText = "4/5";

        this.trElement6 = document.createElement("tr");

        this.tdElement11 = document.createElement("td");
        this.tdElement11.innerText = "Is altijd op mij van toepassing";

        this.tdElement12 = document.createElement("td");
        this.tdElement12.innerText = "6";

        this.nextButtonFigure = document.createElement("figure");
        this.nextButtonFigure.id = "js--nextbuttons";
        this.nextButtonFigure.classList = "vragenlijst__buttons";

        this.previousButton = document.createElement("button");
        this.previousButton.id = "js--previousbutton";
        this.previousButton.classList = "vragenlijst__button--previous";
        this.previousButton.innerText = "< Vorige";

        this.nextButton = document.createElement("button");
        this.nextButton.id = "js--nextbutton";
        this.nextButton.classList = "vragenlijst__button--next";
        this.nextButton.innerText = "Volgende >";

        this.sectionButtons = document.createElement("section");
        this.sectionButtons.classList.add("vragenlijst__button");
    }
    render() {
        this.mainElement.appendChild(this.sectionElement);

        this.sectionElement.appendChild(this.articleElement);
        this.articleElement.appendChild(this.h2Element);
        this.articleElement.appendChild(this.pElement);
        this.articleElement.appendChild(this.closeButton);
        this.topButtons.appendChild(this.infoButton);
        this.topButtons.appendChild(this.bonusButton);

        this.figureSlider.appendChild(this.inputElement);

        this.trElementDesktop.appendChild(this.thElement1);
        this.trElementDesktop.appendChild(this.thElement2);
        this.trElementDesktop.appendChild(this.thElement3);
        this.trElementDesktop.appendChild(this.thElement4);

        this.tbodyElementDesktop.appendChild(this.trElement2Desktop);

        this.trElement2Desktop.appendChild(this.tdElement1);
        this.trElement2Desktop.appendChild(this.tdElement2);
        this.trElement2Desktop.appendChild(this.tdElement3);
        this.trElement2Desktop.appendChild(this.tdElement4);

        this.trElement3.appendChild(this.tdElement5);
        this.trElement3.appendChild(this.tdElement6);
        this.trElement4.appendChild(this.tdElement7);
        this.trElement4.appendChild(this.tdElement8);
        this.trElement4.appendChild(this.tdElement9);
        this.trElement4.appendChild(this.tdElement10);
        this.trElement4.appendChild(this.tdElement11);
        this.trElement4.appendChild(this.tdElement12);

        this.tbodyElementResponsive.appendChild(this.trElement3);
        this.tbodyElementResponsive.appendChild(this.trElement4);

        this.theadElementDesktop.appendChild(this.trElementDesktop);
        this.tableElementDesktop.appendChild(this.theadElementDesktop);
        this.tableElementDesktop.appendChild(this.tbodyElementDesktop);

        this.tableElementResponsive.appendChild(this.tbodyElementResponsive);

        this.elementDesktop.appendChild(this.tableElementDesktop);

        this.figureElementResponsive.appendChild(this.tableElementResponsive);

        this.sectionElement.appendChild(this.topButtons);
        this.sectionElement.appendChild(this.h1Element);
        this.sectionElement.appendChild(this.figureLabels);
        this.sectionElement.appendChild(this.figureSlider);
        this.sectionElement.appendChild(this.elementDesktop);
        this.sectionElement.appendChild(this.figureElementResponsive);
        this.sectionElement.appendChild(this.nextButtonFigure);
        this.nextButtonFigure.appendChild(this.previousButton);
        this.nextButtonFigure.appendChild(this.nextButton);

        this.infoButton.addEventListener('click', () => {
            this.articleElement.style.display = 'block';
          });
          
          this.closeButton.addEventListener('click', () => {
            this.articleElement.style.display = 'none';
          });
    }
}

class Main {
    placeToRenderMain;
    mainElement;
    Vragenlijst
    constructor(placeToRenderMain) {
        this.placeToRenderMain = document.getElementsByTagName(placeToRenderMain)[0];
        this.mainElement = document.createElement("main");
        this.Vragenlijst = new Vragenlijst(this.mainElement);
    }
    render() {
        this.placeToRenderMain.appendChild(this.mainElement);
        this.Vragenlijst.render();
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