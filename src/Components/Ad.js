import '../styles/Ad.css'

function Ad({id, product, date, platform, impressions, clicks}) {
    return (
        <div className='adContainer'>
            <p>{id}</p>
            <p>{product}</p>
            <p>{date}</p>
            <p>{platform}</p>
            <p>{impressions}</p>
            <p>{clicks}</p>
        </div>
    )
}

export default Ad;