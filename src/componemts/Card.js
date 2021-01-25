import React from "react";
const Card = ({ name, email, id }) => {
    return (
        <div className=' fl w-9 b--white bg-light-yellow pa3 ma2 grow bw2 shadow-10 tc'>
            <img alt='robot' src={`https://robohash.org/${id}`} />
            <h2> {name} </h2>
            <p> {email} </p>
        </div>
    )
}
export default Card