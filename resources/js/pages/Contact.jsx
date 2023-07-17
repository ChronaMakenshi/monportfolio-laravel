import Formulaire from "../components/Formulaire";

function Contact() {
    return (
        <div className="text-center  flex mx-auto items-center">
            <div>
                <Formulaire/>
                <h2 className="my-5"><a className="text-blue-300 text-2xl"
                                    href="https://github.com/ChronaMakenshi">
                    <span className="text-white">&lt;</span>Mon GitHub<span className="text-white">&gt;</span></a></h2>
                <h2 className=""><a className="text-blue-300 text-2xl"
                                    href="https://www.linkedin.com/in/christophe-mestdagh-3a6002217/">
                    <span className="text-white">&lt;</span>Mon LinkedIn<span className="text-white">&gt;</span></a>
                </h2>
            </div>
        </div>
    );
}

export default Contact;