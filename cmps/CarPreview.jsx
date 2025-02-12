
export function CarPreview({ car }) {

    return (
        <article className="car-preview">
            <h2 className="vendor">{car.vendor}</h2>
            <h4>speed: {car.speed}</h4>
            <img src={`../assets/img/${car.vendor}.png`} alt="car-image" />
        </article>
    )

}