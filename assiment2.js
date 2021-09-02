class Question {
  constructor(question, point, answer) {
    this.question = String(question);
    this.point = point;
    this.answer = String(answer);
  }
}

class Player {
  constructor(name) {
    this.name = name;
    this.score = 0;
  }
  toAnswer(question, choice) {
    if (question.question && question.point && question.answer) {
      if (choice === question.answer) {
        this.score = this.score + question.point;
        return `${this.name} answer correct and get ${question.point} points and total score is ${this.score}`;
      } else {
        return `${this.name} answer incorrect`;
      }
    } else {
      return "InValid question object";
    }
  }
  getScore() {
    return this.score;
  }
}

const question1 = new Question("2+2", 20, 4);
const question2 = new Question("4+4", 5, "8");
const question3 = new Question("100-50", 10, "50");
const question4 = new Question("108/9", 20, "12");
const question5 = new Question("95*3", 100, "285");

const question6 = {
  question: "500-1",
  point: 500,
  answer: "499",
};

const player1 = new Player("frong");

console.log(player1.toAnswer(question1, "4"));
console.log(player1.toAnswer(question2, "5"));
console.log(player1.toAnswer(question3, "50"));
console.log(player1.toAnswer(question6, "499"));
