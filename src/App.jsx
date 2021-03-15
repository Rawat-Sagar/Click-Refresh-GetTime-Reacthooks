import React , {useState} from 'react';


const App = () =>{

    let newTime = new Date().toLocaleTimeString();

    const [cTime , setCtime] = useState(newTime);


    const UpdateTime = () =>{
        let newCTime = new Date().toLocaleTimeString();
        setCtime(newCTime);
    }

    return(
        <>
            <h1>{cTime}</h1> 
            <button onClick={UpdateTime}>Get Time</button>
        </>
    );
};


export default App;