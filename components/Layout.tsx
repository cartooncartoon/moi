import React from 'react'


export interface LayoutProps {
    
}
 
const Layout: React.SFC<LayoutProps> = ({children}) => {
    return (  
        <div>
            {children}
        </div>
    );
}
 
export default Layout;