import React, { useEffect, useState } from 'react';
import { invoke } from '@forge/bridge';

function App() {
    const [data, setData] = useState(null);

    useEffect(() => {
        invoke('getText', { example: 'my-invoke-variable' }).then(setData);
    }, []);

    return (
        <div>
            <h1>this is now working. thank god</h1>
            {data ? data : 'Loading...'}
        </div>
    );
}

export default App;
