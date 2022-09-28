import { useEffect, useState } from "react";
import SinglePlace from "../SinglePlace/SinglePlace";

const Places = ({ handleTripTime }) => {
    const [places, setPlaces] = useState([])

    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setPlaces(data))
    }, [])
    return (
        <div className='w-12/12 md:w-9/12 lg:w-9/12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8'>
            {
                places.map(place => <SinglePlace
                    key={place.id}
                    data={place}
                    handleTripTime={handleTripTime}
                ></SinglePlace>)
            }
        </div>
    );
};

export default Places;