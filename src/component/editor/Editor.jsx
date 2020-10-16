import React, { useContext } from 'react'
import { Box, Container } from '@material-ui/core';
import { Context } from '../Context.jsx'
import './editor.sass'


const Editor = ({className}) => {
	const { input, setInput } = useContext(Context)

	function handleInput(e) {
		setInput(e.target.value)
	}
	console.log(className)
	return (
		<Container className={`editor-container ${className}`}>
			<Box py={ !className ? 5 : 0}>
				<textarea 
					defaultValue={input}
					onChange={handleInput}
				></textarea>
			</Box>
		</Container>
	)
}

export default Editor