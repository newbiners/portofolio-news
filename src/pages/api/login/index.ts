'use server';

import type { NextApiRequest, NextApiResponse } from "next";
import { AuthService } from "@/services/area/AuthService";
import { serialize } from "cookie";

export default async function LoginServer(
    req: NextApiRequest,
    res: NextApiResponse,
) {
    if (req.method !== "POST") {
        return res.status(405).json({ message: "Method not allowed" });
    }

    const { username, password } = req.body;

    try {
        const { data } = await AuthService.login({ username, password });
        const serializedCookie = serialize("token", data.data, {
            httpOnly: true,
            secure: process.env.NODE_ENV === "production",
            sameSite: "strict",
            path: "/",
        });

        res.setHeader("Set-Cookie", serializedCookie);
        return res.status(200).json(data);
    } catch (error) {
        console.error("Error during login:", error);
        return res.status(500).json({ success: false, message: "Login failed" });
    }
}
