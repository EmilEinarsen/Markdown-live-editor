import { Container } from '@material-ui/core'
import React, { useState } from 'react'
import SelectOutputMode from './SelectOutputMode'

const style = {
	container: {
		background: '#0001',
		padding: '2.5em'
	},
}

const Output = () => {
	let [select, setSelect] = useState(0)
	return (
		<Container style={style.container}>
			<SelectOutputMode 
				handleSelection={handleSelection} 
			/>
			{select == 0 ? 'render' : select == 1 ? 'html' : 'tookenList'}
		</Container>
	)

	function handleSelection(param) {
		setSelect(param)
	}
}

export default Output