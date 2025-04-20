type inputProps = {
    type: string
    value: string,
    setValue: (value: any) => void,
    title: string
}
export default function Input({ type = "text", value, setValue, title = "title" }: inputProps) {
    return (
        <div className="my-2">
            <p className="font-bold text-xl text-slate-500 text-center mb-3">{title}</p>
            <input type={type} value={value} className="input" name="text" onChange={(e) => setValue(e.target.value)} placeholder={title} />
        </div>
    )
}