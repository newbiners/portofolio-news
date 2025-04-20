type buttonInputType = {
    title: String,
    onClick?: () => void
}

export default function ButtonInput({ title, onClick }: buttonInputType) {
    return (
        <div>
        <button className="text-[#53B964] border-2 border-[#53B964] px-6 lg:px-11 py-2 lg:py-3 my-2 rounded-lg lg:text-xl text-base" onClick={onClick} style={{ letterSpacing: "1px" }}>
            <p>
                {title}
            </p>
        </button>
        </div>
    )
}