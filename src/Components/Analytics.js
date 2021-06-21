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

    return (
        <section>
            <table>
                <tbody>
                    { advertisingTableData }
                </tbody>
            </table>
        </section>
    )
}

export default Analytics;