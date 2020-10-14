import React from 'react'

import { RadioGroup, FormControlLabel, Radio } from '@material-ui/core'

const style = {
	width: '100%',
	flexWrap: 'no-wrap',
	flexDirection: 'row',
	alignContent: 'center'
}

const SelectRenderType = ({handleSelection}) => {
	return (
		<RadioGroup 
			aria-label="Mode" 
			name="Mode" 
			onChange={handleChange}
			style={style}
			defaultValue="0"
		>
			<FormControlLabel 
				value="0"
				cecked="true"
				control={<Radio />} 
				label="Renderd"
				labelPlacement="top" 
			/>
			
			<FormControlLabel 
				value="1" 
				control={<Radio />} 
				label="HTML" 
				labelPlacement="top" 
			/>
			
			<FormControlLabel 
				value="-1" 
				control={<Radio />} 
				label="TookenList" 
				labelPlacement="top" 
			/>
			
		</RadioGroup>
	)

	function handleChange(e) {
		handleSelection(e.target.value)
	}
}

export default SelectRenderType