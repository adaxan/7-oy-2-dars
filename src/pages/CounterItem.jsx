import React from "react";

function CounterItem({ value, onIncrement, onDecrement, onReset }) {
  return (
    <div className="bg-white shadow-md rounded-lg p-4 text-center">
      <h3 className="text-lg font-medium text-gray-800 mb-4">Counter</h3>
      <p className="text-2xl font-bold text-gray-700 mb-4">{value}</p>
      <div className="flex justify-center space-x-2">
        <button
          onClick={onIncrement}
          className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600"
        >
          Increment
        </button>
        <button
          onClick={onDecrement}
          className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600"
        >
          Decrement
        </button>
        <button
          onClick={onReset}
          className="bg-gray-500 text-white px-4 py-2 rounded-lg hover:bg-gray-600"
        >
          Reset
        </button>
      </div>
    </div>
  );
}

export default CounterItem;
