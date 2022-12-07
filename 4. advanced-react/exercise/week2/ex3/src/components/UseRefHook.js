import { useRef } from "react";

export default function UseRefHook() {
  const formInputRef = useRef(null);

  const focusInput = () => {
    formInputRef.current.focus();
  };

  return (
    <div>
      <h1>Using useRef for underlying DOM</h1>
      <input ref={formInputRef} type="text" />
      <button onClick={focusInput}>Focus input</button>
    </div>
  );
}
