import { Container, Grid, useMediaQuery } from '@material-ui/core'
import React from 'react'
import Editor from './components/Editor/Editor'
import Output from './components/Output/Output'
import DataProvider from './components/DataProvider'
import DarkModeProvider from './components/DarkMode/DarkModeProvider'

const App = () => {
	const matches = useMediaQuery('(min-width:1100px)')

	return (
		<DarkModeProvider>
		<DataProvider>
			{ matches ? (
				<Grid container item xs={12}>
					<Grid item sm={6} >
						<Editor />
					</Grid>
					<Grid item sm={6}>
						<Output />
					</Grid>
				</Grid>
			) : (
				<Container>
					<Output />
				</Container>
			)}
		</DataProvider>
		</DarkModeProvider>
	)
}
 
export default App