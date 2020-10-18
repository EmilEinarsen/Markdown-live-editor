import React, { useContext } from 'react'
import { Box, Container } from '@material-ui/core';
import { useData } from '../DataProvider'
import './editor.sass'


const Editor = ({className}) => {
	const { 
		useInput: [ input, setInput ] 
	} = useContext(useData)
	
	return (
		<Container className={`editor-container ${className}`}>
			<Box py={ !className ? 5 : 0}>
				<textarea 
					defaultValue={input}
					onChange={e => setInput(e.target.value)}
				></textarea>
			</Box>
		</Container>
	)
}

export default Editor