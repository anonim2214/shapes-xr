import type { NextPage } from 'next'
import {useState} from "react";
import nookies from "nookies";
import Card from "../src/components/Card/Card";
import Search from "../src/components/Search/Search";
import Dropdown from "../src/components/Dropdown/Dropdown";
import Preview from "../src/components/Preview/Preview";

const Home: NextPage = ({initData, tags = [], isPreview}) => {
    const [search, setSearch] = useState('');
    const [selectedTags, setSelectedTags] = useState([]);
  return (
      <div className={"px-6 mt-2 mx-auto"} style={{maxWidth: 1200}}>
          {isPreview && <Preview/>}
          <div className={"flex w-full"}>
              {tags && tags.length > 0 && (<>
                  <Dropdown selected={selectedTags} setSelected={setSelectedTags} tags={tags} />
                  <div className={"mr-2"}/>
              </>)}
              <Search setValue={setSearch} value={search}/>
          </div>

        <div className={"mt-2 grid grid-flow-row-dense grid-cols-3 gap-10"}>
            {initData
                .filter(el => selectedTags.length === 0 || !selectedTags.some(tag => !el.tags.split(' ').includes(tag)))
                .filter(el => el.name.toLowerCase().includes(search.toLowerCase()))
                .sort((el1, el2) => el1.order - el2.order)
                .map(el => (
                <Card {...el} key={el.id}/>
            ))}
        </div>
      </div>
  )
}


export async function getServerSideProps(ctx) {
    const cookies = nookies.get(ctx);
    const isPreview = cookies["preview"] === 'true';
    const initData = isPreview ? cookies["init_m"] : cookies["init"];
    let parsedData = [];
    let tags = [];
    if (initData) {
        parsedData = JSON.parse(initData);
        tags = Object.keys(parsedData.reduce((acc, el) => {
            el.tags.split(' ').forEach(e => {
                acc[e] = true;
            });
            return acc;
        }, {}))
    }

    return { props: {initData: parsedData, tags, isPreview} }
}

export default Home;