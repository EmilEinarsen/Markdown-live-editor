import React, { useContext } from 'react'
import { useData } from '../../Providers/DataProvider.jsx'
import { Tabs, Tab, useMediaQuery } from '@material-ui/core'
import Switch from './Switch';

const BarTabs = () => {
	const { 
		useSelect: [ select, setSelect ]
	} = useContext(useData)
	const matches = useMediaQuery('(min-width:1100px)')

	return (
		<Tabs
			onChange={(e, value) => setSelect(value)}
			value={select}
			variant={ matches ? 'fullWidth' : 'scrollable' }
			scrollButtons='on'
			indicatorColor="primary"
		>
			{ !matches ? (
				<Tab label="Editor" value={3} />
			) : '' }
			<Tab label="Preview" value={0} />
			<Tab label="TookenList" value={1} />
			<Tab label="HTML" value={2} />
			<Switch />
		</Tabs>
	)
}

export default BarTabs