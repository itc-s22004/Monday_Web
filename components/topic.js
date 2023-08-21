import { useState } from "react"
import Hint from "@/components/hint"
import style from '@/styles/styles.module.css'

const Topic = () => {
  const topic_List = ["START", "好きな音楽", "好きな食べ物,", "好きなゲーム","好きな車"," 好きな場所", "これであなた達は友達"]
  const [count, setCount] = useState(0)
  return (
    <div className={style.sideBySideCenter}>
      <button
        type="button"
        onClick={() => {
          // var num = count + 1
          setCount(count + 1)
        }} className={style.topic_btn}>
        話 題
      </button>

      <div className={style.topic_pic}>
        <div className={style.txt_center}>
          {topic_List[count]}
        </div>
      </div>

      <h2>気まずくなったら ”<span>HINT</span>” 押してね</h2>

      <Hint
        number="1"
        topic_push_count={count}
      />
      <Hint
        number="2"
        topic_push_count={count}
      />
    </div>
  )
}

export default Topic
