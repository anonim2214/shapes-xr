
import {useEffect, useState} from "react";

export default function AdminAddElement ({onSubmit, editableElement}) {
    const [id, setId] = useState(Math.round(Math.random() * 1000000000).toString());
    const [order, setOrder] = useState(0);
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [description, setDescription] = useState('');
    const [image, setImage] = useState('');
    const [tags, setTags] = useState('');

    const clearFields = () => {
        setName('');
        setPrice('');
        setDescription('');
        setImage('');
        setOrder(0);
        setTags('');
        setId(Math.round(Math.random() * 1000000000).toString());
    }

    const handleSubmit = () => {
        onSubmit({name, price, description, image, order, tags, id});
        clearFields();
    }

    const handleCancelEdit = () => {
        onSubmit(editableElement);
        clearFields();
    }

    useEffect(() => {
        if (editableElement) {
            setId(editableElement.id);
            setName(editableElement.name);
            setPrice(editableElement.price);
            setDescription(editableElement.description);
            setImage(editableElement.image);
            setOrder(editableElement.order);
            setTags(editableElement.tags);
        }

    },[editableElement]);

    const mapper = [['order', order, setOrder],['name', name, setName], ['price', price, setPrice],
        ['description', description, setDescription], ['image', image, setImage], ['tags', tags, setTags]];
    return (
        <div>
            {mapper.map(el => (<div className="mb-6" key={el[0].toString()}>
                <label htmlFor={el[0]} className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                    {el[0]}
                </label>
                <input type="text" id={el[0]} value={el[1]} onChange={(e) => el[2](e.target.value)}
                       className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"/>
            </div>))}
            <button type="submit" onClick={handleSubmit}
                    className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full  px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                {editableElement ? 'Modify' : 'Add'}
            </button>
            {editableElement && (<button type="submit" onClick={handleCancelEdit}
                     className="text-white w-full mt-2 bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Cancel
            </button>)}
        </div>
    )
}