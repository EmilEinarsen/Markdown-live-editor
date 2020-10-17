import { Container, Grid, useMediaQuery } from '@material-ui/core'
import React, { useState, useEffect } from 'react'
import Editor from './components/editor/Editor'
import Output from './components/output/Output'
import InputContext from './components/Context'
import DarkModeProvider from './components/darkMode/DarkModeProvider';
const App = () => {
	const matches = useMediaQuery('(min-width:1100px)')

	return (
		<DarkModeProvider>
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
		</DarkModeProvider>
	)
}
 
export default App