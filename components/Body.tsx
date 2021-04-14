import React from 'react'


export interface BodyProps {
    
}
 
const Body: React.SFC<BodyProps> = () => {
    return (
        <div className="body">
            <style jsx>{`
            .body {
                width: 100%;
                background: black;
                height: 100vh;
            }
            `}</style>
        </div>
    );
}
 
export default Body;