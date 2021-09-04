class Question { //สร้าง class สำหรับคำถาม
    constructor(question, point, answer, choice) { //สร้าง constructor ที่ประกอบด้วย คำถาม, คะแนน, คำตอบ, ตัวเลือก
      this.question = String(question);//กำหนด datatype เป็น String เพื่อให้รองรับการเก็บคำถามได้ทุกชนิด
      this.point = point; 
      this.answer = String(answer); //กำหนด datatype เป็น String เพื่อให้รองรับการเก็บคำถามได้ทุกชนิด
      this.choice = choice; 
    }
  }
  
  class Player { //สร้าง class ของผู้เล่น
    constructor(name, questionAndAnswer) { //สร้าง constructor เหมือนเป็นกระดาษคำตอบที่ประกอบด้วยชื่อ คำถามและคำตอบ 
      this.name = name;
      this.score = 0; //ตั้งค่า defult ของคะแนนให้เป็น 0 
      this.questionAndAnswer = questionAndAnswer; 
      this.status = [];
      for (let question of questionAndAnswer) { 
        let status = this.toAnswer(question.question, question.answer); 
        this.status.push(status);
      }
    }
    toAnswer(question, choiceSelect) { //สร้าง class toAnswer เพื่อให้ Player เลือกคำถามและเลือก choice
      if (  //เรียกคำถาม, คะแนน, คำตอบ, ตัวเลือก ของต้นฉบับที่ถูกเก็บไว้ใน question นั้นๆ เช่น player เลือก question1 ก็จะเรียกข้อมูลของข้อนั้นมา
        question.question &&
        question.point &&
        question.answer &&
        question.choice
      ) {
        if (Object.keys(question.choice).includes(String(choiceSelect))) {
          if (String(choiceSelect) === question.answer) { //นำ choice มาเทียบกับ answer ถ้าตรงกันก็จะเข้าเงื่อนไข
            this.score = this.score + question.point; //Update score ของ player โดยการนำ score เดิมบวกกับ point ของข้อนั้นๆ
            return `${this.name} answers question ${question.question} with choice ${choiceSelect} : ${question.choice[choiceSelect]} correct , get ${question.point} points and total score is ${this.score}`;
          } else { //ถ้าเงื่อนไขไม่ตรงก็จะ return คะแนนจะเท่าเดิม
            return `${this.name} answers question ${question.question} with choice ${choiceSelect} : ${question.choice[choiceSelect]} incorrect , get 0 points and total score is ${this.score}`;
          }
        } else {
          return `Out of range of choice for this question because ${this.name} answers question ${question.question} with choice ${choiceSelect} , get 0 points and total score is ${this.score}`;
        }
      } else { //เมื่อไม่มี question ที่ user ใส่มาจะขึ้นตามนี้
        return 'InValid question object'; 
      }
    }
    getStatus() { //รวบรวมข้อมูลเพื่อนำไปแสดง
      return { name: this.name, totalScore: this.score, status: this.status };
    }
  }
  
  // สร้างคำถาม โดยมี choice ให้ player เลือก มีคำถามทั้งหมด 5 ข้อ
  const question1 = new Question('5+5', 1, '1', { 
    1: '10',
    2: '20',
    3: '30',
    4: '50',
  });
  const question2 = new Question('10+10', 1, '2', {
    1: '5',
    2: '20',
    3: '100',
    4: '200',
  });
  const question3 = new Question('10+20', 1, '3', {
    1: '5',
    2: '10',
    3: '30',
    4: '100',
  });
  const question4 = new Question('200-10', 1, '4', {
    1: '20',
    2: '40',
    3: '50',
    4: '190',
  });
  const question5 = new Question('200-20', 1, '1', {
    1: '180',
    2: '190',
    3: '200',
    4: '250',
  });
  //สร้าง player และให้ player ใส่คำถามและคำตอบ 
  const player1 = new Player('player1', [
    { question: question1, answer: '1' },
    { question: question2, answer: '4' },
    { question: question3, answer: '3' },
    { question: question4, answer: '5' },
    { question: question5, answer: '3' },
  ]);
  const player2 = new Player('player2', [
    { question: question1, answer: '1' },
    { question: question2, answer: '1' },
    { question: question3, answer: '1' },
    { question: question4, answer: '1' },
    { question: question5, answer: '1' },
  ]);
  const player3 = new Player('player3', [
    { question: question1, answer: '1' },
    { question: question2, answer: '2' },
    { question: question3, answer: '3' },
    { question: question4, answer: '1' },
    { question: question5, answer: '3' },
  ]);
  const player4 = new Player('player4', [
    { question: question1, answer: '1' },
    { question: question2, answer: '2' },
    { question: question3, answer: '3' },
    { question: question4, answer: '4' },
    { question: question5, answer: '5' },
  ]);
  const player5 = new Player('player5', [
    { question: question1, answer: '1' },
    { question: question4, answer: '2' },
    { question: question5, answer: '3' },
  ]);
  console.log(player1.getStatus());
  console.log(player2.getStatus());
  console.log(player3.getStatus());
  console.log(player4.getStatus());
  console.log(player5.getStatus());
  
