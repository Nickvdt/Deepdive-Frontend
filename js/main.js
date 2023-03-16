class Question {
  vraag = "";
  vragen = "";
  htmlElement = undefined;
  HTMLPreviousButton = undefined;
  HTMLNextButton = undefined;

  constructor(newVraag, newHTMLElement, HTMLPreviousButton, HTMLNextButton) {
    this.htmlElement = newHTMLElement;
    this.HTMLPreviousButton = HTMLPreviousButton;
    this.HTMLNextButton = HTMLNextButton;
    this.HTMLPreviousButton.onclick = this.onPreviousClicked;
    this.HTMLNextButton.onclick = this.onNextClicked;

    fetch("../vragen.json")
      .then((response) => response.json())
      .then((json) => {
        this.vragen = json;
        this.vraag = newVraag;
        if (this.vraag == null) {
          this.vraag = 1;
          localStorage.setItem("currentquestion", 1);
        }
        this.updateVraagText(this.vragen);
      });
  }

  updateVraagText(vragen) {
    this.vragen = vragen
    if (this.htmlElement) {
      this.htmlElement.innerText = this.vragen['vragenlijst'][0]['question']
    }
  }

    onPreviousClicked = () => {
        localStorage.setItem("currentquestion", parseInt(localStorage.getItem("currentquestion")) - 1)
        this.htmlElement.innerText = this.vragen['vragenlijst'][parseInt(localStorage.getItem("currentquestion")) - 1]['question']
    }
    onNextClicked = () => {
        localStorage.setItem("currentquestion", parseInt(localStorage.getItem("currentquestion")) + 1)
        this.htmlElement.innerText = this.vragen['vragenlijst'][parseInt(localStorage.getItem("currentquestion")) + 1]['question']
    }
    
}

const question = new Question(localStorage.getItem("currentquestion"), document.getElementById("js--vraag"), document.getElementById("js--previousbutton"), document.getElementById("js--nextbutton"));