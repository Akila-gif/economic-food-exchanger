import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import PrimarySearchAppBar from './PrimarySearchAppBar';
import SidebarMenu from './SidebarMenu';
import UserTable from './UserTable';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './Dashboard';
import Reports from './Reports';
import Integrations from './Integrations';
import Settings from './Settings';
import Home from "./Home.tsx";

const drawerWidth = 240;

const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })<{
    open?: boolean;
}>(({ theme, open }) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: `calc(${theme.spacing(7)} + 1px)`,
    [theme.breakpoints.up('sm')]: {
        marginLeft: `calc(${theme.spacing(8)} + 1px)`,
    },
    ...(open && {
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
        marginLeft: `${drawerWidth}px`,
    }),
}));

const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
}));

export default function AppLayout() {
    const [open, setOpen] = React.useState(false);

    const toggleDrawer = () => {
        setOpen(!open);
    };

    return (
        <Router>
            <Box sx={{ display: 'flex' }}>
                <CssBaseline />
                <PrimarySearchAppBar onMenuClick={toggleDrawer} />
                <SidebarMenu open={open} />
                <Main open={open}>
                    <DrawerHeader />
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/dashboard" element={<Dashboard />} />
                        <Route path="/users" element={<UserTable />} />
                        <Route path="/reports" element={<Reports />} />
                        <Route path="/integrations" element={<Integrations />} />
                        <Route path="/settings" element={<Settings />} />
                    </Routes>
                </Main>
            </Box>
        </Router>
    );
}