import React from 'react'
import { Outlet } from 'react-router-dom';

interface LayoutProps {

}

export const Layout: React.FC<LayoutProps> = () => {
        return (
            <div className="App">
                <Outlet />
            </div>
        );
}