console.log("CONNECTE");

const projects = [
  {
    title: "Cool Project",
    screenshot: "http://gotoflashgames.com/files/file/033.jpg",
    description: "This is the best project", // A good project description includes 'the what', 'the why', and 'the how'.
    technologiesUsed: "HTML, CSS, Vanilla JavaScript, Version Control with Github",
    available: true,
    url: "https://github.com/nss-evening-cohort-8/js-part-deux", // Towards the latter part of the class, you will learn how to host your projects and people will be able to view them live. Cool, right? Welp, until then, just use your GitHub link in this spot as well.
    githubUrl: "https://github.com/nss-evening-cohort-8/js-part-deux",

  },
];

const printToDom = (divId, textToPrint) => {
  const selectedDiv = document.querySelector(divId);
  selectedDiv.innerHTML = textToPrint;
};

const createdProjectCards = (taco) => {
  let domString = '';
  for (let i = 0; i < taco.length; i++) {
    domString += `<div class="card my-2 text-center" style ="width: 18rem;" id="0">
      <div class="card-header">${taco[i].name}</div>
      <div class="card-body">
        <p class="card-text">${taco[i].color}</p>
      </div>
        <div class="card-footer text-muted">${taco[i].type}</div>
     </div>`;
  }

  printToDom('#projectCards', domString);
};

const init = () => {
  createProjectCards(projects);
  buttonEvents();
};


init();
