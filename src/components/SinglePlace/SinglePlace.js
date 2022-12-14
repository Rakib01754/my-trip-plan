import React from 'react';

const SinglePlace = ({ data, handleTripTime }) => {
    const clickFunction = (time) => {
        handleTripTime(time)
    }

    const { picture, time, name, about } = data
    return (
        <div>
            <div className="card bg-base-100 shadow-xl h-[480px]">
                <figure className="px-5 pt-5">
                    <img src={picture} alt="tour spot" className="rounded-xl" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">{name}</h2>
                    <p>{about ? about.slice(0, 100) + '...' : 'no data found'}</p>
                    <p className='font-bold'>Trip Duration: {time} Days </p>
                    <div className="card-actions">
                        <button className="btn btn-outline mb-2" onClick={() => clickFunction(time)}>Select Place</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SinglePlace;