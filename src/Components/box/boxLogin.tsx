
import Input from "../input/input"
import ButtonInput from "../buttons/button"
type loginProps = {
    username: string,
    password: string,
    setUsername: (username: string) => void
    setPassword: (password: string) => void,
    onClick: () => void
}
export default function BoxLogin({ username, password, setUsername, setPassword, onClick }: loginProps) {
    return (
        <div className="flex items-center justify-center h-[100vh]">
            <div className="box-input w-2/6 px-32 py-7 flex flex-col items-center justify-center">
                <Input type="text" value={username} setValue={setUsername} title="Username" />
                <Input type="password" value={password} setValue={setPassword} title="Password" />
                <ButtonInput title="Login" onClick={onClick} />
            </div>
        </div>
    )
}