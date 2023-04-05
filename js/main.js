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
    fetch("http://localhost/Deepdive-Frontend/vragen.json")
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
      if(parseInt(localStorage.getItem("currentquestion")) == 39){
           document.getElementById("js--nextbutton").innerText = "Finish";
        }
      else
      {
          document.getElementById("js--nextbutton").innerText = "Volgende >";
      }
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
        if(parseInt(localStorage.getItem("currentquestion")) == 39){
           document.getElementById("js--nextbutton").innerText = "Finish";
        }
      else
      {
          document.getElementById("js--nextbutton").innerText = "Volgende >";
      }
        if(localStorage.getItem(parseInt(localStorage.getItem("currentquestion"))) == null){
          localStorage.setItem(parseInt(localStorage.getItem("currentquestion")), 0)
          document.getElementById("js--updatedata").value = localStorage.getItem(parseInt(localStorage.getItem("currentquestion")));
       }else{
        document.getElementById("js--updatedata").value = localStorage.getItem(parseInt(localStorage.getItem("currentquestion")));
       }
        
    }
    onNextClicked = () => {
      this.htmlElement.innerText = this.vragen['vragenlijst'][parseInt(localStorage.getItem("currentquestion"))]['question']
      if(parseInt(localStorage.getItem("currentquestion")) == 39){
        if(confirm("Are you sure?") == true){
          window.location.href = `http://localhost/Deepdive-Frontend/controllers/saveanswers.php?one=${localStorage.getItem(0)}&two=${localStorage.getItem(1)}&three=${localStorage.getItem(2)}&four=${localStorage.getItem(3)}&five=${localStorage.getItem(4)}&six=${localStorage.getItem(5)}&seven=${localStorage.getItem(6)}&eight=${localStorage.getItem(7)}&nine=${localStorage.getItem(8)}&ten=${localStorage.getItem(9)}&eleven=${localStorage.getItem(10)}&twelve=${localStorage.getItem(11)}&thirteen=${localStorage.getItem(12)}&fourteen=${localStorage.getItem(13)}&fifteen=${localStorage.getItem(14)}&sixteen=${localStorage.getItem(15)}&seventeen=${localStorage.getItem(16)}&eighteen=${localStorage.getItem(17)}&nineteen=${localStorage.getItem(18)}&twenty=${localStorage.getItem(19)}&twentyone=${localStorage.getItem(20)}&twentytwo=${localStorage.getItem(21)}&twentythree=${localStorage.getItem(22)}&twentyfour=${localStorage.getItem(23)}&twentyfive=${localStorage.getItem(24)}&twentysix=${localStorage.getItem(25)}&twentyseven=${localStorage.getItem(26)}&twentyeight=${localStorage.getItem(27)}&twentynine=${localStorage.getItem(28)}&thirty=${localStorage.getItem(29)}&thirtyone=${localStorage.getItem(30)}&thirtytwo=${localStorage.getItem(31)}&thirtythree=${localStorage.getItem(32)}&thirtyfour=${localStorage.getItem(33)}&thirtyfive=${localStorage.getItem(34)}&thirtysix=${localStorage.getItem(35)}&thirtyseven=${localStorage.getItem(36)}&thirtyeight=${localStorage.getItem(37)}&thirtynine=${localStorage.getItem(38)}&forty=${localStorage.getItem(39)}`;
        }   
        }
      this.htmlElement.innerText = this.vragen['vragenlijst'][parseInt(localStorage.getItem("currentquestion")) + 1]['question']
        localStorage.setItem("currentquestion", parseInt(localStorage.getItem("currentquestion")) + 1)
        if(parseInt(localStorage.getItem("currentquestion")) == 39){
           document.getElementById("js--nextbutton").innerText = "Finish";
        }
      else
      {
          document.getElementById("js--nextbutton").innerText = "Volgende >";
      }
        if(localStorage.getItem(parseInt(localStorage.getItem("currentquestion"))) == null){
          localStorage.setItem(parseInt(localStorage.getItem("currentquestion")), 0)
          document.getElementById("js--updatedata").value = localStorage.getItem(parseInt(localStorage.getItem("currentquestion")));
       }else{
        document.getElementById("js--updatedata").value = localStorage.getItem(parseInt(localStorage.getItem("currentquestion")));
       }
    }
    
}

const question = new Question(localStorage.getItem("currentquestion"), document.getElementById("js--vraag"), document.getElementById("js--previousbutton"), document.getElementById("js--nextbutton"));


// informatie button
const infoButton = document.getElementById('js--infoButton');
const popup = document.getElementById('js--popup');
const closeButton = document.getElementById('js--closeButton');

infoButton.addEventListener('click', () => {
  popup.style.display = 'block';
});

closeButton.addEventListener('click', () => {
  popup.style.display = 'none';
});
