import * as React from 'react'
import { Link, Outlet, createRootRoute } from '@tanstack/react-router'

export const Route = createRootRoute({
    component: () => (
        <React.Fragment>
            <h1>My App</h1>
            <ul>
                <li>
                    <Link to="/" activeProps={{ style: { fontWeight: 'bold' } }}>Home</Link>
                </li>
                <li>
                    <Link to="/profile" activeProps={{ style: { fontWeight: 'bold' } }}>Profile</Link>
                </li>
            </ul>
            <Outlet />
        </React.Fragment>
    ),
})
