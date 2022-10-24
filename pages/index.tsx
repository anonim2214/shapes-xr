import type { NextPage } from 'next'
import {useState} from "react";

const Home: NextPage = () => {
    const [value, setValue] = useState(50);
  return (
    <div className={"flex flex-grow"}>
        <label htmlFor="default-range" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Default
            range</label>
        <input id="default-range" type="range" value={value} onChange={(event) => setValue(Number.parseInt(event.target.value))}
               className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700"/>
    </div>
  )
}

export default Home
