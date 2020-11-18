import React from "react";
import 'font-awesome/css/font-awesome.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container} from "react-bootstrap";
import HeaderComponent from "./HeaderComponent";
import MenuTabs from "./MenuTabsComponent";
import SearchBarComponent from "./SearchBarComponent";
import MapComponent from "./Maps/MapComponent";

export default function HomepageView(){
    return(
        <Container>
            <HeaderComponent/>
            <MenuTabs/>
            <Container fluid style={{height: '100vh'}}>
                {/* <SearchBarComponent/> */}
                
                <MapComponent/>
                    

            </Container>

        </Container>
    )
}
