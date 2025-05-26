import { useState } from "react"

function App() {
  const [color, setColor] = useState("olive")
  
  return (
   
    <div className="w-full h-screen duration-200" style={{backgroundColor: color }}>
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3 shadow-3xl bg-white px-3 py-2 rounded-xl">
          <button  onClick={()=>{setColor("red")}} className="bg-red-600 py-1 px-2 rounded-xl text-white">
              RED
          </button>
          <button  onClick={()=>{setColor("green")}} className="bg-green-600 py-1 px-2 rounded-xl ">
              GREEN
          </button>
          <button  onClick={()=>{setColor("yellow")}} className="bg-yellow-600 py-1 px-2 rounded-xl">
              YELLOW
          </button>
          <button  onClick={()=>{setColor("blue")}} className="bg-blue-600 py-1 px-2 rounded-xl text-white">
              BLUE
          </button>
          <button  onClick={()=>{setColor("gray")}} className="bg-gray-600 py-1 px-2 rounded-xl text-white">
              GRAY
          </button>
          <button  onClick={()=>{setColor("skyblue")}} className="bg-sky-400 py-1 px-2 rounded-xl">
              SKY BLUE
          </button>
          <button  onClick={()=>{setColor("purple")}} className="bg-purple-600 py-1 px-2 rounded-xl text-white">
              PURPLE
          </button>
          <button  onClick={()=>{setColor("orange")}} className="bg-orange-600 py-1 px-2 rounded-xl">
              ORANGE
          </button>
          <button  onClick={()=>{setColor("brown")}} className="bg-yellow-900 py-1 px-2 rounded-xl text-white">
              BROWN
          </button>
          <button  onClick={()=>{setColor("pink")}} className="bg-pink-600 py-1 px-2 rounded-xl text-white">
              PINK
          </button>
        </div>
      </div>
    </div>
  
  )
}

export default App
