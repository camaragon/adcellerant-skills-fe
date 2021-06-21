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

    console.log(data[0])
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
            <table>
                <tbody>
                    <tr>{renderTableHeader()}</tr>
                    { advertisingTableData }
                </tbody>
            </table>
        </section>
    )
}

export default Analytics;