import Link from "next/link";
import { Separator } from "./ui/separator";

const dataFooter = [
    {
        id: 1,
        name: "About",
        href: "/about",
    },
    {
        id: 2,
        name: "Contact",
        href: "#",
    },
    {
        id: 3,
        name: "Terms",
        href: "#",
    },
];


const Footer = () => {
    return (
        <footer className="2xl:px-0 px-5 mt-4">
            <div className="w-full max-w-screen-xl mx-auto py-4 md:py-8">
                <div className="sm:flex sm:items-center sm:justify-between">
                    <p className="font-bold">
                        Mateina
                    </p>
                    <ul className="flex flex-wrap items-center text-sm font-medium text-gray-500 dark:text-gray-400">
                        {dataFooter.map((item) => (
                            <li key={item.id} >
                                <Link href={item.href} className="hover:underline me-4 md:me-6">{item.name}</Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
            <Separator className="mb-6 border-gray-200 sm:mx-auto dark:border-gray-700" />
            <span className="block pb-5 text-sm text-gray-500 sm:text-center dark:text-gray-400">
                &copy; 2024 
                <Link href="#"> Mateina </Link>
                All rights reserved.
            </span>
        </footer>
    );
}

export default Footer;