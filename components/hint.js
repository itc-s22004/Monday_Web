import { useState } from "react"
import style from "@/styles/styles.module.css"

const Hint = ({ number, topic_push_count }) => {
    const [count, setCount] = useState(0)
    const topic_hint = [" ", "好きなジャンル", "好きな楽器", "好きな国の料理", "好きな料理の種類", "好きなジャンル", "おすすめのゲーム", "好きな車種", "好きなメーカー
    ", "場所の種類", "場所の特徴"]
    return (
        <>
            <button
                onClick={() => {
                    setCount(topic_push_count)
                }} className={style.btn_size}>
                Hint {number}
            </button>
            <div className={style.hint_wth}>
                {(() => {
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
