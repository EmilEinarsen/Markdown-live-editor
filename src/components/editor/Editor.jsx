import React, { useContext } from 'react'
import { Box } from '@material-ui/core';
import { useData } from '../../Providers/DataProvider'
import './editor.sass'


const Editor = ({className}) => {
	const { 
		useInput: [ input, setInput ] 
	} = useContext(useData)
	
	return (
		<Box className={`editor-container ${className}`}>
			<textarea 
				defaultValue={input}
				onChange={e => setInput(e.target.value)}
			/>
		</Box>
	)
}

export default Editor