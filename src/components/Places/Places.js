import { useEffect, useState } from "react";
import SinglePlace from "../SinglePlace/SinglePlace";

const Places = () => {
    const [places, setPlaces] = useState([])

    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setPlaces(data))
    }, [])
    return (
        <div className='w-8/12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
            {
                places.map(place => <SinglePlace key={place.id} data={place}></SinglePlace>)
            }
        </div>
    );
};

export default Places;