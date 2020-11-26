import React, {useState} from "react";
import {Container} from "react-bootstrap";
import PlaceList from "./Place/PlaceListComponent";
import MenuTabs from "./MenuTabsComponent";
import SearchBarComponent from "./PlainSearchBarComponent";

export default function HomepageView(){
    const [searchText, setSearchText] = useState("");

    const updateSearchText = (text) => {
        console.log(`setting address to: ${text}`);
        setSearchText(text);
    }

    return(
        <Container>
            <MenuTabs/>
            <Container fluid style={{height: '100vh'}}>
                <SearchBarComponent updateText={updateSearchText} />
                <PlaceList inputText={searchText}/>
            </Container>
        </Container>
    )
}
