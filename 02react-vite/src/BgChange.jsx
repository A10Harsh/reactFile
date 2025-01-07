import {useState} from "react"
function BgChange() {

    const [color, setcolor] = useState("black ")
    const blue=()=>{
        setcolor("blue")
    }
    
return(
<>
<div className="w-full h-screen duration-200" style={{backgroundColor:color}}>
<div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
    <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white">
        <button  onClick={()=> setcolor("red")} className="outline-none px-4 py-1 rounded-full text-red-600 shadow-lg">red</button>
        <button onClick={()=> setcolor("green")} className="outline-none px-4 py-1 rounded-full text-green-500 shadow-lg">green</button>
        <button onClick={()=> setcolor("orange")} className="outline-none px-4 py-1 rounded-full text-orange-400 shadow-lg">sky</button>
        <button onClick={()=> setcolor("black")}className="outline-none px-4 py-1 rounded-full text-black shadow-lg">black</button>
        <button  onClick={blue} className="outline-none px-4 py-1 rounded-full text-blue-700 shadow-lg">blue</button>

    </div>
</div>
</div>
</>
)
  
}

export default BgChange
