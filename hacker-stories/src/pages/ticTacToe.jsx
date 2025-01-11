import { useState } from "react";
import '../css/tictactoe.css'

const Square = ({ value, onSquareClick }) => {
    return (
        <button className='square' onClick={ onSquareClick }>
            { value }
        </button>
    );
}

const TicTacToe = () => {
    const [squares, setSquares] = useState(Array(9).fill(null));

    function handleClick() {
        const nextSquares = squares.slice();
        nextSquares[0] = 'X';
        setSquares(nextSquares);
    }

    return (
        <>
            <div className='board-row'>
                <Square value={ squares[0] } onSquareClick={ handleClick }/>
                <Square value={ squares[1] } onSquareClick={ handleClick }/>
                <Square value={ squares[2] } onSquareClick={ handleClick }/>
            </div>
            <div className='board-row'>
                <Square value={ squares[3] } />
                <Square value={ squares[4] } />
                <Square value={ squares[5] } />
            </div>
            <div className='board-row'>
                <Square value={ squares[6] } />
                <Square value={ squares[7] } />
                <Square value={ squares[8] } />
            </div>
        </>
    )
};

export default TicTacToe;