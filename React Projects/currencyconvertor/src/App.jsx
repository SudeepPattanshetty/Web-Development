import { useState } from "react";
import "./App.css";
import InputBox from "./components/InputBox";
import useCurrencyInfo from "./hooks/useCurrencyInfo";

function App() {
  const [amount, setAmount] = useState(0);
  const [from, setFrom] = useState('usd');
  const [to, setTo] = useState('inr');
  const [convertedAmount, setConvertedAmount ] = useState(0);
  
  const currencyInfo = useCurrencyInfo(from);
  const options = Object.keys(currencyInfo);
  console.log(options);

  const swap = () => {
    setFrom(to),
    setTo(from),
    setConvertedAmount(amount),
    setAmount(convertedAmount)
  }

  const convert = () =>  {
    setConvertedAmount(amount * currencyInfo[to])
  }

  return (
    <>
      <div
        className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
        style={{
          backgroundImage: `url(https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bW9uZXklMjBiYWNrZ3JvdW5kfGVufDB8fDB8fHww)`,
        }}
      >
        <div className="w-full">
          <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
            <form onSubmit={(e) => {
              e.preventDefault()
              convert()
            }}>
              <div className="w-full mb-1">
                <InputBox 
                label="From"
                amount={amount}
                currencyOptions={options}
                onCurrencyChange={(currency) => setFrom(currency)}
                onAmountChange={(amount) => setAmount(amount)}
                selectedCurrency={from}
                 />
              </div>
              <div className="relative w-full h-0.5">
                <button onClick={swap}
                className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                >Swap</button>
              </div>
              <div className="w-full mb-1">
                <InputBox 
                label="To"
                amount={convertedAmount}
                currencyOptions={options}
                amountDisabled
                onCurrencyChange={(currency) => setTo(currency)}
                onAmountChange={(amount) => setConvertedAmount(amount)}
                selectedCurrency={to}
                 />
              </div>
              <button type="submit" className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg">Convert {from.toUpperCase()} to {to.toUpperCase()}</button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
