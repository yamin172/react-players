import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import { Card } from 'react-bootstrap';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";


const PlayerCard = (props) => {
    const {image, name, salary, email, position} = props.player;
    const handleAddPlayers = props.handleAddPlayers;
    return (
    <div>
        <Card className="p-2" style={{ width: "18rem" }}>
            <Card.Img variant="top" src={image} />
            <Card.Body>
            <Card.Title className="text-center">{name}</Card.Title>
            <Card.Text className="text-center font-weight-bold">
                {position}
            </Card.Text>
            <Card.Text className="text-center font-weight-bold">
                {salary}
            </Card.Text>
            <Card.Text className="text-center font-weight-bold">
                <FontAwesomeIcon icon={faEnvelope}/>
                {email}
            </Card.Text>
            <Button onClick={() => handleAddPlayers(props.player)} variant="success">
                Add to team
            </Button>
            </Card.Body>
        </Card>
    </div>
    );
};

export default PlayerCard;