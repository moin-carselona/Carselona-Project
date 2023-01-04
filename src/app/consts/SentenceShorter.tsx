import React from 'react'
interface Props {
    sentence: string
}
const SentenceShorter: React.FC<Props> = ({ sentence }) => {
    const words = sentence.split(' ');
    const ShortWord = words.map((word) => {
        let res = word[0]
        if (word) {
            return res
        }
    }).join("")
    return (
        <>
            {ShortWord}
        </>
    )
}
export default SentenceShorter
