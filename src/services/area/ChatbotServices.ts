import api from "../../constants/api";
import Service from "../Service";
import { AxiosError } from "axios";

type ChatBotPayload = {
    prompt: string,
}
export const ChatBotService = {
    send: async (payload: ChatBotPayload) => {
        try {
            const response = await new Service(api.ChatBotApi()).postWithoutToken(payload);
            return response;
        } catch (e) {
            throw null;
        }
    }
}