import React from 'react'
import { Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/LowStockCard.css';

const LowStockCard = () => {
    const stockInfo = [
        {date: 'date', open: '2', high: '3', low: '4', close: '5'},
        {date: 'date', open: '2', high: '3', low: '4', close: '5'},
        {date: 'date', open: '2', high: '3', low: '4', close: '5'}
    ]


    const renderCard = (card, index) => {
        return (
                <Card className="card-main" style={{width:'18rem'}} key={index}>
                    <Card.Img variant="left" src={card.image}/>
                    <Card.Body className="card-body">
                        <Card.Title>{card.date}</Card.Title>
                        <Card.Text>Open: {card.open}</Card.Text>
                        <Card.Text>High: {card.high}</Card.Text>
                        <Card.Text>Low: {card.low}</Card.Text>
                        <Card.Text>Close: {card.close}</Card.Text>

                    </Card.Body>
                </Card>
        );
    };

    return (
        <div className="row">
            {stockInfo.map(renderCard)}
        </div>
    )
}

export default LowStockCard;
