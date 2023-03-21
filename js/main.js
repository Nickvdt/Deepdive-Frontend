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
          this.vraag = 0;
          localStorage.setItem("currentquestion", 0);
        }
        this.updateVraagText(this.vragen);
      });
  }
  updateVraagText(vragen) {
    this.vragen = vragen
    if (this.htmlElement) {
      this.htmlElement.innerText = this.vragen['vragenlijst'][parseInt(localStorage.getItem("currentquestion"))]['question']
      if(localStorage.getItem(parseInt(localStorage.getItem("currentquestion"))) == null){
        localStorage.setItem(parseInt(localStorage.getItem("currentquestion")), 0)
        document.getElementById("js--updatedata").value = parseInt(localStorage.getItem("currentquestion"));
      }
    }
  }

    onPreviousClicked = () => {
      this.htmlElement.innerText = this.vragen['vragenlijst'][parseInt(localStorage.getItem("currentquestion")) - 1]['question']
        localStorage.setItem("currentquestion", parseInt(localStorage.getItem("currentquestion")) - 1)
        if(localStorage.getItem(parseInt(localStorage.getItem("currentquestion"))) == null){
          localStorage.setItem(parseInt(localStorage.getItem("currentquestion")), 0)
          document.getElementById("js--updatedata").value = localStorage.getItem(parseInt(localStorage.getItem("currentquestion")));
       }else{
        document.getElementById("js--updatedata").value = localStorage.getItem(parseInt(localStorage.getItem("currentquestion")));
       }
        
    }
    onNextClicked = () => {
      this.htmlElement.innerText = this.vragen['vragenlijst'][parseInt(localStorage.getItem("currentquestion")) + 1]['question']
        localStorage.setItem("currentquestion", parseInt(localStorage.getItem("currentquestion")) + 1)
        if(localStorage.getItem(parseInt(localStorage.getItem("currentquestion"))) == null){
          localStorage.setItem(parseInt(localStorage.getItem("currentquestion")), 0)
          document.getElementById("js--updatedata").value = localStorage.getItem(parseInt(localStorage.getItem("currentquestion")));
       }else{
        document.getElementById("js--updatedata").value = localStorage.getItem(parseInt(localStorage.getItem("currentquestion")));
       }
    }
    
}

const question = new Question(localStorage.getItem("currentquestion"), document.getElementById("js--vraag"), document.getElementById("js--previousbutton"), document.getElementById("js--nextbutton"));