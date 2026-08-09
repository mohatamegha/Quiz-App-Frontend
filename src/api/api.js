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
export const getQuizById = async (id) => {
    const response = await api.get(`/quiz/${id}`);
    return response
};


//submit a quiz
export const evaluateQuiz = (quizId, payload) => {
    return api.post(`/quiz/${quizId}/submit`, payload);
};

//create quiz
export const createQuiz = async (quizName) => {
  const response = await api.post("/quiz", { quizName });
  return response.data;
};


//delete a quiz
export const deleteQuiz = async (quizId) => {
  await api.delete(`/quiz/${quizId}`);
};

//add multiple questions to quiz all at once
export const addBulkQuestions = async (questions) => {
  const response = await api.post("/question/bulk", questions);
  return response.data;
};

//add question
export const addQuestion = (question) => {
  return api.post("/question", question);
};