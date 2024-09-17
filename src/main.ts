import "./style.css";

let asLink = document.querySelectorAll("[as-type");
let languageLink = document.querySelectorAll("[language]");
let messageElement = document.getElementById("message");

let message: { [key: string]: string } = {
  English: 'The server is being restarted, please wait',
  German: 'Der Server wird neu gestartet, bitte warten',
  French: 'Le serveur est en cours de redémarrage, veuillez patienterdasdfsfsdfsdfsdf ssdf fsdf sd fsdf sf sd'
}
//function to change the svg image source from the "AS" img element
function asTypeChange(type: string) {
  const asImg = document.getElementById("as-img");
  if (asImg) {
    switch (type) {
      case "Modu680-AS":
        asImg.setAttribute("src", "./Modu680-AS.svg");
        break;
      case "Modu660-AS":
        asImg.setAttribute("src", "./Modu660-AS.svg");
        break;
      case "Modu612-LC":
        asImg.setAttribute("src", "./Modu612-LC.svg");
        break;
    }
  }
}

//add a click eventListener to all the "language" link element to change the message. retrieve the language from each element and pass it to the loadMessage function
languageLink.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    let language = link.getAttribute("language") || "English";
    console.log(language);
    loadMessage(language);
  });
});

//add a click eventListener to all the "as-type" link element to change the svg image source. retrieve the as-type from each element and pass it to the asTypeChange function
asLink.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    let type = link.getAttribute("as-type") || "Modu680-AS";
    asTypeChange(type);
  });
});

//load the message based on the language selected
function loadMessage(language: string) {
  if (messageElement) {
    messageElement.innerHTML = message[language] || '';
  }
}

loadMessage("English");
