import React from 'react'


export interface SidebarProps {
    
}
 
const Sidebar: React.SFC<SidebarProps> = () => {
    return (
        <div className="sidebar">
            <style jsx>{`
            .sidebar {
                width: 600px;
                height: 100vh;
                background: #1a1a1a;
            }
            `}</style>
        </div>
    );
}
 
export default Sidebar;