import '../styles/Analytics.css';
import Ad from './Ad';

function Analytics({data}) {
    const advertisingTableData = data.map(ad => {
        return (
            <Ad
                id={ad.id}
                product={ad.product}
                date={ad.date}
                platform={ad.platform}
                impressions={ad.impressions}
                clicks={ad.clicks}
                key={ad.id}
            />
        )
    });

    const renderTableHeader = () => {
        if (data.length) {
            let header = Object.keys(data[0]);
            return header.map((key, index) => {
                if (!key.includes('created_at') && !key.includes('updated_at')) {
                    return <th key={index}>{key.toUpperCase()}</th>
                }
            })
        }
    }

    return (
        <section>
            {data.length > 0 ? 
            <>
                <h2 className='tableTitle'>Analytics Table</h2>
                <table>
                    <tbody>
                        <tr>{renderTableHeader()}</tr>
                        { advertisingTableData }
                    </tbody>
                </table>
            </> :
            <h2>No Results Found</h2>}
        </section>
    )
}

export default Analytics;