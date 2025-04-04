const questionData = [
  ['What city is known as "The Eternal City"?', ["Paris", "Rome", "Warsaw"], 1],
  [
    "In which country would you find Mount Kilimanjaro?",
    ["Tanzania", "Kongo", "Senegal"],
    0,
  ],
  [
    "True or false: Halloween originated as an ancient Irish festival.",
    ["True", "False"],
    0,
  ],
];

class Question {
  #title;
  #answers;
  #correctAnswer;
  constructor(title, answers, correctAnswer) {
    this.#title = title;
    this.#answers = answers;
    this.#correctAnswer = correctAnswer;
  }
  get title() {
    // dostanie się do prywatnej // można też użyc set aby zmienić
    return this.#title;
  }
  get answers() {
    return this.#answers;
  }
  get correctAnswer() {
    return this.#correctAnswer;
  }
}
class Quiz {
  #questions;
  #currentQuestionIndex;
  #score;
  constructor(questions) {
    this.#questions = questions.map(
      (question) => new Question(question[0], question[1], question[2])
    );
    this.#currentQuestionIndex = 0;
    this.#score = 0;
  }
  displayQuestion() {
    const questionElement = document.querySelector(".question");

    questionElement.textContent =
      this.#questions[this.#currentQuestionIndex].title;
    const answersElements = document.querySelector(".answers");
    answersElements.textContent = "";
    this.#questions[this.#currentQuestionIndex].answers.forEach(
      (answer, index) => {
        const answerElement = document.createElement("div");
        answerElement.innerHTML = `<label><input type="radio" value=${index} name="answer"> ${answer}</label>`;
        answersElements.appendChild(answerElement);
      }
    );
  }
  nextQuestion() {
    const selectedAnswer = document.querySelector(`input[name=answer]:checked`);
    if (selectedAnswer) {
      if (
        parseInt(selectedAnswer.value) === // zamienia string na number ==
        this.#questions[this.#currentQuestionIndex].correctAnswer
      ) {
        this.#score++;
      }
      this.#currentQuestionIndex++;
      if (this.#currentQuestionIndex < this.#questions.length) {
        this.displayQuestion();
      } else {
        this.displayEnd();
      }
    } else alert("Mark the Answer!!!");
  }
  displayEnd() {
    const resultDiv = document.querySelector(".result");
    resultDiv.textContent = `You get ${this.#score}/${
      this.#questions.length
    } points.`;
  }
}

const quiz = new Quiz(questionData);
quiz.displayQuestion();
