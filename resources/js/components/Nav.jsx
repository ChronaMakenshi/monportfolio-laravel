import {motion} from "framer-motion";
import {Link} from "react-router-dom";

export default function Nav() {
    const navList = (
        <ul className="mt-60 text-4xl font-semibold uppercase">
            <li>
                <Link to="/"
                   className="block lg:inline-block text-white text-4xl hover:text-blue-300 mr-4">
                    À propos
                </Link>
            </li>
            <li>
                <Link to="/Realisation"
                   className="block lg:inline-block my-8 text-white text-4xl hover:text-blue-300 mr-4">
                    Réalisations
                </Link>
            </li>
            <li>
                <a href="/Contact"
                   className="block lg:inline-block text-white text-4xl hover:text-blue-300">
                    Contact
                </a>
            </li>
        </ul>
    );

    return (
        <motion.div
            initial={{x: -550}}
            animate={{x: 0}}
            transition={{
                type: "spring",
                stiffness: 480,
                damping: 200
            }}
        >
            <nav
                className="bg-black w-96 rounded-none border h-screen border-2 border-white">
                <div className="text-center">
                    {navList}
                </div>
                <div>
                    <h6 className='absolute bottom-1 text-white inset-x-4'>
                        Christophe Mestdagh - Copyright 2023
                    </h6>
                </div>
            </nav>
        </ motion.div>
    );
}

