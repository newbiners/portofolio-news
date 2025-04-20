import { ContainerAdmin, Table } from "@/Components";
import { MdComputer } from "react-icons/md";
import { IoPhonePortraitOutline } from "react-icons/io5";
export default function CmsBlog() {
    const data = [
        {
            id: 1,
            title: 'title',
            blog: 'blog',
            image: '/image-profile.png'
        },
        {
            id: 2,
            title: 'title',
            blog: 'blog',
            image: '/image-profile.png'
        },
        {
            id: 3,
            title: 'title',
            blog: 'blog',
            image: '/image-profile.png'
        },
        {
            id: 4,
            title: 'title',
            blog: 'blog',
            image: '/image-profile.png'
        }
    ]
    return (
        <ContainerAdmin title={'Blog'}>
            <div className="mt-14">
                <Table data={data} />
            </div>
        </ContainerAdmin>
    )
}