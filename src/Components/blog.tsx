import BlogCard from "./box/blogCard";

const Blog = () => {
    return (
        <div className="pt-20 overflow-y-auto hide-scrollbar">
            <div className="flex justify-center">
                <input type="text" placeholder="Search" className="w-1/2 p-3 border-none focus:border-none focus:outline-none bg-[#CBD5F5]" />
                <button className="bg-[#53B964] text-white px-9 py-2">Search</button>
            </div>
            <div className="flex justify-center gap-24 items-center text-[#CBD5F5] text-2xl mt-12">
                <button>Social</button>
                <button>Blog</button>
                <button>tutorial</button>
            </div>
            <div className="grid grid-cols-4 gap-14 mt-20 px-16">
                <BlogCard
                    title="Lorem ipsum dolor sit amet, consecte..."
                    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit..."
                    image="https://dummyimage.com/600x400/000/fff"
                />
                <BlogCard
                    title="Sample Title"
                    description="This is a sample description."
                    image="https://dummyimage.com/600x400/000/fff"
                />
                <BlogCard
                    title="Sample Title"
                    description="This is a sample description."
                    image="https://dummyimage.com/600x400/000/fff"
                />
                <BlogCard
                    title="Sample Title"
                    description="This is a sample description."
                    image="https://dummyimage.com/600x400/000/fff"
                />
                 <BlogCard
                    title="Lorem ipsum dolor sit amet, consecte..."
                    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit..."
                    image="https://dummyimage.com/600x400/000/fff"
                />
                 <BlogCard
                    title="Lorem ipsum dolor sit amet, consecte..."
                    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit..."
                    image="https://dummyimage.com/600x400/000/fff"
                />
                   <BlogCard
                    title="Lorem ipsum dolor sit amet, consecte..."
                    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit..."
                    image="https://dummyimage.com/600x400/000/fff"
                />
                   <BlogCard
                    title="Lorem ipsum dolor sit amet, consecte..."
                    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit..."
                    image="https://dummyimage.com/600x400/000/fff"
                />
            </div>
        </div>
    )
}

export default Blog;