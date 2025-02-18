
import { jobService } from "../services/job.service.js"
import { debounce } from "../services/util.service.js"

const { useState, useEffect, useRef } = React

export function JobFilter({ defaultFilter, onSetFilter }) {

    const [filterByToEdit, setFilterByToEdit] = useState(defaultFilter)
    // const onSetFilterDebounce = debounce(onSetFilter)
    const onSetFilterDebounce = useRef(debounce(onSetFilter)).current

    useEffect(() => {
        onSetFilterDebounce(filterByToEdit)
    }, [filterByToEdit])

    function handleChange({ target }) {
        let { value, name: field } = target
        switch (target.type) {
            case 'range':
            case 'number':
                value = +target.value
                break
            case 'checkbox':
                value = target.checked
                break
        }
        setFilterByToEdit((prevFilter) => ({ ...prevFilter, [field]: value }))
    }


    const { txt, minSpeed } = filterByToEdit
    return (
        <section className="car-filter">
            <form >
                <label htmlFor="txt">Vendor</label>
                <input value={txt} onChange={handleChange} type="text" name="txt" id="txt" />
            </form>
        </section>
    )
}