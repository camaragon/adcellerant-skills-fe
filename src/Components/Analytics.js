import '../styles/Analytics.css';
import Ad from './Ad';

function Analytics({data}) {
    const advertisingData = data.map(ad => {
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
            { advertisingData }
        </section>
    )
}

export default Analytics;