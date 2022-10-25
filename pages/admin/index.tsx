import type { NextPage } from 'next'
import {useEffect, useState} from "react";
import AdminElement from "../../src/components/AdminElement/AdminElement";
import AdminAddElement from "../../src/components/AdminAddElement/AdminAddElement";
import nookies, {setCookie, destroyCookie} from 'nookies';

const objs = [
    {
        order: 1,
        id: '21ewaedas',
        name: 'Sci-Fi Modular Gun Pack',
        price: '3$',
        description: 'A set of modular parts and assembled Sci-Fi Guns. All in FBX + GLB formats, free to use in personal and commercial projects.',
        image: 'https://static.poly.pizza/listimg/62dzPEu3cfqH2Dp3NioF.webp',
        tags: 'tag1 tag2 tag3 tag4',
    },
    {
        id: 'fafa',
        order: 2,
        name: 'Crystal Pack',
        price: '2$',
        description: 'A set of 28 lowpoly crystal pack with a blue and a purple gradient ready to be used in your game',
        image: 'https://static.poly.pizza/listimg/uy5gggdtQZbsnXfKwY7T.webp',
        tags: 'tag2',
    },
    {
        id: 'fafdawsa',
        order: 3,
        name: 'Ultimate Guns Pack',
        price: '25$',
        description: 'This pack contains 25 different gun models. All in FBX + GLB formats, ready to use in personal and commercial projects.\n',
        image: 'https://static.poly.pizza/listimg/CkWIv7GwRfo6uopKE33h.webp',
        tags: 'tag3',
    },
    {
        id: 'fafdawsa321',
        order: 3,
        name: 'Signs pack',
        price: '5$',
        description: 'The packages contains 17 models of wood signs',
        image: 'https://static.poly.pizza/listimg/CkWIv7GwRfo6uopKE33h.webp',
        tags: 'tag34',
    }
]

const Home: NextPage = ({ initData, cookies }) => {
    const [objects, setObjects] = useState(initData);
    const [editableElement, setEditableElement] = useState(null);
    const [isUnsaved, setIsUnsaved] = useState(!!cookies['init_m'])

    useEffect(() => {
        if (isUnsaved) {
            setCookie(null, 'init_m', JSON.stringify(objects), { path: '/' });
        }
    }, [objects]);

    const handleAdd = (e) => {
        const order = Number.parseInt(e.order);
        setObjects([...objects, {...e, order: isNaN(order) ? 1 : order}]);
        setEditableElement(null);
        setIsUnsaved(true);
    }
    const handleRemove = (id) => {
        setObjects(objects.filter(el => el.id !== id));
        setIsUnsaved(true);

    }

    const handleEdit = (id) => {
        const newObjects = [ ...objects ];
        const index = objects.findIndex(el => el.id === id);
        const element = newObjects.splice(index, 1)[0];
        setEditableElement(element);
        setObjects(newObjects);
    }

    const setInitData = () => {
        setCookie(null, 'init', JSON.stringify(objs), { path: '/' });
        location.reload();
    }

    const handleSaveAllChanges = () => {
        const cookies_local = nookies.get(null);
        setCookie(null, 'init', cookies_local['init_m'], { path: '/' });
        destroyCookie(null, 'init_m');
        setIsUnsaved(false);
        destroyCookie(null, 'preview', {path: '/'});
    }

    const handleDiscardChanges = () => {
        setIsUnsaved(false);
        destroyCookie(null, 'init_m');
        location.reload();
        destroyCookie(null, 'preview', {path: '/'});
    }

    const handlePreview = () => {
        setCookie(null, 'preview', 'true', { path: '/' });
        window.location.pathname = '/';
    }
  return (
      <div className={"px-6"}>
            <button className={"bg-blue-600 text-white rounded-full p-2"} onClick={setInitData}>Set Init Data</button>
            <AdminAddElement onSubmit={handleAdd} editableElement={editableElement}  />
          {isUnsaved &&
          (<>
              <button onClick={handleSaveAllChanges}
                   className="mt-20 text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
              Save all changes
            </button>
              <button onClick={handleDiscardChanges}
                      className="mt-2 text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                  Discard all changes
              </button>
              <button onClick={handlePreview}
                      className="mt-2 text-white bg-yellow-700 hover:bg-yellow-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                  Preview
              </button>
          </>)}
            <div className={"grid grid-flow-row-dense grid-cols-1"}>
                    {objects.sort((el1, el2) => el1.order - el2.order).map((el, index) => (<AdminElement
                        onEdit={() => handleEdit(el.id)}
                        {...el}
                        onRemove={() => handleRemove(el.id)} key={index.toString()}
                    />))}
            </div>
      </div>
  )
}
export async function getServerSideProps(ctx) {
    const cookies = nookies.get(ctx);
    const initData = cookies["init_m"] || cookies["init"];
    let parsedData = [];
    if (initData) {
        parsedData = JSON.parse(initData);
    }
    return { props: {initData: parsedData, cookies} }
}
export default Home;