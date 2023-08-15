import ReadFile from '@/components/readFile'

export const SwitchButton = (props) => {
  const { toggleButton, switchIcon } = props;
  return (
    <div>
      <button onClick={toggleButton}>話題</button>
      <p>{DisplayTypeMessage(switchIcon)}</p>
    </div>
  );
}

const DisplayTypeMessage = (isList) => {
  return (
    (function () {
      const txt_list = ["aaaaaa", "bbbbbb", "ccccccc", "dddddd"];
      // return isList ? txt_list[0] : txt_list[1]
      
    }())
  )
  // return isList ? "a" : "b"
}

export default SwitchButton


// for (let i = 0; i < txt_list.length; i++) {
      //   return txt_list[i]
      // }
