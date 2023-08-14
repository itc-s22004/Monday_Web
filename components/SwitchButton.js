import ReadFile from '@/components/readFile'

export const SwitchButton = (props) => {
    const {toggleButton,switchIcon} = props;
    return(
      <div>
        <button onClick={toggleButton}>切り替え</button>
        <p>{DisplayTypeMessage(switchIcon)}</p>
      </div>
    );
  }
  
  const DisplayTypeMessage = (isList) => {
    return isList ? "a" : "b"
  }
  
export default SwitchButton