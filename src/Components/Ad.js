import '../styles/Ad.css'

function Ad({id, product, date, platform, impressions, clicks}) {
    return (
        <tr>
            <td>{id}</td>
            <td>{product}</td>
            <td>{date}</td>
            <td>{platform}</td>
            <td>{impressions}</td>
            <td>{clicks}</td>
        </tr>
        // <div className='adContainer'>
        //     <p>{id}</p>
        //     <p>{product}</p>
        //     <p>{date}</p>
        //     <p>{platform}</p>
        //     <p>{impressions}</p>
        //     <p>{clicks}</p>
        // </div>
    )
}

export default Ad;