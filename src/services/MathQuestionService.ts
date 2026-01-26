import axios from 'axios';

export interface MathQuestion {
  question: string;
  answer: string | number;
  options: (string | number)[];
}

const TRIVIA_API_URL = 'https://opentdb.com/api.php';

export const MathQuestionService = {
  async getQuestions(classLevel: number): Promise<MathQuestion[]> {
    if (classLevel <= 5) {
      // Classes 1-5: English questions
      return this.generateLocalQuestions(classLevel);
    } else {
      // Classes 6-10: Hindi questions
      return this.generateHindiQuestions(classLevel);
    }
  },

  generateLocalQuestions(classLevel: number): MathQuestion[] {
    const questions: MathQuestion[] = [];
    const count = 10;

    for (let i = 0; i < count; i++) {
      let q: MathQuestion;
      switch (classLevel) {
        case 1: // Simple Addition (1-10)
          q = this.generateOperation(1, 10, '+');
          break;
        case 2: // Addition & Subtraction (1-20)
          q = this.generateOperation(1, 20, Math.random() > 0.5 ? '+' : '-');
          break;
        case 3: { // Add/Sub/Mul (1-50, small multiplication)
          const op3 = Math.random();
          if (op3 < 0.33) q = this.generateOperation(1, 50, '+');
          else if (op3 < 0.66) q = this.generateOperation(1, 50, '-');
          else q = this.generateOperation(1, 10, '*');
          break;
        }
        case 4: { // Harder mixed
          const op4 = Math.random();
          if (op4 < 0.33) q = this.generateOperation(10, 100, '+');
          else if (op4 < 0.66) q = this.generateOperation(10, 100, '-');
          else q = this.generateOperation(2, 12, '*');
          break;
        }
        default: { // Class 5: All operations including division
          const op5 = Math.random();
          if (op5 < 0.25) q = this.generateOperation(10, 100, '+');
          else if (op5 < 0.5) q = this.generateOperation(10, 100, '-');
          else if (op5 < 0.75) q = this.generateOperation(2, 12, '*');
          else q = this.generateDivisionOperation(2, 12);
          break;
        }
      }
      questions.push(q);
    }
    return questions;
  },

  generateHindiQuestions(classLevel: number): MathQuestion[] {
    const questions: MathQuestion[] = [];
    const count = 10;

    for (let i = 0; i < count; i++) {
      let q: MathQuestion;
      switch (classLevel) {
        case 6: { // योग और घटाव (Addition & Subtraction)
          const op = Math.random() > 0.5 ? '+' : '-';
          q = this.generateHindiOperation(10, 200, op);
          break;
        }
        case 7: { // सभी बुनियादी संक्रियाएं (All basic operations)
          const op7 = Math.random();
          if (op7 < 0.25) q = this.generateHindiOperation(20, 300, '+');
          else if (op7 < 0.5) q = this.generateHindiOperation(20, 300, '-');
          else if (op7 < 0.75) q = this.generateHindiOperation(2, 15, '*');
          else q = this.generateHindiDivisionOperation(2, 15);
          break;
        }
        case 8: { // मध्यम कठिनाई (Medium difficulty)
          const op8 = Math.random();
          if (op8 < 0.25) q = this.generateHindiOperation(50, 500, '+');
          else if (op8 < 0.5) q = this.generateHindiOperation(50, 500, '-');
          else if (op8 < 0.75) q = this.generateHindiOperation(5, 20, '*');
          else q = this.generateHindiDivisionOperation(5, 20);
          break;
        }
        case 9: { // उच्च कठिनाई (High difficulty)
          const op9 = Math.random();
          if (op9 < 0.2) q = this.generateHindiOperation(100, 1000, '+');
          else if (op9 < 0.4) q = this.generateHindiOperation(100, 1000, '-');
          else if (op9 < 0.6) q = this.generateHindiOperation(10, 25, '*');
          else if (op9 < 0.8) q = this.generateHindiDivisionOperation(10, 25);
          else q = this.generateHindiSquareQuestion();
          break;
        }
        default: { // Class 10: उन्नत (Advanced)
          const op10 = Math.random();
          if (op10 < 0.15) q = this.generateHindiOperation(100, 1000, '+');
          else if (op10 < 0.3) q = this.generateHindiOperation(100, 1000, '-');
          else if (op10 < 0.45) q = this.generateHindiOperation(10, 30, '*');
          else if (op10 < 0.6) q = this.generateHindiDivisionOperation(10, 30);
          else if (op10 < 0.8) q = this.generateHindiSquareQuestion();
          else q = this.generateHindiPercentageQuestion();
          break;
        }
      }
      questions.push(q);
    }
    return questions;
  },

  generateOperation(min: number, max: number, operator: string): MathQuestion {
    const a = Math.floor(Math.random() * (max - min + 1)) + min;
    const b = Math.floor(Math.random() * (max - min + 1)) + min;
    let result: number;
    let questionStr: string;

    switch (operator) {
      case '+':
        result = a + b;
        questionStr = `${a} + ${b} = ?`;
        break;
      case '-': {
        // Ensure positive result for simplicity
        const big = Math.max(a, b);
        const small = Math.min(a, b);
        result = big - small;
        questionStr = `${big} - ${small} = ?`;
        break;
      }
      case '*':
        result = a * b;
        questionStr = `${a} × ${b} = ?`;
        break;
      default:
        result = 0;
        questionStr = '';
    }

    return {
      question: questionStr,
      answer: result,
      options: this.generateOptions(result),
    };
  },

  generateOptions(correct: number): number[] {
    const options = new Set<number>();
    options.add(correct);

    while (options.size < 4) {
      const offset = Math.floor(Math.random() * 5) + 1;
      const sign = Math.random() > 0.5 ? 1 : -1;
      const wrong = correct + (offset * sign);
      if (wrong >= 0) options.add(wrong);
    }

    return Array.from(options).sort(() => Math.random() - 0.5);
  },

  generateDivisionOperation(min: number, max: number): MathQuestion {
    const divisor = Math.floor(Math.random() * (max - min + 1)) + min;
    const quotient = Math.floor(Math.random() * (max - min + 1)) + min;
    const dividend = divisor * quotient;
    
    return {
      question: `${dividend} ÷ ${divisor} = ?`,
      answer: quotient,
      options: this.generateOptions(quotient),
    };
  },

  generateHindiOperation(min: number, max: number, operator: string): MathQuestion {
    const a = Math.floor(Math.random() * (max - min + 1)) + min;
    const b = Math.floor(Math.random() * (max - min + 1)) + min;
    let result: number;
    let questionStr: string;

    switch (operator) {
      case '+':
        result = a + b;
        questionStr = `${a} + ${b} = ?`;
        break;
      case '-': {
        const big = Math.max(a, b);
        const small = Math.min(a, b);
        result = big - small;
        questionStr = `${big} - ${small} = ?`;
        break;
      }
      case '*':
        result = a * b;
        questionStr = `${a} × ${b} = ?`;
        break;
      default:
        result = 0;
        questionStr = '';
    }

    return {
      question: questionStr,
      answer: result,
      options: this.generateOptions(result),
    };
  },

  generateHindiDivisionOperation(min: number, max: number): MathQuestion {
    const divisor = Math.floor(Math.random() * (max - min + 1)) + min;
    const quotient = Math.floor(Math.random() * (max - min + 1)) + min;
    const dividend = divisor * quotient;
    
    return {
      question: `${dividend} ÷ ${divisor} = ?`,
      answer: quotient,
      options: this.generateOptions(quotient),
    };
  },

  generateHindiSquareQuestion(): MathQuestion {
    const base = Math.floor(Math.random() * 15) + 5; // 5 to 19
    const result = base * base;
    
    return {
      question: `${base}<sup>2</sup> का वर्ग = ?`,
      answer: result,
      options: this.generateOptions(result),
    };
  },

  generateHindiPercentageQuestion(): MathQuestion {
    const percentage = [10, 20, 25, 50, 75][Math.floor(Math.random() * 5)];
    const total = Math.floor(Math.random() * 10 + 5) * 10; // 50 to 140
    const result = (percentage * total) / 100;
    
    return {
      question: `${total} का ${percentage}% = ?`,
      answer: result,
      options: this.generateOptions(result),
    };
  },



  async fetchFromApi(classLevel: number): Promise<MathQuestion[]> {
    try {
      let difficulty = 'easy';
      if (classLevel >= 7) difficulty = 'medium';
      if (classLevel >= 9) difficulty = 'hard';

      const response = await axios.get(TRIVIA_API_URL, {
        params: {
          amount: 10,
          category: 19, // Mathematics
          difficulty: difficulty,
          type: 'multiple',
        },
      });

      if (response.data.results) {
        return response.data.results.map((item: { question: string; correct_answer: string; incorrect_answers: string[] }) => ({
          question: this.decodeHtml(item.question),
          answer: this.decodeHtml(item.correct_answer),
          options: [...item.incorrect_answers, item.correct_answer]
            .map((opt: string) => this.decodeHtml(opt))
            .sort(() => Math.random() - 0.5),
        }));
      }
      // Fallback
      return this.generateLocalQuestions(4);
    } catch (error) {
      console.error("Error fetching math questions:", error);
      return this.generateLocalQuestions(4);
    }
  },

  decodeHtml(html: string) {
    const txt = document.createElement("textarea");
    txt.innerHTML = html;
    return txt.value;
  }
};
