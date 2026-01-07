// Larger pool of math problems - will be shuffled each game
export const mathProblemsPool = [
  // Addition
  { question: "5 + 3 = ?", answer: 8, options: [9, 8, 6, 7] },
  { question: "9 + 7 = ?", answer: 16, options: [16, 14, 17, 15] },
  { question: "11 + 9 = ?", answer: 20, options: [19, 21, 20, 18] },
  { question: "8 + 6 = ?", answer: 14, options: [14, 15, 12, 13] },
  { question: "15 + 4 = ?", answer: 19, options: [18, 19, 20, 17] },
  { question: "7 + 8 = ?", answer: 15, options: [14, 16, 15, 13] },
  { question: "13 + 7 = ?", answer: 20, options: [20, 19, 21, 18] },
  
  // Subtraction
  { question: "12 - 4 = ?", answer: 8, options: [7, 8, 9, 6] },
  { question: "20 - 8 = ?", answer: 12, options: [11, 13, 12, 10] },
  { question: "30 - 12 = ?", answer: 18, options: [18, 17, 16, 19] },
  { question: "25 - 9 = ?", answer: 16, options: [15, 16, 17, 14] },
  { question: "18 - 7 = ?", answer: 11, options: [12, 10, 11, 9] },
  { question: "22 - 6 = ?", answer: 16, options: [16, 15, 14, 17] },
  { question: "35 - 15 = ?", answer: 20, options: [19, 21, 18, 20] },
  
  // Multiplication
  { question: "6 × 2 = ?", answer: 12, options: [11, 12, 13, 10] },
  { question: "7 × 3 = ?", answer: 21, options: [20, 24, 21, 18] },
  { question: "5 × 4 = ?", answer: 20, options: [20, 18, 22, 19] },
  { question: "8 × 3 = ?", answer: 24, options: [23, 25, 24, 21] },
  { question: "9 × 2 = ?", answer: 18, options: [17, 19, 18, 16] },
  { question: "6 × 4 = ?", answer: 24, options: [24, 22, 26, 23] },
  { question: "7 × 5 = ?", answer: 35, options: [33, 35, 38, 30] },
  { question: "8 × 4 = ?", answer: 32, options: [30, 32, 34, 28] },
  
  // Division
  { question: "15 ÷ 3 = ?", answer: 5, options: [4, 5, 6, 3] },
  { question: "24 ÷ 4 = ?", answer: 6, options: [6, 7, 5, 8] },
  { question: "18 ÷ 2 = ?", answer: 9, options: [8, 10, 9, 7] },
  { question: "20 ÷ 5 = ?", answer: 4, options: [5, 4, 3, 6] },
  { question: "36 ÷ 6 = ?", answer: 6, options: [6, 5, 8, 7] },
  { question: "28 ÷ 4 = ?", answer: 7, options: [8, 7, 6, 9] },
  { question: "32 ÷ 8 = ?", answer: 4, options: [3, 5, 4, 6] },
  { question: "45 ÷ 5 = ?", answer: 9, options: [9, 8, 10, 7] },
];

// Larger pool of words - will be shuffled each game
export const wordsPool = [
  { word: "SCHOOL", scrambled: "LOSHOC" },
  { word: "TEACHER", scrambled: "HACEERT" },
  { word: "STUDENT", scrambled: "TEDNSTU" },
  { word: "LEARNING", scrambled: "GNINRAEL" },
  { word: "SCIENCE", scrambled: "ECNEICS" },
  { word: "MATHEMATICS", scrambled: "SCITAMEHTAM" },
  { word: "ENGLISH", scrambled: "HSILGNE" },
  { word: "EDUCATION", scrambled: "NOITACUDE" },
  { word: "KNOWLEDGE", scrambled: "EGDELWONK" },
  { word: "LIBRARY", scrambled: "YRARBIL" },
  { word: "HOMEWORK", scrambled: "KROWEMOH" },
  { word: "CLASSROOM", scrambled: "MOORSSALC" },
  { word: "PRINCIPAL", scrambled: "LAPICNIRP" },
  { word: "COMPUTER", scrambled: "RETUPMOC" },
  { word: "HISTORY", scrambled: "YROTSIH" },
  { word: "GEOGRAPHY", scrambled: "YHPARGOEG" },
  { word: "EXPERIMENT", scrambled: "TNEMIREPXE" },
  { word: "NOTEBOOK", scrambled: "KOOBETON" },
  { word: "PENCIL", scrambled: "LICNEP" },
  { word: "READING", scrambled: "GNIDAER" },
];

// Utility function to shuffle array
export function shuffleArray<T>(array: T[]): T[] {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}
