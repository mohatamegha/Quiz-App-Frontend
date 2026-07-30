import api from "./axios";

// quiz.js
export const getAllQuizzes = async () => {
    const response = await api.get("/quiz");
    return response.data;
};