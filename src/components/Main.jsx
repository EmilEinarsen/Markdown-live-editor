import { Box, Grid, useMediaQuery } from '@material-ui/core'
import React from 'react'
import Editor from './Editor/Editor'
import Output from './Output/Output'

const Main = () => {
	const matches = useMediaQuery('(min-width:1100px)')

	return (
		<Box py={1}>
		{ matches ? (
			<Grid container item xs={12}>
				<Grid item sm={6}>
					<Box px={4}>
						<Editor />
					</Box>
				</Grid>
				<Grid item sm={6}>
					<Box pr={4}>
						<Output />
					</Box>
				</Grid>
			</Grid>
		) : (
			<Box px={2}>
				<Output />
			</Box>
		)}
		</Box>
	)
}
export default Main