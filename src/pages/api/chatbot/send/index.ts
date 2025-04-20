'use server';

import type { NextApiRequest, NextApiResponse } from "next";
import { AuthService } from "@/services/area/AuthService";
import { ChatBotService } from "@/services/area/ChatbotServices";
import { serialize } from "cookie";

export default async function ChatbotServer(
    req: NextApiRequest,
    res: NextApiResponse,
) {
    if (req.method !== "POST") {
        return res.status(405).json({ message: "Method not allowed" });
    }
    const { prompt } = req.body;
    try {
        const { data } = await ChatBotService.send({ prompt });
        return res.status(200).json(data);
    } catch (error) {
        console.error("Error during login:", error);
        return res.status(500).json({ success: false, message: "Login failed" });
    }
}
