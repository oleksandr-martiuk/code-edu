import { useEffect, useState } from "react";
import "./styles.css";

function ProgressBar() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    console.log({ progress });
    if (progress < 100) {
      setTimeout(() => {
        setProgress(progress + 1);
      }, 300);
    }
  }, [progress]);

  return (
    <div>
      <div
        style={{
          height: "15px",
          width: `${progress}%`,
          backgroundColor: "red"
        }}
      ></div>
    </div>
  );
}

export default function App() {
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <ProgressBar />
    </div>
  );
}
