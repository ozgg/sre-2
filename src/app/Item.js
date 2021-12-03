import geo from '../images/geo.svg'

export default function Item(props) {
    return(
        <li className="travel-item">
            <figure><img src={props.imageUrl} alt=""/></figure>
            <div className="details">
                <div className="country">
                    <img src={geo} alt=""/>
                    <span>{props.countryName}</span>
                    <a href={props.geoLink}>View on Google Maps</a>
                </div>
                <div className="place">{props.place}</div>
                <div className="dates">{props.dates}</div>
                <p>{props.description}</p>
            </div>
        </li>
    )
}
