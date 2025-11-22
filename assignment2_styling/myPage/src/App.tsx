import './App.css'

function App() {

  const items = [
     "playmodes",
     "scenarios",
     "research",
     "sandbox",
     "media",
     "ai_profiler"
  ]

  return (
    
    <div className="min-h-screen font-bold bg-pink-100 p-5">
      <h1 className="text-5xl text-pink-800 font-bold text-center">MENU</h1>

       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        { items.map((it)=>(
          <div key={it}
          className="p-5 rounded-3xl shadow-lg bg-gradient-to-br from-pink-400 to-purple-700
          text-white flex flex-col justify-between"
          >
         
        <h2 className="text-2xl font-semibold mb-3">{it}</h2>


        <button className="
         text-xl text-black bg-amber-50 font-bold py-4 px-30 rounded-lg self-center
        ">Enter</button>
          </div>
          ))          
          }
       </div>
    </div>
        
    
  )
}

export default App
