import { useState } from "react"

const Hint = ({ number, topic_push_count }) => {
    const [count, setCount] = useState(0)
    const topic_hint = [" ", "hint1", "hint2", "hint3","hint4", "hint5", "hint6", "hint7", "hint8", "hint9", "hint10"]
    return (
        <>
            <button
                onClick={() => {
                    topic_push_count == Number(number) ? setCount(count + 1) : setCount(count + 2)
                    // setCount(count + 1)
                }
                }>
                Hint {number}
            </button>
            <div>
                {topic_hint[count]}
                {/* number : {number} */}
                {/* topic_push_count : {topic_push_count} */}
            </div>
        </>
    )
}

export default Hint