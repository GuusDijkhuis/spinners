import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from "react-router-dom";
import { getAllWheelSpinners } from '../../actions/wheelSpinner';

import classes from './index.module.css';

const WheelSpinnerList = () => {
	
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getAllWheelSpinners())
	}, [dispatch])

	const wheelSpinners = useSelector((state) => state.wheelSpinners);
	return (
		wheelSpinners ? (
			<div className={classes.container}>
				<h1>All Spinners</h1>
				<ul className={classes.list}>
					{wheelSpinners.map(res => (
						<Link to={`/spinners/${res._id}`} style={
							{
								backgroundColor: `${res.color}`
							}}
						>
							<li className={classes.listItem}>
								<h2 className={classes.Title}>{res.title}</h2>
							</li>
						</Link>
					))}
				</ul>
			</div>
		) :''
	);
}

export default WheelSpinnerList;