import React from "react";

const App = (props) => {
    const {counter} = props;
    return (
        <div>
            <div>{counter}</div>
        </div>
    )
}

export default App;