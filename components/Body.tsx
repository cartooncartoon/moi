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
            <iframe width="100%" height="100%" src="https://www.youtube.com/embed/21qNxnCS8WU" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
        </div>
    );
}
 
export default Body;