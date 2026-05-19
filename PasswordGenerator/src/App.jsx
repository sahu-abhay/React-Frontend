import { useCallback, useEffect, useState } from 'react'
import { useRef } from 'react';
import './App.css'

function App() {
  const [length, setLength] = useState(8)
  const [numberAllowed, setNumberAllowed] = useState(true);
  const [characterAllowed, setCharacterAllowed] = useState(false);

  const [password, setPassword] = useState();
  const passwordRef = useRef(null);

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let number = "1234567890";
    let specialChar = "!@#$%^&*())_+";
    if(numberAllowed) str += number;
    if(characterAllowed) str += specialChar;

    for(let i = 1; i <= length; i++) {
      let index = Math.floor(Math.random() * str.length);
      pass += str.charAt(index);
    }
    setPassword(pass);

  }, [length, numberAllowed, characterAllowed, setPassword]);
  
  const copyPasswordToClipBoard = () => {
    passwordRef.current?.select()
    window.navigator.clipboard.writeText(password);
  }
  useEffect(passwordGenerator, [length, numberAllowed, characterAllowed, passwordGenerator])
  return (
    <>
      <div className='w-full max-w-md shadow-md rounded-lg px-4 my-8 bg-gray-700 text-orange-500'> 
        <h1 className='text-white text-center'>Password Generator</h1>
        <div className='flex shadow rounded-lg overflow-hidden mb-4 bg-white'>
          <input type="text"
          value={password} 
          className='outline-none w-full py-1 px-3'
          placeholder='Password'
          readOnly
          ref={passwordRef}
          />
        <button className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0 cursor-pointer' 
        onClick={copyPasswordToClipBoard}>
          copy
        </button>
        </div>

        <div className='flex text-sm gap-x-2'>
          <div className='flex items-center gap-x-1'>
            <input type="range" 
            min ={1}
            max = {50}
            value = {length}
            onChange={(e) => {setLength(e.target.value)}}
            className='cursor-pointer'
            />
            <label>Length : {length}</label>
          </div>
          <div className='flex item-center gap-x-1'>
            <input 
            type="checkbox"
            id='numberInput'
            defaultChecked = {numberAllowed}
            onChange={() => {
              setNumberAllowed((prev) => !prev)
            }}
             />
             <label htmlFor="numberInput"> Numbers</label>
          </div>
          <div className='flex item-center gap-x-1'>
            <input 
            type="checkbox"
            id='characterInput'
            defaultChecked = {characterAllowed}
            onChange={() => {
              setCharacterAllowed((prev) => !prev)
            }}
             />
             <label htmlFor="characterInput">Character</label>
          </div>
        </div>
      </div>
      
    </>
  )
}

export default App
