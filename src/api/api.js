import api from "./axios";

// get all quiz
export const getAllQuizzes = async () => {
    const response = await api.get("/quiz");
    return response.data;
};


//update quiz
export const updateQuiz = async (quizId, quizName) => {
  const response = await api.patch(`/quiz/${quizId}`, { quizName });
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

export const deleteQuiz = async (quizId) => {
  await api.delete(`/quiz/${quizId}`);
};

//add question
export const addQuestion = (question) => {
  return api.post("/question", question);
};