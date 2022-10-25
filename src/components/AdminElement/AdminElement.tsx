import {useState} from "react";


export default function AdminElement({name, price, description, image, order, tags, onRemove, onEdit}) {
    return (<div style={{backgroundColor: 'gray', padding: 10, marginTop: 20}} className={"flex w-full rounded-md"}>
        <p style={{flexBasis: '5%'}} className={"text-center"}>{order}</p>
        <p style={{flexBasis: '18%'}} className={"text-center"}>{name}</p>
        <p style={{flexBasis: '18%'}} className={"text-center"}>{price}</p>
        <p style={{flexBasis: '18%'}} className={"text-center"}>{description}</p>
        <p style={{flexBasis: '18%', backgroundRepeat: 'no-repeat', backgroundSize: 'contain', backgroundPosition: 'center' , backgroundImage: `url("${image}")`}} className={"text-center"}/>
        <p style={{flexBasis: '18%'}} className={"text-center"}>{tags}</p>
        <button onClick={() => onEdit(name, price, image, order)}>
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                 xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                      d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"></path>
            </svg>
        </button>
        <button onClick={onRemove}>
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                 xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                      d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path>
            </svg>
        </button>
    </div>)
}