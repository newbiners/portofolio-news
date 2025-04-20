import { FaHome } from "react-icons/fa";
import { BiLogoBlogger } from "react-icons/bi";
import { GoProjectSymlink } from "react-icons/go";
import { MdMessage } from "react-icons/md";
const NavbarAdmin = () => {

    var classNameIcon = "text-3xl text-black"
    const nav = [
        {
            name: "Home",
            icon: <FaHome className={classNameIcon} />,
            link: "/cms/home"
        },
        {
            name: "Blog",
            icon: <BiLogoBlogger className={classNameIcon} />,
            link: "/cms/blog"
        },
        {
            name: "My Project",
            icon: <GoProjectSymlink className={classNameIcon} />,
            link: "/cms/project"
        },
        {
            name: "Message",
            icon: <MdMessage className={classNameIcon} />,
            link: "/cms/message"
        },
    ]
    return (
        <nav className="bg-secondary min-h-screen w-28 py-8">
            {nav.map((item, index) => (
                <a href={item.link} key={index} className="flex items-center justify-center h-12 text-white hover:bg-white hover:text-red-400 mb-12">
                    {item.icon}
                </a>
            ))}
        </nav>
    )
}

export default NavbarAdmin