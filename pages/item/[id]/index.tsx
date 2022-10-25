import type { NextPage } from 'next'
import {useEffect, useState} from "react";
import nookies from "nookies";
import Preview from "../../../src/components/Preview/Preview";
import Header from "../../../src/components/Header/Header";

const Item: NextPage = ({item, isPreview}) => {
    useEffect(() => {
        if (!item) { window.location.pathname = '/'}
    }, []);
    return (

        <div className={"px-6 mt-2 mx-auto"} style={{maxWidth: 1200}}>
            <Header/>
            {isPreview && <Preview/>}
            <div className={"grid grid-flow-row-dense grid-cols-2 gap-10"}>
                <div style={{backgroundImage: `url("${item?.image}")`, backgroundPosition: "center", backgroundSize: "cover" , height: 300}}/>
                <div className={"flex flex-col justify-center"}>
                    <p>{`${item?.name} ${item?.price}`}</p>
                    <p>{item?.description}</p>
                    <div className={"flex mt-2"}>
                        {item?.tags.split(' ').map(el => <p key={el} style={{width: 'fit-content'}} className={"border-2 border-blue-400 rounded-full p-2"}>{el}</p>)}
                    </div>
                </div>
            </div>
        </div>
    )
}


export async function getServerSideProps(ctx) {
    const cookies = nookies.get(ctx);
    const isPreview = cookies["preview"] === 'true';
    const initData = isPreview ? cookies["init_m"] : cookies["init"];
    let item = [];
    if (initData) {
        item = JSON.parse(initData).find(el => el.id === ctx.query.id) || null;
    }

    return { props: {item, isPreview} }
}

export default Item;