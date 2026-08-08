import { jwtDecode } from "jwt-decode";

export const decodeToken = (token) => {
    const decoded_token = jwtDecode(token);
    console.log(decoded_token);
    return decoded_token;
};