import {Navbar} from "@material-tailwind/react";
import {motion} from "framer-motion";

export default function Nav() {
    const navList = (
        <div className="mt-60 text-4xl uppercase">
            <a href="/"
               className="block lg:inline-block text-white hover:text-blue-300 mr-4">
                À propos
            </a>
            <a href="/Realisation"
               className="block lg:inline-block my-8 text-white hover:text-blue-300 mr-4">
                Réalisations
            </a>
            <a href="/Contact"
               className="block lg:inline-block text-white hover:text-blue-300">
                Contact
            </a>
        </div>
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
            <Navbar
                className="bg-black w-96 rounded-none border border-2 h-full border-white">
                <div className="text-center">
                    {navList}
                </div>
                <div>
                    <h6 className='absolute bottom-1 inset-x-4'>
                        Christophe Mestdagh - Copyright 2023
                    </h6>
                </div>
            </Navbar>
        </ motion.div>
    );
}

