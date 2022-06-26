import React from "react";
import { FiMail } from "react-icons/fi"
import { BsInstagram } from "react-icons/bs"

const ContactMe = () => {
    return (
        <div id="contactMe">
            <div className="title">
                <h1 className="title text-3xl">Contact Me</h1>
            </div>
            <div className="flex pt-16 justify-center gap-20">
                <div>
                    <p className="text-md p-5 lg:w-64">Send me an Email</p>
                    <a className="flex align-middle justify-center" target="_blank" href="mailto:joeabouserhal77777@gmail.com">
                        <FiMail size="2.5rem" />
                    </a>
                </div>
                <div>
                    <p className="text-md p-5 lg:w-64">Talk to me on Instagram</p>
                    <a className="flex align-middle justify-center" target="_blank" href="https://www.instagram.com/joe.abou.serhal/">
                        <BsInstagram size="2rem" />
                    </a>
                </div>
            </div>
        </div>
    )
}

export default ContactMe;
