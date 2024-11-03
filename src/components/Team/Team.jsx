import { useState } from "react";
import './Team.css'
const Team = () => {
    const player = {
        border : "2px solid blue",
        borderRadius : "10px",
        margin : "15px",
        padding : "10px"
    }
    
    const [players, setPlayers] = useState(10);

    const handleAdd = () => {
        setPlayers(players + 1);
    }
    const handleSubt = () => {
        setPlayers(players - 1);
    }
    return (
        <div>
            <h2 style={{border: "2px solid green", padding: "10px"}}>Changes the state of players </h2>
            <div style={player}>
                <h2>Players : {players} </h2>
                <button className="Team" onClick={handleAdd}> ADD</button>
                <button onClick={handleSubt}> REMOVE </button>
            </div>
        </div>
    );
};

export default Team;