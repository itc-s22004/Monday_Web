import { useState } from "react"
import style from "@/styles/styles.module.css"

const Hint = ({ number, topic_push_count }) => {
    const [count, setCount] = useState(0)
    const topic_hint = [" ", "hint1", "hint2", "hint3", "hint4", "hint5", "hint6", "hint7", "hint8", "hint9", "hint10"]
    // const hin = (topic_push_count * 2) - 1
    return (
        <>
            <button
                onClick={() => {
                    // topic_push_count == Number(number) ? setCount(count + 1) : setCount(count + 2)
                    setCount(count + 1)
                }} className={style.hint_btn}>
                Hint {number}
            </button>
            <div>
                {
                    (() => {
                        if (number == "1") {
                            if (topic_push_count == count) {
                                return (
                                    topic_hint[(count * 2) - 1]
                                )
                            }
                        }
                        else {
                            if (topic_push_count == count) {
                                return (
                                    topic_hint[count * 2]
                                )
                            }
                        }
                    })()
                }
            </div>
        </>
    )
}

export default Hint