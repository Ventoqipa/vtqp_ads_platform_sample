import { createBrowserRouter } from 'react-router-dom';
import { AppShell } from './shell/AppShell';
import { DashboardPage } from '../features/dashboard/presentation/DashboardPage';
import { ProvidersPage } from '../features/providers/presentation/ProvidersPage';
import { PlacementsPage } from '../features/placements/presentation/PlacementsPage';
import { EventsPage } from '../features/events/presentation/EventsPage';
export const router=createBrowserRouter([{path:'/',element:<AppShell/>,children:[{index:true,element:<DashboardPage/>},{path:'providers',element:<ProvidersPage/>},{path:'placements',element:<PlacementsPage/>},{path:'events',element:<EventsPage/>}]}]);
