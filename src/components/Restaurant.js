import React from 'react'
import './Restaurant.css'

const Restaurant = ({key, name, thumb, locality, address, cuisines, cost , rating, votes, rating_color }) => {
	return (
		<div className="restaurant-tile">
			<img alt="" src={thumb} className="rest-img" />
			<div className="rest-rating">
				<p className="rest-num">{rating}
				<i className='fas fa-star'></i>
				</p>
				
				
	
			</div>
			<div className="rest-details">
				<h2 className="rest-name">{name}</h2>
				<div className="rest-loc">{locality}</div>
				<div className="rest-add">{address}</div>
				<hr/>
				<div className="rest-cusines"><strong>CUISINES:</strong> {cuisines}</div>
				<div className="rest-cost"><strong>COST FOR TWO:</strong> Rs.{cost}</div>
			</div>
		</div>
	)
}

export default Restaurant
