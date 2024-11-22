import { useState, useCallback, useEffect, useRef } from 'react'
import './App.css'

function App () {
  const [length, setLength] = useState(6)
  const [password, setPassword] = useState('')
  const [number, setnumber] = useState(false)
  const [character, setcharacter] = useState(false)

  const pswd = useCallback(() => {
    let pass = ''
    let str = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789'
    if (number) str += '0123456789'
    if (character) str += '!@#$%^&*()'
    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(char)
    }
    setPassword(pass)
  },[number, character, length, setPassword])

  const ref= useRef(null)

const copy = useCallback(() => {
  ref.current.select()
  navigator.clipboard.writeText(ref.current.value)
},[password])

  useEffect(() => {
    pswd()
  }, [number, character, length, pswd])

  return (
    <>
      <div className='flex align-center justify-center py-40'>
        <div class='form w-6/12 h-40'>
          <input value={password} ref={ref} class='input' type='text' />
          <div class='btn mb-[5px]' onClick={copy}>COPY TEXT</div>
          <div className='wrap flex w-full h-full bg-white rounded-2xl overflow-hidden'>
            <div className='w-1/2 border-r border-[#8a8989] h-full flex justify-center align-middle bg-[#e07a5f]'>
              <label class='slider'>
                <input
                  type='range'
                  value={length}
                  min='6'
                  max='20'
                  class='level'
                  onChange={e => setLength(e.target.value)}
                />
                <span className='text-[#f6eca9] font-bold mr-3'>{length}</span>
              </label>
            </div>
            <div className='w-1/2 h-full flex justify-evenly items-center bg-[#e07a5f]'>
              <div class='checkbox-wrapper-46'>
                <input
                  type='checkbox'
                  id='cbx-46'
                  defaultChecked={number}
                  onChange={() => setnumber(prev => !prev)}
                  class='inp-cbx'
                />
                <label for='cbx-46' class='cbx'>
                  <span>
                    <svg viewBox='0 0 12 10' height='10px' width='12px'>
                      <polyline points='1.5 6 4.5 9 10.5 1'></polyline>
                    </svg>
                  </span>
                  <span className='font-bold uppercase text-[#f6eca9]'>
                    digit
                  </span>
                </label>
              </div>
              <div class='checkbox-wrapper-46'>
                <input
                  type='checkbox'
                  id='cbx-47'
                  class='inp-cbx'
                  defaultChecked={number}
                  onChange={() => setcharacter(prev => !prev)}
                />
                <label for='cbx-47' class='cbx'>
                  <span>
                    <svg viewBox='0 0 12 10' height='10px' width='12px'>
                      <polyline points='1.5 6 4.5 9 10.5 1'></polyline>
                    </svg>
                  </span>
                  <span className='font-bold uppercase text-[#f6eca9]'>
                    character
                  </span>
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
