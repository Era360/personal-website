import React, { useState, useEffect } from "react";

const TypingAnimation = ({ messages }: { messages: string[] }) => {
    const [index, setIndex] = useState(0);
    const [text, setText] = useState("");
    const [blink, setBlink] = useState(false);

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prevIndex) => (prevIndex + 1) % messages.length);
            setText('')
        }, 3000);

        return () => clearInterval(interval);
    }, [messages]);

    useEffect(() => {
        const interval = setInterval(() => {
            setBlink((prevBlink) => !prevBlink);
        }, 500);

        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        let i = 0;
        const interval = setInterval(() => {
            setText((prevText) => prevText + messages[index].charAt(i));
            i++;
            if (i === messages[index].length) clearInterval(interval);
        }, 100);

        return () => clearInterval(interval);
    }, [index, messages]);

    return (
        <>
            {/* <div className="flex items-center justify-center"> */}
            <span className="text-gray-700">{text}</span>
            <span
                className={`${blink ? "opacity-100" : "opacity-0"
                    } text-xl font-bold`}
            >
                |
            </span>
            {/* </div> */}
        </>
    );
};

export default TypingAnimation;
