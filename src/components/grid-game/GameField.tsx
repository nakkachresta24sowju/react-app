import React from 'react'

class GameField extends React.Component {

    onCellClick = () => {
        alert("oncellclick");
    }
    render() {
        return (<div>GameField</div>);
    }
}
export default GameField;