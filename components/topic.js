import { useState } from "react"

const Topic = () => {
  const topic_List = ["aaaa", "bbbb", "cccc", "dddd","eeeee","ffffff"]
  const [count, setCount] = useState(0)
  return (
    <div>
      <button
        type="button"
        onClick={() => {
          // var num = count + 1
          setCount(count + 1);
          // setCount(topic_List[count + 1])
        }}>
        話 題
      </button>
      Count: {topic_List[count]}
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