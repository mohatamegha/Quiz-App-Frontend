import api from "./axios";

// quiz.js
export const getAllQuizzes = async () => {
    const response = await api.get("/quiz");
    return response.data;
};

//quiz by id
export const getQuizById = (id) => {
    return api.get(`/quiz/${id}`);
};


//submit a quiz
export const evaluateQuiz = (quizId, payload) => {
    return api.post(`/quiz/${quizId}/submit`, payload);
};

//create quiz
export const createQuiz = (quiz) => {
  return api.post("/quiz", quiz);
};

//add question
export const addQuestion = (question) => {
  return api.post("/question", question);
};