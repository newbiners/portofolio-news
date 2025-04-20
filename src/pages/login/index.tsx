

import { BoxLogin } from "@/Components"
import { useState } from "react"
import { useRouter } from "next/navigation"
// import { AuthService } from "@/services/area/AuthService"
import axios from "axios"
// import LoginServer from "../api/login"
export default function Login() {
    const [password, setPassword] = useState("")
    const [username, setUsername] = useState("")
    const router = useRouter()

    const onClick = async () => {
        try {
            const response = await axios.post("/api/login", { username, password });
            const { data } = response;
            if (data) {
                console.log("Login successful:", data);
                router.push("/cms/home"); // Redirect setelah login sukses
            } else {
                console.error("Login failed:", data.message);
            }
        } catch (error) {
            console.error("Error during login:", error);
        }
    };

    return (
        <div>
            <BoxLogin
                password={password}
                setPassword={setPassword}
                setUsername={setUsername}
                username={username}
                onClick={onClick}
            />
        </div>
    )
}