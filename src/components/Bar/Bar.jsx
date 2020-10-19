import React from 'react'
import { AppBar, Box, Grid, useMediaQuery } from '@material-ui/core'
import Tabs from './BarTabs'
import './bar.sass';

const Bar = () => {
	const matches = useMediaQuery('(min-width:1100px)')
	
	return (
		<AppBar className="appbar" position="static" color="inherit">
			<Box px={matches ? 4 : 0}>
				<Grid container justify="flex-end">
					<Tabs />
				</Grid>
			</Box>
		</AppBar>
	)
}

export default Bar