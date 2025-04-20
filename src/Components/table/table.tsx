
import { IoMdAddCircle } from "react-icons/io";
// import ClassicEditor from "../classEditor";
type TableProps = {
    data: any
}

const Table = ({ data }: TableProps) => {

    return (
        <div >
            <IoMdAddCircle className="text-6xl pb-3" />
            <table className="w-full text-sm text-left text-gray-900">
                <thead className="text-xs text-zinc-50 uppercase bg-gray-500">
                    <tr>
                        <th scope="col" className="px-6 py-3">
                            No
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Title
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Blog
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Image
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Action
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((item: any, index: number) => (
                        <tr key={index} className="bg-slate-100 border-b hover:bg-gray-300">
                            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                                {index + 1}
                            </th>
                            <td className="px-6 py-4">
                                {item.title}
                            </td>
                            <td className="px-6 py-4">
                                {item.blog}
                            </td>
                            <td className="px-6 py-4">
                                {item.image}
                            </td>
                            <td className="px-6 py-4">
                                <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">Edit</button>
                                <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            {/* <ClassicEditor /> */}
        </div>
    )

}

export default Table