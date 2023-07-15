

const Card =({data})=>{
    return(
        <div className="card">
            <div className="top">
                <h2>{data.name}</h2>
                <img src={data.imgUrl} alt="" width="200px"/>
            </div>
            <div className="bottom">
                <p>{data.liked}</p>
                <p>{data.year}</p>
            </div>
        </div>
    )
}

export default Card