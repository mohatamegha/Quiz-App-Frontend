import api from "./axios";

// quiz.js
export const getAllQuizzes = async () => {
    const response = await api.get("/quiz");
    return response.data;
};

export const getQuizById = (id) => {
    return api.get(`/quiz/${id}`);
};

export const evaluateQuiz = (quizId, payload) => {
    return api.post(`/quiz/${quizId}/submit`, payload);
};