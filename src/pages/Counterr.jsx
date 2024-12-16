import React, { useState } from "react";
import CounterItem from "./CounterItem";

function Counterr() {
  const [counters, setCounters] = useState([0, 0, 0]);

  function handleIncrement(index) {
    const updatedCounters = counters.map((value, i) =>
      i == index ? value + 1 : value
    );
    setCounters(updatedCounters);
  }

  function handleDecrement(index) {
    const updatedCounters = counters.map((value, i) =>
      i == index ? value - 1 : value
    );
    setCounters(updatedCounters);
  }

  function handleReset(index) {
    const updatedCounters = counters.map((value, i) =>
      i == index ? 0 : value
    );
    setCounters(updatedCounters);
  }

  function getTotal() {
    return counters.reduce((total, value) => total + value, 0);
  }

  return (
    <div className="container mx-auto min-h-screen bg-gray-100 p-6">
      <h1 className="text-2xl font-bold text-gray-800 mb-6">
        Interactive Counter Dashboard
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {counters.map((value, index) => (
          <CounterItem
            key={index}
            value={value}
            onIncrement={() => handleIncrement(index)}
            onDecrement={() => handleDecrement(index)}
            onReset={() => handleReset(index)}
          />
        ))}
      </div>

      <div className="mt-6 text-center">
        <h2 className="text-xl font-semibold text-gray-700">
          Total: {getTotal()}
        </h2>
      </div>
    </div>
  );
}

export default Counterr;