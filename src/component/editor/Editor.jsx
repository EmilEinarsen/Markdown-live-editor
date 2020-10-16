import React, { useContext } from 'react'
import { Box, Container, TextareaAutosize } from '@material-ui/core';
import { Context } from '../Context.jsx'
import './editor.sass'


const Editor = () => {
	const { input, setInput } = useContext(Context)

	function handleInput(e) {
		setInput(e.target.value)
	}

	return (
		<Container className="editor-container">
			<Box p={5}>
				<textarea 
					defaultValue={input}
					onChange={handleInput}
				/>
			</Box>
		</Container>
	)
}

export default Editor