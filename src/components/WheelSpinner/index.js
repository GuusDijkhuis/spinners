import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector} from 'react-redux';
import { useParams } from 'react-router';

import { getSingleWheelSpinner } from '../../actions/wheelSpinner';
import { getColor, randomNum } from '../../helpers';

import classes from './index.module.css';

const WheelSpinner = () => {
	
	const dispatch = useDispatch();
	const { id } = useParams();
	const [choice, setChoice] = useState(-1);
	const [countDown, setCountDown] = useState(5);
	const [disabledButton, setDisableButton] = useState(false);

	useEffect(() => {
		dispatch(getSingleWheelSpinner(id));
	}, [dispatch, id])

	const wheelSpinners = useSelector((state) => state.wheelSpinners[0]);

	const handleSpinner = () => {
		const rand = randomNum(wheelSpinners.choices.length);
		let count = 5;
		setDisableButton(true);
		const interval = setInterval(() => {
			let rand2 = randomNum(wheelSpinners.choices.length);
			while(rand2 === choice) {
				rand2 = randomNum(wheelSpinners.choices.length)
			}
			setChoice(randomNum(wheelSpinners.choices.length))
			console.log(rand2);
		}, 300)
		const countDownTimer = setInterval(() => {
			count = count - 1;
			setCountDown(count);
		}, 1000)
		
		setTimeout(() => {
			clearInterval(interval);
			clearInterval(countDownTimer);
			setChoice(rand);
			setDisableButton(false);
		}, 5000);
	}

	return (
		wheelSpinners ? (
			<div className={classes.container}>
				<h1>{wheelSpinners.title}</h1>
				<ul className={classes.list}>
					{wheelSpinners.choices.map((res, i) => (
						<li 
							className={classes.listItem} 
							style={{
								backgroundColor: getColor(i),
								opacity: choice === i ? '1' : '0.7',
								border: choice === i ? '3px solid rgba(255,255,255,1)': '3px solid rgba(255,255,255,0)'
							}}
							
						>
							<h2>{res}</h2>
						</li>
					))}
				</ul>
				<button 
					className={classes.spinButton} 
					onClick={handleSpinner}
					style={{
						backgroundColor: disabledButton ? 'rgba(0,0,0,0.5)' : ''
					}}
					disabled={disabledButton ? true : false}
				>
					{disabledButton ? countDown : 'Spin'}
				</button>
			</div>
		) :''
	);
}

export default WheelSpinner;