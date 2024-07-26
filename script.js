//dropdowns
let navItems = document.getElementsByClassName("navbar-item");
let dropdown = document.getElementsByClassName("dropdown");
let id;

for (let i = 0; i < navItems.length; i++) {
  navItems[i].addEventListener("mouseover", (event) => {
    clearTimeout(id);
    for (let j = 0; j < dropdown.length; j++) {
      dropdown[j].style.display = "flex";
      dropdown[j].style.left = event.clientX - 120 + "px";
      dropdown[j].style.top = "50px";
      console.log(event.clientX);
    }
  });
}

for (let i = 0; i < navItems.length; i++) {
  navItems[i].addEventListener("mouseover", (event) => {
    clearTimeout(id);
    for (let j = 0; j < dropdown.length; j++) {
      dropdown[j].style.display = "flex";
      dropdown[j].style.left = event.clientX - 120 + "px";
      dropdown[j].style.top = "50px";
      console.log(event.clientX);
    }
    let personal = document.getElementById("personal");
    if (i == 0) {
      //Suhaan
      personal.href = "PersonalWebsite/mySite.html";
    }
    if (i == 1) {
      //Rohan
      personal.href = "https://personal-portfolio-3guc.onrender.com";
    }
    if (i == 2) {
      //Muhammad
      personal.href = "https://muhammad200m.github.io/personalwebsite/";
    }
    if (i == 3) {
      //Sebastian
      personal.href = "https://sebastiant5.github.io/glolite-website/";
    }
  });

  navItems[i].addEventListener("mouseout", () => {
    for (let j = 0; j < dropdown.length; j++) {
      dropdown[j].addEventListener("mouseout", () => {
        document.body.addEventListener("mousedown", () => {
          setTimeout(() => {
            dropdown[j].style.display = "none";
          }, 150);
        });
      });
    }
  });
}
//carousel
let carousal = document.getElementById("carousel");
let count = 0;

setInterval(changeImage, 1000);

function changeImage() {
  console.log("changeImage");
  if (count == 0) {
    carousal.src = "images/image1.png";
  } else if (count == 1) {
    carousal.src = "images/image2.png";
  } else if (count == 2) {
    carousal.src = "images/image3.png";
    count = -1; // Reset to 0 after reaching the end of the array.
  }
  count++;
}

//Rock Paper Scissors

let rockRef = document.querySelector("#rock");
let paperRef = document.querySelector("#paper");
let scissorRef = document.querySelector("#scissors");
let result = document.querySelector("#result");

let computer = ["Rock", "Paper", "Scissors"];

function randomNum(Upperbound) {
  return Math.floor(Math.random() * (Upperbound + 1));
}

function checkResult(playerPick) {
  let computerPick = computer[randomNum(3)];

  if (playerPick == "Rock") {
    if (computerPick == "Paper") {
      result.innerHTML = "You chose rock, computer chose paper. You lost!";
    } else if (computerPick == "Rock") {
      result.innerHTML = "You chose rock, computer chose rock. You drew!";
    } else {
      result.innerHTML = "You chose rock, computer chose scissors. You won!";
    }
  } else if (playerPick == "Paper") {
    if (computerPick == "Paper") {
      result.innerHTML = "You chose paper, computer chose paper. You drew!";
    } else if (computerPick == "Rock") {
      result.innerHTML = "You chose paper, computer chose rock. You won!";
    } else {
      result.innerHTML = "You chose paper, computer chose scissors. You lost!";
    }
  } else {
    if (computerPick == "Paper") {
      result.innerHTML = "You chose scissors, computer chose paper. You won!";
    } else if (computerPick == "Rock") {
      result.innerHTML = "You chose scissors, computer chose rock. You lost!";
    } else {
      result.innerHTML =
        "You chose scissors, computer chose scissors. You drew!";
    }
  }

  setTimeout(clearResult, 3000);
}

rockRef.onclick = function () {
  rockRef.style.animation = "rotate 0.5s 1";
  setTimeout(() => {
    rockRef.style.animation = "";
  }, 1200);
  console.log("Testing");
  checkResult("Rock");
};
paperRef.onclick = function () {
  paperRef.style.animation = "rotate 0.5s 1";
  setTimeout(() => {
    paperRef.style.animation = "";
  }, 1200);
  console.log("Testing");
  checkResult("Paper");
};
scissorRef.onclick = function () {
  setTimeout(() => {
    scissorRef.style.animation = "";
  }, 1200);
  scissorRef.style.animation = "rotate 0.5s 1";
  console.log("Testing");
  checkResult("Scissors");
};

function clearResult() {
  result.innerHTML = "Please select a button";
}


// Smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();

    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// Scroll section active link
let sections = document.querySelectorAll('div[id]');
let navlinks = document.querySelectorAll('.dropdown a');

window.onscroll = () => {
  sections.forEach(sec => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute('id');

    if (top >= offset && top < offset + height) {
      navlinks.forEach(link => {
        link.classList.remove('active');
      });
      document.querySelector('.dropdown a[href*=' + id + ']').classList.add('active');
    }
  });
};
