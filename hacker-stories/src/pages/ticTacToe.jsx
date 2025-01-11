import { useState } from "react";
import '../css/tictactoe.css'

const Square = () => {
    const [value, setValue] = useState(null);

    const handleClick = () => {
        console.log("clicked!");
        setValue("X");
    }

    return (
        <button 
            className='square' 
            onClick={ handleClick }
        >
            { value }
        </button>
    );
}

const TicTacToe = () => {
    return (
        <>
            <div className='board-row'>
                <Square />
                <Square />
                <Square />
            </div>
            <div className='board-row'>
                <Square />
                <Square />
                <Square />
            </div>
            <div className='board-row'>
                <Square />
                <Square />
                <Square />
            </div>
        </>
    )
};

export default TicTacToe;