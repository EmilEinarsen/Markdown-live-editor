import { Container, Grid, useMediaQuery } from '@material-ui/core'
import React from 'react'
import Editor from './component/editor/Editor'
import Output from './component/output/Output'
import InputContext from './component/Context'

const App = () => {
	const matches = useMediaQuery('(min-width:1100px)')

	return (
	<Grid container item xs={12}>
		<InputContext>
			{ matches ? (
				<>
					<Grid item sm={6} >
						<Editor />
					</Grid>
					<Grid item sm={6}>
						<Output />
					</Grid>
				</>
			) : (
				<Container>
					<Output />
				</Container>
			)}
		</InputContext>
	</Grid>
)}
 
export default App