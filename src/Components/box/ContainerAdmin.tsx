import React, { ReactNode } from "react";
import NavbarAdmin from "../navbars/navbarAdmin";
import { CgProfile } from "react-icons/cg";
interface ContainerAdminProps {
    children: ReactNode;
    title: String
}

const ContainerAdmin: React.FC<ContainerAdminProps> = ({ children, title = 'title' }) => {
    return (
        <main className="flex  h-full">
            <NavbarAdmin />
            <div className="p-8 w-full">
                <span className="flex flex-col w-full ">
                    <CgProfile className="text-5xl text-secondary self-end" />
                    <h1 className="text-lg 2xl:text-3xl font-bold name-outline">{title}</h1>
                </span>
                {children}
            </div>
        </main>
    );
};

export default ContainerAdmin;
