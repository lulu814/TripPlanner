import React, {useState} from "react";
import {Container} from "react-bootstrap";
import PlaceList from "./Place/PlaceListComponent";
import MenuTabs from "./MenuTabsComponent";
import SearchBarComponent from "./PlainSearchBarComponent";
import { useHistory } from "react-router";

export default function HomepageView(){
    const history = useHistory();
    const updateSearchText = (text) => {
        console.log(`setting address to: ${text}`);
        history.push(`/search/${text}`);
    }

    return(
        <Container>
            <MenuTabs/>
            <Container fluid style={{height: '100vh'}}>
                <SearchBarComponent updateText={updateSearchText} />
                <PlaceList/>
            </Container>
        </Container>
    )
}
