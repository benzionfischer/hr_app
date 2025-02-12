import { CarFilter } from "../cmps/CarFilter.jsx"
import { CarList } from "../cmps/CarList.jsx"
import { carService } from "../services/car.service.js"
import { showErrorMsg, showSuccessMsg } from "../services/event-bus.service.js"
import { getTruthyValues } from "../services/util.service.js"
const { Link, useSearchParams } = ReactRouterDOM

const { useEffect, useState } = React


export function CarIndex() {

    const [cars, setCars] = useState(null)
    const [searchParams, setSearchParams] = useSearchParams()
    const [filterBy, setFilterBy] = useState(carService.getFilterFromSrcParams(searchParams))

    useEffect(() => {
        // console.log('Loading Cars')
        setSearchParams(getTruthyValues(filterBy))
        loadCars()
    }, [filterBy])

    function loadCars() {
        carService.query(filterBy)
            .then(setCars)
            .catch(err => {
                console.log('Problems getting cars:', err)
            })
    }

    function onRemoveCar(carId) {
        carService.remove(carId)
            .then(() => {
                setCars(cars => cars.filter(car => car.id !== carId))
                showSuccessMsg(`Car (${carId}) removed!`)
            })
            .catch(err => {
                console.log('Problems removing car:', err)
                showErrorMsg('Problems removing car')
            })
    }

    function onSetFilter(filterBy) {
        setFilterBy(prevFilter => ({ ...prevFilter, ...filterBy }))
    }

    // if (!cars) return <div>Loading...</div>
    return (
        <section className="car-index">
            <CarFilter defaultFilter={filterBy} onSetFilter={onSetFilter} />

            <section>
                <Link to="/car/edit">Add Car</Link>
            </section>
            {cars
                ? <CarList
                    cars={cars}
                    onRemoveCar={onRemoveCar}
                />
                : <div className="loader">Loading...</div>
            }
        </section>
    )

}