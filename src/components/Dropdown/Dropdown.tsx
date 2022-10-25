import {useState} from "react";

export default function Dropdown({selected, setSelected, tags = []}) {
    const [isShow, setIsShow] = useState(false);
    const handleChange = (el, e) => {
        if (e.target.checked) {
            setSelected([...selected, el]);
        } else {
            setSelected(selected.filter(v => v !== el))
        }
    }
    return (
        <>
            <button id="dropdownHelperButton" data-dropdown-toggle="dropdownHelper" onClick={() => setIsShow(!isShow)}
                    className="flex-shrink-0 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    type="button">Dropdown checkbox <svg className="ml-2 w-4 h-4" aria-hidden="true" fill="none"
                                                         stroke="currentColor" viewBox="0 0 24 24"
                                                         xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
            </svg></button>

            {isShow && (<div id="dropdownHelper" style={{top: 55}}
                  className="absolute z-10 w-60 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600">
                <ul className="p-3 space-y-1 text-sm text-gray-700 dark:text-gray-200"
                    aria-labelledby="dropdownHelperButton">
                    <li>
                        {tags.map(el =>(<div className="flex p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-600" key={el}>
                            <div className="flex items-center h-5">
                                <input id={`checkbox-${el}`} aria-describedby="helper-checkbox-text-1" type="checkbox" onChange={(e) => handleChange(el, e)}
                                       value=""
                                       className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"/>
                            </div>
                            <div className="ml-2 text-sm">
                                <label htmlFor={`checkbox-${el}`}
                                       className="font-medium text-gray-900 dark:text-gray-300">
                                    <div>{el}</div>
                                </label>
                            </div>
                        </div>))}
                    </li>
                </ul>
            </div>)}
        </>
    )
}