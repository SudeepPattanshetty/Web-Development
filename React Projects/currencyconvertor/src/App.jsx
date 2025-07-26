import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import InputBox from "./components/InputBox";

function App() {
  const [amount, setAmount] = useState(0);
  const [from, setFrom] = useState(0);
  const [to, setTo] = useState('inr');
  const [convertedAmount, setConvertedAmount ] = useState(0);
  

  return (
    <>
      <div
        className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
        style={{
          backgroundImage: `url(https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bW9uZXklMjBiYWNrZ3JvdW5kfGVufDB8fDB8fHww)`,
        }}
      >
        <InputBox />
      </div>
    </>
  );
}

export default App;
