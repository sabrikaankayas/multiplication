const num1 = Math.ceil(Math.random() * 10);
const num2 = Math.ceil(Math.random() * 10);

const questionEl = document.getElementById("question");

const inputEl = document.getElementById("input");

const formEl = document.getElementById("form");

const scoreEl = document.getElementById("score");

let score = JSON.parse(localStorage.getItem("score"));

if (!score) {
  score = 0;
}

scoreEl.innerText = `score: ${score}`;

questionEl.innerText = `What is ${num1} multiply by ${num2}?`;

const correctAns = num1 * num2;

formEl.addEventListener("submit", () => {
  const userAns = +inputEl.value;
  if (userAns === correctAns) {
    score++;
    updateLocalStorage();
  } else {
    score--;
    updateLocalStorage();
  }
});

function updateLocalStorage() {
  localStorage.setItem("score", JSON.stringify(score));
}// const questionEl = document.querySelector("#question")
// const formEl = document.querySelector("#form")
// const inputEl = document.querySelector("#input")
// let score = JSON.parse(localStorage.getItem("score"));
//
//
//
//
// function questionMaker() {
//   const randomNumber1 = Math.floor(Math.random()*10);
//   const randomNumber2 = Math.floor(Math.random()*100);
//   const randomNumber3 = Math.floor(Math.random()*2);
//   const chance = [`What is ${randomNumber1} multiply by ${randomNumber2}?`, `What is ${randomNumber2} multiply by ${randomNumber1}?`];
//   questionEl.innerText = chance[randomNumber3];
//
//   if (!score) {
//     score = 0;
//   }
//   scoreEl.innerText = `score: ${score}`;
//
//
//   formEl.addEventListener("submit",function() {
//     const userAnswer = +inputEl.value
//     let correctAnswer = (randomNumber1 * randomNumber2)
//     console.log(userAnswer);
//     console.log(correctAnswer);
//     if (userAnswer == correctAnswer) {
//       alert("anan");
//     }
//   });
//   };
//
//   questionMaker();
//
//
//
//
//
//
// // function anan {if (randomNumber1 * randomNumber2 == inputEl.select()) {
// //   alert("correct")
// // };
// // };
