 import React from "react";
import { FiMail } from "react-icons/fi"
import { BsInstagram } from "react-icons/bs"
import { motion } from 'framer-motion'
import { Bounce } from 'react-reveal'

const ContactMe = () => {
    return (
        <div id="contactMe">
            <div className="title">
                <h1 className="title text-3xl">Contact Me</h1>
            </div>
            <Bounce>
                <div className="flex pt-16 justify-center gap-20">
                    <div>
                        <p className="text-md p-5 lg:w-64">Send me an Email</p>
                        <a className="flex align-middle justify-center" target="_blank" href="mailto:joeabouserhal77777@gmail.com">
                            <motion.a
                                whileHover={{ scale: 1.2 }}>
                                <FiMail size="2.5rem" />
                            </motion.a>
                        </a>
                    </div>
                    <div>
                        <p className="text-md p-5 lg:w-64">Talk to me on Instagram</p>
                        <a className="flex align-middle justify-center" target="_blank" href="https://www.instagram.com/joe.abou.serhal/">
                            <motion.div whileHover={{ scale: 1.2 }}>

                                <BsInstagram size="2rem" />
                            </motion.div>
                        </a>
                    </div>
                </div>
            </Bounce>
        </div>
    )
}

export default ContactMe;
