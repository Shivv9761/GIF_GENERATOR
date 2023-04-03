import Tag from "./components/Tag"
import Random from "./components/Random"


export default function App() {



  return (
    <div className="min-w-screen min-h-screen background realtive flex flex-col  items-center">
        <h1 className=" bg-white rounded-3xl w-11/12 text-center mt-[40px]
       px-14 py-4 text-4xl font-bold">RANDOM GIFS</h1>

       <div className="flex flex-col items-center w-11/12">
        <Random/>
        <Tag/>
       </div>
    </div>
  )

}
