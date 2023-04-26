class Question {
  vraag = "";
  vragen = "";
  htmlElement = undefined;
  HTMLPreviousButton = undefined;
  HTMLNextButton = undefined;
  HTMLExtraButton = undefined;

  constructor(newVraag, newHTMLElement, HTMLPreviousButton, HTMLNextButton, HTMLExtraButton) {
    this.htmlElement = newHTMLElement;
    this.HTMLPreviousButton = HTMLPreviousButton;
    this.HTMLNextButton = HTMLNextButton;
    this.HTMLExtraButton = HTMLExtraButton;
    this.HTMLPreviousButton.onclick = this.onPreviousClicked;
    this.HTMLNextButton.onclick = this.onNextClicked;
    this.HTMLExtraButton.onclick = this.onExtraClicked;
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
    if(localStorage.getItem("currentquestion") == null){
      localStorage.setItem("currentquestion", 0)
    }
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
      if(localStorage.getItem("extrapoints1") == localStorage.getItem("currentquestion") - 1){
        this.HTMLExtraButton.innerText = "Extra punten toegevoegd"
      }
      else
      {
        if(localStorage.getItem("extrapoints2") == localStorage.getItem("currentquestion") - 1){
          this.HTMLExtraButton.innerText = "Extra punten toegevoegd"
        }
        else
      {
        if(localStorage.getItem("extrapoints3") == localStorage.getItem("currentquestion") - 1){
          this.HTMLExtraButton.innerText = "Extra punten toegevoegd"
        }
        else{
          this.HTMLExtraButton.innerText = "Geef extra punten"
        }
      }
      }
      this.htmlElement.innerText = this.vragen['vragenlijst'][parseInt(localStorage.getItem("currentquestion")) - 1]['question']
        localStorage.setItem("currentquestion", parseInt(localStorage.getItem("currentquestion")) - 1)
        console.log(localStorage.getItem("currentquestion"))
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
        if(localStorage.getItem("extrapoints1") == null){
          return alert("Je moet bij nog bij 3 vragen extra punten geven.")
        }
        if(localStorage.getItem("extrapoints2") == null){
          return alert("Je moet bij nog bij 2 vragen extra punten geven.")
        }
        if(localStorage.getItem("extrapoints3") == null){
          return alert("Je moet bij nog bij 1 vraag extra punten geven.")
        }
        if(confirm("Weet je zeker dat dit formulier wilt inleveren?") == true){
          localStorage.setItem(localStorage.getItem("extrapoints1"), parseInt(localStorage.getItem(parseInt(localStorage.getItem("extrapoints1")))) + 4)
          localStorage.setItem(localStorage.getItem("extrapoints2"), parseInt(localStorage.getItem(parseInt(localStorage.getItem("extrapoints2")))) + 4)
          localStorage.setItem(localStorage.getItem("extrapoints3"), parseInt(localStorage.getItem(parseInt(localStorage.getItem("extrapoints3")))) + 4)
          window.location.href = `http://localhost/Deepdive-Frontend/controllers/saveanswers.php?one=${localStorage.getItem(0)}&two=${localStorage.getItem(1)}&three=${localStorage.getItem(2)}&four=${localStorage.getItem(3)}&five=${localStorage.getItem(4)}&six=${localStorage.getItem(5)}&seven=${localStorage.getItem(6)}&eight=${localStorage.getItem(7)}&nine=${localStorage.getItem(8)}&ten=${localStorage.getItem(9)}&eleven=${localStorage.getItem(10)}&twelve=${localStorage.getItem(11)}&thirteen=${localStorage.getItem(12)}&fourteen=${localStorage.getItem(13)}&fifteen=${localStorage.getItem(14)}&sixteen=${localStorage.getItem(15)}&seventeen=${localStorage.getItem(16)}&eighteen=${localStorage.getItem(17)}&nineteen=${localStorage.getItem(18)}&twenty=${localStorage.getItem(19)}&twentyone=${localStorage.getItem(20)}&twentytwo=${localStorage.getItem(21)}&twentythree=${localStorage.getItem(22)}&twentyfour=${localStorage.getItem(23)}&twentyfive=${localStorage.getItem(24)}&twentysix=${localStorage.getItem(25)}&twentyseven=${localStorage.getItem(26)}&twentyeight=${localStorage.getItem(27)}&twentynine=${localStorage.getItem(28)}&thirty=${localStorage.getItem(29)}&thirtyone=${localStorage.getItem(30)}&thirtytwo=${localStorage.getItem(31)}&thirtythree=${localStorage.getItem(32)}&thirtyfour=${localStorage.getItem(33)}&thirtyfive=${localStorage.getItem(34)}&thirtysix=${localStorage.getItem(35)}&thirtyseven=${localStorage.getItem(36)}&thirtyeight=${localStorage.getItem(37)}&thirtynine=${localStorage.getItem(38)}&forty=${localStorage.getItem(39)}&extrapoints1=${localStorage.getItem("extrapoints1")}&extrapoints2=${localStorage.getItem("extrapoints2")}&extrapoints3=${localStorage.getItem("extrapoints3")}`;
        }   
        }
      this.htmlElement.innerText = this.vragen['vragenlijst'][parseInt(localStorage.getItem("currentquestion")) + 1]['question']
  
        localStorage.setItem("currentquestion", parseInt(localStorage.getItem("currentquestion")) + 1)
        if(localStorage.getItem("extrapoints1") == localStorage.getItem("currentquestion")){
          this.HTMLExtraButton.innerText = "Extra punten toegevoegd"
        }
        else
        {
          if(localStorage.getItem("extrapoints2") == localStorage.getItem("currentquestion")){
            this.HTMLExtraButton.innerText = "Extra punten toegevoegd"
          }
          else
        {
          if(localStorage.getItem("extrapoints3") == localStorage.getItem("currentquestion")){
            this.HTMLExtraButton.innerText = "Extra punten toegevoegd"
          }
          else{
            this.HTMLExtraButton.innerText = "Geef extra punten"
          }
        }
        }
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
    onExtraClicked = () => {
      if(localStorage.getItem("extrapoints1") == null){
        localStorage.setItem("extrapoints1", localStorage.getItem("currentquestion"))
        this.HTMLExtraButton.innerText = "Extra punten toegevoegd"
        return
      }
      if(localStorage.getItem("extrapoints2") == null){
        localStorage.setItem("extrapoints2", localStorage.getItem("currentquestion"))
        this.HTMLExtraButton.innerText = "Extra punten toegevoegd"
        return
      }
      if(localStorage.getItem("extrapoints3") == null){
        localStorage.setItem("extrapoints3", localStorage.getItem("currentquestion"))
        this.HTMLExtraButton.innerText = "Extra punten toegevoegd"
        return
      }
      else
      {
        alert("Je hebt al bij 3 vragen extra punten gegeven.")
      }
    }
    
}

const question = new Question(localStorage.getItem("currentquestion"), document.getElementById("js--vraag"), document.getElementById("js--previousbutton"), document.getElementById("js--nextbutton"), document.getElementById("js--extraPoints"));

