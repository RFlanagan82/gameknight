import React from 'react';
import teamjson from "./team.json";
import Aboutcard from "./Aboutcard";
import Container from "../../components/Container/Container";
import Row from "../../components/Row/Row";

const About = () => {
    return (
        <Container>
           <Row>
            {teamjson.map(card => (
                <Aboutcard {...card} />
            ))}
           </Row> 
        </Container>
    );
};

export default About;