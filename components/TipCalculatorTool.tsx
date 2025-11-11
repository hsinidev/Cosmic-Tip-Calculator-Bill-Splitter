import React, { useState, useMemo } from 'react';
import { calculateTotals } from '../utils/TipMath';
import { RoundingOption } from '../types';

const TipCalculatorTool: React.FC = () => {
  const [bill, setBill] = useState<string>('');
  const [tipPercent, setTipPercent] = useState<number>(18);
  const [customTip, setCustomTip] = useState<string>('');
  const [people, setPeople] = useState<string>('1');
  const [rounding, setRounding] = useState<RoundingOption>(RoundingOption.NONE);

  const handleBillChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setBill(e.target.value.replace(/[^0-9.]/g, ''));
  };

  const handlePeopleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPeople(e.target.value.replace(/[^0-9]/g, ''));
  };
  
  const handleCustomTipChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCustomTip(e.target.value.replace(/[^0-9.]/g, ''));
    setTipPercent(0);
  };
  
  const selectTip = (percentage: number) => {
    setTipPercent(percentage);
    setCustomTip('');
  };

  const currentTipPercent = customTip ? parseFloat(customTip) || 0 : tipPercent;

  const { tipAmount, totalBill, perPerson } = useMemo(() => {
    const billNum = parseFloat(bill) || 0;
    const peopleNum = parseInt(people, 10) || 1;
    return calculateTotals({ bill: billNum, tipPercent: currentTipPercent, people: peopleNum, rounding });
  }, [bill, currentTipPercent, people, rounding]);
  
  const formatCurrency = (value: number) => {
      return isNaN(value) || !isFinite(value) ? '0.00' : value.toFixed(2);
  };

  return (
    <div className="w-full max-w-4xl bg-black bg-opacity-40 backdrop-blur-lg rounded-2xl shadow-2xl border border-gray-700 p-6 md:p-10">
      <div className="text-center mb-8">
        <h1 className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">Tip & Bill Splitter</h1>
        <p className="text-gray-400 mt-2">Welcome! Let's get the numbers right, stress-free.</p>
      </div>
      <div className="grid md:grid-cols-2 gap-8 md:gap-12">
        {/* Left Side - Inputs */}
        <div className="space-y-6">
          <div>
            <label className="block text-lg font-medium text-gray-300 mb-2">Bill Amount</label>
            <div className="relative">
              <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-400 text-xl">$</span>
              <input 
                type="text"
                inputMode="decimal"
                value={bill}
                onChange={handleBillChange}
                placeholder="0.00"
                className="w-full bg-gray-900 border border-gray-600 rounded-lg py-3 pl-8 pr-4 text-2xl font-bold focus:ring-purple-500 focus:border-purple-500 transition"
              />
            </div>
          </div>
          
          <div>
            <label className="block text-lg font-medium text-gray-300 mb-2">Select Tip %</label>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
              {[15, 18, 20].map(p => (
                <button key={p} onClick={() => selectTip(p)} className={`py-3 px-4 rounded-lg font-bold text-lg transition ${tipPercent === p && !customTip ? 'bg-purple-600 text-white' : 'bg-gray-700 hover:bg-gray-600'}`}>{p}%</button>
              ))}
              <input 
                type="text"
                inputMode="decimal"
                value={customTip}
                onChange={handleCustomTipChange}
                placeholder="Custom"
                className={`w-full bg-gray-900 border text-center rounded-lg py-3 px-2 font-bold text-lg transition ${customTip ? 'border-purple-500 ring-2 ring-purple-500' : 'border-gray-600'}`}
              />
            </div>
          </div>

          <div>
            <label className="block text-lg font-medium text-gray-300 mb-2">Number of People</label>
            <input 
              type="text"
              inputMode="numeric"
              value={people}
              onChange={handlePeopleChange}
              className="w-full bg-gray-900 border border-gray-600 rounded-lg py-3 px-4 text-2xl font-bold focus:ring-purple-500 focus:border-purple-500 transition"
            />
          </div>

          <div>
            <label className="block text-lg font-medium text-gray-300 mb-2">Rounding</label>
            <div className="flex space-x-2">
                <button onClick={() => setRounding(RoundingOption.NONE)} className={`flex-1 py-3 px-4 rounded-lg font-bold transition ${rounding === RoundingOption.NONE ? 'bg-purple-600 text-white' : 'bg-gray-700 hover:bg-gray-600'}`}>None</button>
                <button onClick={() => setRounding(RoundingOption.UP)} className={`flex-1 py-3 px-4 rounded-lg font-bold transition ${rounding === RoundingOption.UP ? 'bg-purple-600 text-white' : 'bg-gray-700 hover:bg-gray-600'}`}>Round Up</button>
                <button onClick={() => setRounding(RoundingOption.DOWN)} className={`flex-1 py-3 px-4 rounded-lg font-bold transition ${rounding === RoundingOption.DOWN ? 'bg-purple-600 text-white' : 'bg-gray-700 hover:bg-gray-600'}`}>Round Down</button>
            </div>
          </div>
        </div>

        {/* Right Side - Outputs */}
        <div className="bg-gradient-to-br from-purple-800 to-indigo-900 rounded-xl p-6 flex flex-col justify-between space-y-6">
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <span className="text-lg text-purple-200">Tip Amount</span>
              <span className="text-3xl font-bold text-white">${formatCurrency(tipAmount)}</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-lg text-purple-200">Total Bill</span>
              <span className="text-3xl font-bold text-white">${formatCurrency(totalBill)}</span>
            </div>
          </div>
          <div className="border-t-2 border-purple-500 my-4"></div>
          <div className="flex-grow flex flex-col justify-center items-center text-center">
              <span className="text-2xl text-purple-200 mb-2">Amount Per Person</span>
              <span className="text-6xl md:text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-orange-400">
                ${formatCurrency(perPerson)}
              </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TipCalculatorTool;