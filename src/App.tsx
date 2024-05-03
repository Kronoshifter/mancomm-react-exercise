import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Box, Drawer, Tab, Tabs } from '@mui/material'

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const drawerWidth = 240

function App() {
  const [value, setValue] = useState(0)

  function handleChange(event: React.SyntheticEvent, newValue: number) {
    setValue(newValue)
  }

  return (
    <>
      <Box sx={{ display: 'flex' }}>
        <Tabs
          orientation="vertical"
          value={value}
          onChange={handleChange}
          sx={{ borderRight: 1, borderColor: 'divider' }}
        >
          <Tab label="Item One" id="vertical-tab-0" />
          <Tab label="Item Two" id="vertical-tab-1" />
          <Tab label="Item Three" id="vertical-tab-2" />
          <Tab label="Item Four" id="vertical-tab-3" />
        </Tabs>
      </Box>
    </>
  )
}

export default App
