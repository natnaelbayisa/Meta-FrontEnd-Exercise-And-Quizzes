import { useEffect } from "react";

export default function UseConsoleLog(varName) {
  useEffect(() => {
    console.log(varName);
  }, [varName]);
}
