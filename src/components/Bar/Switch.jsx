import React, { useContext } from 'react'
import { FormControlLabel, Switch, Icon } from '@material-ui/core'
import Brightness4 from '@material-ui/icons/Brightness4'
import Brightness7 from '@material-ui/icons/Brightness7'
import { useDarkMode } from '../../Providers/DarkModeProvider'

const DarkModeToggle = () => {
	const { 
		useState: [ state, setState ], 
	} = useContext(useDarkMode)

	return (
		<FormControlLabel
			control={<Switch checked={state} color="primary" />}
			label={
				<Icon children={ 
					state ? <Brightness4 className="icon" /> 
						: <Brightness7 className="icon" />
					} 
				/>
			}
			labelPlacement="start"
			onChange={(e, value) => setState(value)}
			style={{padding: '0 2.5px 0 0'}}
		/>
	)
}

export default DarkModeToggle