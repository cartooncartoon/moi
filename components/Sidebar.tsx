import React from 'react'


export interface SidebarProps {
    
}
 
const Sidebar: React.SFC<SidebarProps> = () => {
    return (
        <div className="sidebar">
            <style jsx>{`
            .sidebar {
                width: 500px;
                height: 100vh;
                background: #1a1a1a;
                padding: 1rem;
                display: flex;
                align-items: flex-end;
            }

            .input {
                resize: none;
                border: none;
                width: 100%;
                height: 100%;
                overlay: none;
                font: inherit;
                color: #efeff1;
                background: none;
                padding: 13px 20px;
            }

            .input::placeholder {
                color: #efeff1;
            }
            `}</style>
            <div style={{
            maxHeight: 50,
            width: '100%',
            overflow: 'hidden', borderRadius: 6, background: 'hsla(0,0%,100%,0.2)'}}>
            <textarea 
            className="input"
            placeholder="What you want to say?"></textarea>
            </div>
        </div>
    );
}
 
export default Sidebar;