import {destroyCookie} from "nookies";

export default function Preview() {
    const handleTurnOff = () => {
        destroyCookie(null, 'preview', {path: '/'});
        window.location.pathname = '/admin';
    }
    return (
        <div className={"p-2 items-center bg-red-600 rounded-md mb-5 text-white flex justify-between"}>
            <h1 >This is preview</h1>
            <button onClick={handleTurnOff} className={"bg-gray-600 p-2 rounded-md"}>Turn off</button>
        </div>
    )
}