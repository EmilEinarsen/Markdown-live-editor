import React from 'react'
import { Container, TextareaAutosize } from '@material-ui/core'

const style = {
	container: {
		height: '100vh',
		width: '100%',
		padding: '5em',
	},
	textarea: {
		border: 0,
		height: '100vh', 
		width: '100%',
	}
}

const Editor = () => (
	<Container style={ style.container }>
		<textarea 
			aria-label="Editor textarea" 
			placeholder="Empty" 
			style={ style.textarea }
		/>
	</Container>
)

export default Editor