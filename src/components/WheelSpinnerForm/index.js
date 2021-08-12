import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';

import { createWheelSpinner } from '../../actions/wheelSpinner';
import { getRandomColor } from '../../helpers';

import Button from '../Button';

import classes from './index.module.css';

const WheelSpinnerForm = () => {
	const [wheelSpinnerData, setWheelSpinnerData] = useState({
		title: '',
		choices: [],
		currChoice: {
			id: '',
			name: ''
		},
		color: ''
	});

	const dispatch = useDispatch();

	const addChoice = () => {
		setWheelSpinnerData({
			...wheelSpinnerData,
			choices: [ ...wheelSpinnerData.choices, { ...wheelSpinnerData.currChoice, id: uuidv4() }],
			currChoice: {
				id: '',
				name: ''
			}
		})
	}
	const removeChoice = (id) => {
		const updatedChoicesList = wheelSpinnerData.choices.filter(res => res.id !== id);
		setWheelSpinnerData({
			...wheelSpinnerData,
			choices: updatedChoicesList
		})
	}

	const handleSubmit = (e) => {
		const newColor = getRandomColor();
		console.log(newColor);
		e.preventDefault();
		const newData = {
			title: wheelSpinnerData.title,
			choices: wheelSpinnerData.choices.map(res => res.name),
			color: newColor
		}
		dispatch(createWheelSpinner(newData));

		setWheelSpinnerData({
			title: '',
			choices: [],
			currChoice: {
				id: '',
				name: ''
			},
			color: ''
		})
	}

	return (
		<div className={classes.spinners}>
			<form className={classes.Form} onSubmit={handleSubmit} action="/">
				<fieldset>
					<div className={classes.InputField}>
						<label>Title</label>
						<input 
							type="text" 
							value={wheelSpinnerData.title} 
							onChange={(e) => setWheelSpinnerData({
								...wheelSpinnerData,
								title: e.target.value
							})}
							className={classes.Input}
						/>
					</div>
				</fieldset>
				<fieldset>
					<div>
						<ul className={classes.ChoicesList}>
							<li className={classes.ChoiceHeader}>
								<span>Choices</span>
							</li>
							{ wheelSpinnerData.choices.length > 0 ? (
								wheelSpinnerData.choices.map((choice) => (
									<li className={classes.Choice} key={uuidv4()}>
										<span>{choice.name}</span>
										<Button 
											eventClick={(e) => removeChoice(choice.id)}
											type='button'
											label='Remove'
											classes='secondary'
										/>
									</li>
								))
							) : ''}
						</ul>
						{ wheelSpinnerData.choices.length <= 14 ? (
							<div className={classes.InputField}>
								<input 
									type="text" 
									name="choiceName"
									value={wheelSpinnerData.currChoice.name} 
									onChange={(e) => setWheelSpinnerData({
										...wheelSpinnerData,
										currChoice: {
											...wheelSpinnerData.currChoice,
											name: e.target.value
										}
									})}
									className={classes.Input}
								/>
								<Button 
									label='Voeg toe'
									type='button'
									classes='primary'
									eventClick={addChoice}
								/>
							</div>
						) : '' }
					</div>
				</fieldset>
				<fieldset>
					<Button 
						label='Submit'
						type='submit'
						classes='primary'
					/>
				</fieldset>
			</form>
		</div>
	);
}

export default WheelSpinnerForm;