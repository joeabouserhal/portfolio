import React from "react";

const ContactMe = () => {
    return (
        <div className="justify-center content-center items-center" id="contactMe">
            <div className="title justify-center">
                <h1 className="title text-3xl font-mono text-center">Contact Me</h1>
            </div>
            <form className="flex flex-col gap-y-5 pt-16 px-20 justify-center">
                <input type="text" className="rounded-xl py-1 w-auto border border-slate-300 h-10 p-3 bg-transparent backdrop-blur-md font-mono" placeholder="Your email"></input>
                <textarea className="rounded-xl py-1 w-auto border border-slate-300 p-3 h-auto bg-transparent backdrop-blur-md font-mono resize-none" placeholder="Your message" rows='3'></textarea>
                <button type="submit" className="rounded-xl bg-slate-300 p-2 px-5 w-max-w-md text-black font-mono justify-center self-center">Send</button>
            </form>
        </div>
    )
}

export default ContactMe;
