import React, { useContext } from 'react'
import { useData } from '../DataProvider.jsx'
import { Tabs, Tab, useMediaQuery, AppBar } from '@material-ui/core'

const SelectOutput = () => {
	const { 
		useSelect: [ select, setSelect ] 
	} = useContext(useData)
	const matches = useMediaQuery('(min-width:1100px)')

	return (
		<AppBar >
			<Tabs
				indicatorColor="primary"
				textColor="primary"
				onChange={(e, value) => setSelect(value)}
				value={select}
				variant="scrollable"
			>
				{ !matches ? (
					<Tab label="Editor" value={3}/>
				) : '' }
				<Tab label="Preview" value={0}/>
				<Tab label="TookenList" value={1}/>
				<Tab label="HTML" value={2}/>
			</Tabs>
		</AppBar>
	)
}

export default SelectOutput