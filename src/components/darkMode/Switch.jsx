import React from 'react'
import { FormControlLabel, Switch, Icon } from '@material-ui/core'
import Brightness4 from '@material-ui/icons/Brightness4';
import Brightness7 from '@material-ui/icons/Brightness7'

const {outer, icon} = {
	outer: {
		position: 'absolute', 
		right: '40px',
		top: '5px'
	},
	icon: {
		margin: '0 0 -3.5px 0'
	}
}

const DarkModeToggle = ({ 
	useState: [ 
		state, 
		setState 
	] 
}) => {
	return (
		<FormControlLabel
			style={outer}
			control={<Switch checked={state} color="primary" />}
			label={
				<Icon children={ 
					state ? <Brightness4 style={icon} /> 
						: <Brightness7 style={icon} /> 
					} 
				/>
			}
			labelPlacement="start"
			onChange={(e, value) => setState(value)}
		/>
	)
}

export default DarkModeToggle