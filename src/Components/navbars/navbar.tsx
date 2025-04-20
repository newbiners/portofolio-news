import { Children } from "react";

interface NavBarProps {
    children?: React.ReactNode;
}

const NavBar: React.FC<NavBarProps> = ({ children }) => {
    return (
        <nav className="flex items-center justify-between flex-wrap bg-slate-200 p-6">
            <div className="flex items-center flex-shrink-0 text-white mr-6">
                <span className="font-semibold text-xl tracking-tight">Navbar</span> 
            </div>
            <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
                <div className="text-sm lg:flex-grow">
                    <a href="#home" className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-secondary">Home</a>
                    <a href="#about" className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-secondary">About</a>
                    <a href="#blog" className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-secondary">Blog</a>
                    <a href="#project" className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-secondary">Project</a>
                    <a href="#contact" className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-secondary">Contact</a>
                </div>
            </div>
        </nav>
    )
}