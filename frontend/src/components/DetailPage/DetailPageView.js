import React from "react";
import {Container} from "react-bootstrap";
import DetailPageComponent from "./DetailPageComponent";

export default function DetailPageView(){
    return(
        <Container>
            <Container fluid style={{height: '100vh'}}>
                <DetailPageComponent/>
            </Container>
        </Container>
    )
}
