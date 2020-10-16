import { Grid } from '@material-ui/core'
import React from 'react'
import Editor from './component/editor/Editor'
import Output from './component/output/Output'
import InputContext from './component/Context'

const App = () => {
	return (
	<Grid container xs={12}>
		<InputContext>
			<Grid sm={6} >
				<Editor />
			</Grid>
			<Grid sm={6}>
				<Output />
			</Grid>
		</InputContext>
	</Grid>
)}
 
export default App