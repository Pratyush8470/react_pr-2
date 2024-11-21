import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="flex align-center justify-center py-40">
        <div class="form w-6/12 h-40">
          <input placeholder="Email Address" class="input" type="text" />
          <div class="btn mb-[5px]">COPY TEXT</div>
          <div className="wrap flex w-full h-full bg-white rounded-2xl overflow-hidden">
            <div className="w-1/2 border-r border-[#8a8989] h-full flex justify-center align-middle bg-[#e07a5f]">
              <label class="slider">
                <input type="range" min="6" max="100" class="level" />
              </label>
            </div>
            <div className="w-1/2 h-full flex justify-evenly align-middle bg-[#e07a5f]">
              <label
                for="hr"
                class="flex flex-row items-center gap-2.5 cursor-pointer dark:text-white light:text-black"
              >
                <input id="hr" type="checkbox" class="peer hidden" />
                <div
                  for="hr"
                  class="h-5 w-5 flex rounded-md border border-[#a2a1a833] light:bg-[#e8e8e8] dark:bg-[#212121] peer-checked:bg-[#f7f7f7] transition"
                >
                  <svg
                    fill="none"
                    viewBox="0 0 24 24"
                    class="w-5 h-5 light:stroke-[#e8e8e8] dark:stroke-[#212121]"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M4 12.6111L8.92308 17.5L20 6.5"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>
                  </svg>
                </div>
                <span className='text-[#f6eca9] font-bold'>CHARACTERS</span>
              </label>
              <label
                for="hr"
                class="flex flex-row items-center gap-2.5 cursor-pointer dark:text-white light:text-black"
              >
                <input id="hr" type="checkbox" class="peer hidden" />
                <div
                  for="hr"
                  class="h-5 w-5 flex rounded-md border border-[#a2a1a833] light:bg-[#e8e8e8] dark:bg-[#212121] peer-checked:bg-[#f7f7f7] transition"
                >
                  <svg
                    fill="none"
                    viewBox="0 0 24 24"
                    class="w-5 h-5 light:stroke-[#e8e8e8] dark:stroke-[#212121]"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M4 12.6111L8.92308 17.5L20 6.5"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>
                  </svg>
                </div>
                <span className='text-[#f6eca9] font-bold'>DIGTS</span>
              </label>

            </div>
          </div>
        </div>
      </div>

    </>
  )
}

export default App
