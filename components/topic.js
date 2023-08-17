import { useState } from "react"
import Hint from "@/components/hint"
import style from '@/styles/styles.module.css'

const Topic = () => {
  const topic_List = ["START", "aaaa", "bbbb", "cccc", "dddd", "eeeee", "ffffff", "これであなた達は友達"]
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
      <Hint
        number="1"
        topic_push_count={count}
      />
      <Hint
        number="11"
        topic_push_count={count}
      />
      {/* <Hint
        number="3"
        topic_push_count={count}
      /> */}
    </div>
  )
}

export default Topic



// import React, { useEffect, useState } from "react";
// import SwitchButton from "./SwitchButton";

// export const Topic = () =>{

//   //stateの定義
//   const [switchIcon,setSwitchIcon] = useState(0);

//   const toggleButton = () => {
//     setSwitchIcon(!switchIcon);
//   }

//   return (
//     <>
//       <SwitchButton toggleButton={toggleButton} switchIcon={switchIcon}/>
//     </>
//   );
// };

// export default Topic