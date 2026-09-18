import { render,screen } from '@testing-library/react';
import { createMemoryRouter,RouterProvider } from 'react-router-dom';
import { describe,expect,it } from 'vitest';
import { AppShell } from './AppShell';
describe('AppShell',()=>{it('renders the primary navigation',()=>{const router=createMemoryRouter([{path:'/',element:<AppShell/>,children:[{index:true,element:<div>Test page</div>}]}]);render(<RouterProvider router={router}/>);expect(screen.getByRole('navigation',{name:'Primary navigation'})).toBeInTheDocument();for(const name of ['Dashboard','Providers','Placements','Events']) expect(screen.getByRole('link',{name})).toBeInTheDocument();});});
