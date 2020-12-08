import React from "react";
import {Container} from "react-bootstrap";
import PlaceList from "./Place/PlaceListComponent";
import MenuTabs from "./MenuTabsComponent";
import SearchBarComponent from "./PlainSearchBarComponent";


export default function HomepageView(){
    return(
        <Container>
            <MenuTabs/>
            <Container fluid style={{height: '100vh'}}>
                <SearchBarComponent />
                <PlaceList/>
            </Container>
        </Container>
    )
}
