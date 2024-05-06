import React, { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import HomeIcon from '@mui/icons-material/Home'
import ExploreIcon from '@mui/icons-material/Explore'
import DescriptionIcon from '@mui/icons-material/Description'
import FolderIcon from '@mui/icons-material/Folder';
import { Box, Drawer, Tab, Tabs } from '@mui/material'

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
          <Tab icon={<HomeIcon />} id="vertical-tab-0" />
          <Tab icon={<ExploreIcon />} id="vertical-tab-1" />
          <Tab icon={<FolderIcon />} id="vertical-tab-2" />
          <Tab icon={<DescriptionIcon />} id="vertical-tab-3" />
        </Tabs>
        <TabPanel index={0} value={value}>
          Home Tab
        </TabPanel>
        <TabPanel index={1} value={value}>
          Explore Tab
        </TabPanel>
        <TabPanel index={2} value={value}>
          Files Tab
        </TabPanel>
        <TabPanel index={3} value={value}>
          Description Tab
        </TabPanel>
      </Box>
    </>
  )
}

interface TabPanelProps {
  children?: React.ReactNode
  index: number
  value: number
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <div>{children}</div>
        </Box>
      )}
    </div>
  )
}

export default App
