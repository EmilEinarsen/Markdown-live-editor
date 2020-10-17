import React, { useState } from 'react'
import { FormControlLabel, Switch, Icon, createMuiTheme } from '@material-ui/core'
import Brightness4 from '@material-ui/icons/Brightness4';
import Brightness7 from '@material-ui/icons/Brightness7'

const style = {
	outer: {
		position: 'absolute', 
		right: '40px',
		top: '5px'
	},
	icon: {
		margin: '0 0 -3.5px 0'
	}
}

function DarkModeToggle({handleTheme}) {
	const {outer, icon} = style
	let [mode, setMode] = useState(false)
	const handleSwitch = (e, value) => {
		setMode(value)
		handleTheme(
			createMuiTheme({
				palette: {
					type:  value ? 'dark' : 'light'
				}
			})
		)
	}

	return (
		<FormControlLabel
			style={outer}
			control={<Switch color="primary" />}
			label={<Icon children={ mode ? <Brightness4 style={icon} /> : <Brightness7 style={icon} /> } />}
			labelPlacement="start"
			onChange={handleSwitch}
		/>
	)
}

export default DarkModeToggle