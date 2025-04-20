import api from "../../constants/api";
import Service from "../Service";
import { AxiosError } from "axios";

type LoginPayload = {
    username: string,
    password: string
}
export const AuthService = {
    login: async (payload: LoginPayload) => {
        try {
            const response = await new Service(api.AuthApi()).postWithoutToken(payload);
            return response;
        } catch (e) {
            throw null;
        }
    }
}