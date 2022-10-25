import Link from "next/link";


export default function Header() {
    return (
        <nav className="bg-blue-600 mb-10 border-gray-200 px-2 sm:px-4 py-2.5 rounded dark:bg-gray-900">
            <div className="container flex flex-wrap justify-between items-center mx-auto">
                <div className="flex items-center">
                    <img src="https://uploads-ssl.webflow.com/615dc84364c5917b852e46b2/61704776daefd83c892eb253_Logo_2.svg" className="mr-3 h-6 sm:h-9"
                         alt="Flowbite Logo"/>
                </div>
                <div className="hidden w-full md:block md:w-auto" id="navbar-default">
                    <ul className="flex flex-col p-4 mt-4 bg-gray-50 rounded-lg border border-gray-100 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                        <li>
                            <Link href="/"
                               className="block py-2 pr-4 pl-3 text-gray-700 bg-blue-700 rounded md:bg-transparent  md:p-0 dark:text-white"
                               >Home</Link>
                        </li>
                        <li>
                            <Link href="/admin"
                               className="block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Admin</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}