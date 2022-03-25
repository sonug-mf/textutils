import React, { useEffect, useState } from 'react'

export default function TextUtilsPreview({ message, ...props }) {
    const [wordCount, setWordCount] = useState(0);
    const [charCount, setCharCount] = useState(0);

    useEffect(() => {
        const words = message.length ? message.split(" ").length : 0;
        const chars = message.length;
        setWordCount(words);
        setCharCount(chars);
    });

    return (
        <>
            <p>
                <span>{wordCount} Words, </span>
                <span>{charCount} Characters</span>
            </p>
            <h4>Preview:</h4>
            <p>{message ? message : "Enter Something in textarea to get preview"}</p>
        </>
    )
}
