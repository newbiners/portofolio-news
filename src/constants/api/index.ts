import { baseAPI } from "./config";

// Path: src/constants/config.ts

const api = {
    OriginApi: (endpoint?: string) => `${baseAPI}${endpoint}`,
    AuthApi: () => `${baseAPI}/api/users/login`,
    ChatBotApi: () => `${baseAPI}/api/chatbot/send`
};

export default api;