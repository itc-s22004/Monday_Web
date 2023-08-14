import React, { useEffect, useState } from "react";
import SwitchButton from "./SwitchButton";

export const Topic = () =>{

  //stateの定義
  const [switchIcon,setSwitchIcon] = useState(true);

  const toggleButton = () => {
    setSwitchIcon(!switchIcon);
  }

  return (
    <>
      <SwitchButton toggleButton={toggleButton} switchIcon={switchIcon}/>
    </>
  );
};

export default Topic