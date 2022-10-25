

export default function Card({name, price, image, tags, id}) {
    return (
        <a className={"rounded-md bg-blue-600 text-white cursor-pointer"} style={{padding: 20}} href={`/item/${id}`}>
            <div style={{backgroundImage: `url("${image}")`, height: 200, backgroundPosition: 'center', backgroundSize: 'cover'}}/>
            <p>{name}</p>
            <p>{price}</p>

            <div className={"flex"}>
                {tags.split(' ').map(el => <p key={el} style={{width: 'fit-content'}} className={"border-2 border-blue-400 rounded-full p-2"}>{el}</p>)}
            </div>
        </a>
    )
}