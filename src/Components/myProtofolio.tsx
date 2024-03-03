import Image from "next/image";
import Link from "next/link";
const MyPortofolio = () => {
    return (
        <div className="mt-24 2xl:mt-44" id="portofolio">
            <div className="flex justify-center ">
                <h1 className="text-3xl 2xl:text-6xl font-bold name-outline">My Portofolio</h1>
            </div>
            <div className="mt-11 px-5 sm:px-0 md:mt-24 flex flex-col items-center md:flex-row justify-between gap-10">
                <Link href={"https://rajaalamraya.com/"}>
                    <Image src={'/porto-1.png'} data-aos="fade-up"
                        data-aos-anchor-placement="bottom-bottom" alt="porto-1" height={600} width={800} className="h-[13rem] min-[400px]:h-[15rem] min-[400px]:w-[25rem] sm:w-[30rem] md:h-[16rem] md:w-[35rem] lg:h-[20rem] lg:w-[44rem] xl:h-[23rem] xl:w-[50rem] 2xl:h-[30rem] 2xl:w-[60rem] object-cover rounded-xl shadow-2xl brightness-90 hover:brightness-100" />
                </Link>
                <Link href={"https://github.com/newbiners/Quranku"}>
                    <Image src={'/quranku.jpg'} data-aos="fade-up"
                        data-aos-anchor-placement="bottom-bottom" alt="porto-1" height={1600} width={1800} className="h-[13rem] min-[400px]:h-[15rem] min-[400px]:w-[25rem] sm:w-[30rem] md:h-[16rem] md:w-[30rem] lg:w-[35rem] lg:h-[20rem] xl:h-[23rem] xl:w-[40rem] 2xl:h-[30rem] 2xl:w-[50rem] object-cover rounded-xl shadow-2xl brightness-90 hover:brightness-100" />
                </Link>
            </div>
            <div className="mt-9 px-5 sm:px-0 md:mt-14 flex flex-col items-center md:flex-row justify-between gap-10">
            <Link href={"https://github.com/newbiners/mobileKomiknime"}>
                    <Image src={'/komikku.jpg'} data-aos="fade-up"
                        data-aos-anchor-placement="bottom-bottom" alt="porto-1" height={1600} width={1800} className="h-[13rem] min-[400px]:h-[15rem] min-[400px]:w-[25rem] sm:w-[30rem] md:h-[16rem] md:w-[30rem] lg:w-[35rem] lg:h-[20rem] xl:h-[23rem] xl:w-[40rem] 2xl:h-[30rem] 2xl:w-[50rem] object-cover rounded-xl shadow-2xl brightness-90 hover:brightness-100" />
                </Link>
                <Link href={"https://greek-kingdom.netlify.app/"}>
                    <Image src={'/3d-website.png'} data-aos="fade-up"
                        data-aos-anchor-placement="bottom-bottom" alt="3d website" height={600} width={800} className="h-[13rem] min-[400px]:h-[15rem] min-[400px]:w-[25rem] sm:w-[30rem] md:h-[16rem] md:w-[35rem] lg:h-[20rem] lg:w-[44rem] xl:h-[23rem] xl:w-[50rem] 2xl:h-[30rem] 2xl:w-[60rem] object-cover rounded-xl shadow-2xl brightness-90 hover:brightness-100" />
                </Link>
            </div>
        </div>
    )
}

export default MyPortofolio;