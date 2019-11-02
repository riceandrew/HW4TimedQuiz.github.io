//Sets body to a variable
var body = document.body;

//Creates most necessary variables
var div1El = document.createElement("div");
var listEl = document.createElement("ol");
var li1;
var li2;
var li3;
var li4;
var div2El;
var correct = "Correct Answer!";
var wrong = "Wrong Answer!";
div2El = document.createElement("div");
var count = 0;
var totalcorrect = []


//Set the text content of relevant element
div1El.textContent = "This is a timed quiz! You will have 75 seconds to complete the quiz. Each wrong answer will result in a 15 second penilty.";
listEl.textContent = "";

//Append children
body.appendChild(div1El);
body.appendChild(listEl);



//grabs the start quiz button from HTML
var start = document.querySelector(".startquiz")

//starts timer
var timeEl = document.querySelector(".time");
var secondsLeft = 75;

function setTime() {
  var timerInterval = setInterval(function () {
    secondsLeft--;
    timeEl.textContent = secondsLeft + " seconds remaining";

    if (secondsLeft === 0) {
      clearInterval(timerInterval);
    }

  }, 1000);
}

//Counter for correct answers
function correctansw() {
  for (i = 0; i < 1; i++);
  if (correct) {
    correctcount;
    console.log(correctcount);
  }


}

//initiates onClick function to start the quiz
start.addEventListener("click", function () {
  li1 = document.createElement("li");
  li1.setAttribute ("id", "li1");
  li2 = document.createElement("li");
  li2.setAttribute ("id", "li2")
  li3 = document.createElement("li");
  li3.setAttribute ("id", "li3");
  li4 = document.createElement("li");
  li4.setAttribute ("id", "li4");
  body.appendChild(li1);
  body.appendChild(li2);
  body.appendChild(li3);
  body.appendChild(li4);
  body.appendChild(div2El);
  


  startquiz()
});

//clears button and beginning text from screen
function startquiz() {
  var quizcontainer = document.querySelector("#quizbutton")
  quizcontainer.innerHTML = ""
  div1El.textContent = ""
  setTime()



  quest1()
}
//displays question and choices
function quest1() {
  div1El.textContent = questions[0].title;
  li1.innerHTML = `<button>${questions[0].choices[0]}</button>`;
  li2.innerHTML = `<button>${questions[0].choices[1]}</button>`;
  li3.innerHTML = `<button>${questions[0].choices[2]}</button>`;
  li4.innerHTML = `<button>${questions[0].choices[3]}</button>`;

  //put onclick functions for question 1 here
  li1.addEventListener("click", function () {
    if (li1) {
      div2El.textContent = wrong;
      quest2();
    }
  })
  li2.addEventListener("click", function () {
    if (li2) {
      div2El.textContent = wrong;
      quest2();
    }
  })
  li3.addEventListener("click", function () {
    if (li3) {
      div2El.textContent = correct;
      count ++;
      console.log(count);
      quest2();
    }
  })
  li4.addEventListener("click", function () {
    if (li4) {
      div2El.textContent = wrong;
      quest2();
    }
  })

}

function quest2() {
  div1El.textContent = questions[1].title;
  li1.innerHTML = `<button>${questions[1].choices[0]}</button>`;
  li2.innerHTML = `<button>${questions[1].choices[1]}</button>`;
  li3.innerHTML = `<button>${questions[1].choices[2]}</button>`;
  li4.innerHTML = `<button>${questions[1].choices[3]}</button>`;

  

  //put onclick functions for question 2 here
  li1.addEventListener("click", function () {
    if (li1) {
      div2El.textContent = wrong;
      quest3();
    }
  })
  li2.addEventListener("click", function () {
    if (li2) {
      div2El.textContent = wrong;
      quest3();
    }
  })
  li3.addEventListener("click", function () {
    if (li3) {
      div2El.textContent = correct;
      count ++;
      console.log(count)
      quest3();
    }
  })
  li4.addEventListener("click", function () {
    if (li4) {
      div2El.textContent = wrong;
      quest3();
    }
  })

}

function quest3() {
  div1El.textContent = questions[2].title;
  li1.innerHTML = `<button>${questions[2].choices[0]}</button>`;
  li2.innerHTML = `<button>${questions[2].choices[1]}</button>`;
  li3.innerHTML = `<button>${questions[2].choices[2]}</button>`;
  li4.innerHTML = `<button>${questions[2].choices[3]}</button>`;

  //put onclick functions for question 3 here
  li1.addEventListener("click", function () {
    if (li1) {
      div2El.textContent = wrong;
      quest4();
    }
  })
  li2.addEventListener("click", function () {
    if (li2) {
      div2El.textContent = wrong;
      quest4();
    }
  })
  li3.addEventListener("click", function () {
    if (li3) {
      div2El.textContent = correct;
      count ++;
      console.log(count)
      quest4();

    }
  })
  li4.addEventListener("click", function () {
    if (li4) {
      div2El.textContent = wrong;
      quest4();
    }
  })

}

function quest4() {
  div1El.textContent = questions[3].title;
  li1.innerHTML = `<button>${questions[3].choices[0]}</button>`;
  li2.innerHTML = `<button>${questions[3].choices[1]}</button>`;
  li3.innerHTML = `<button>${questions[3].choices[2]}</button>`;
  li4.innerHTML = `<button>${questions[3].choices[3]}</button>`;
  //put onclick functions for question 4 here
  li1.addEventListener("click", function () {
    if (li1) {
      div2El.textContent = wrong;
      quest5();
    }
  })
  li2.addEventListener("click", function () {
    if (li2) {
      div2El.textContent = correct;
      count ++;
      console.log(count)
      quest5();

    }
  })
  li3.addEventListener("click", function () {
    if (li3) {
      div2El.textContent = wrong;
      quest5();
    }
  })
  li4.addEventListener("click", function () {
    if (li4) {
      div2El.textContent = wrong;
      quest5();
    }
  })

}

function quest5() {
  div1El.textContent = questions[4].title;
  li1.innerHTML = `<button>${questions[4].choices[0]}</button>`;
  li2.innerHTML = `<button>${questions[4].choices[1]}</button>`;
  li3.innerHTML = `<button>${questions[4].choices[2]}</button>`;
  li4.innerHTML = `<button>${questions[4].choices[3]}</button>`;
  //put onclick functions for question 5 here
  li1.addEventListener("click", function () {
    if (li1) {
      div2El.textContent = wrong;
      displayresults();
    }
  })
  li2.addEventListener("click", function () {
    if (li2) {
      div2El.textContent = correct;
      count ++;
      console.log(count)
      displayresults();
    }
  })
  li3.addEventListener("click", function () {
    if (li3) {
      div2El.textContent = wrong;
      displayresults();
    }
  })
  li4.addEventListener("click", function () {
    if (li4) {
      div2El.textContent = wrong;
      displayresults();
    }
  })

}

function displayresults(){
  div1El.innerHTML = `You got ${count} correct!`
}