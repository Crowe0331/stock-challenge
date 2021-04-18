import React from 'react';
import { Button, Navbar, Form, FormControl } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/Header.css';

const Header = (props) => {
    return (
        <div>
            <Navbar className="row">
                <Navbar.Brand><b className="title-bold">High and Low Dashboard</b></Navbar.Brand>
                <Form inline className="search-container">
                    <FormControl type = "text"
                                    className="search"
                                    placeholder = "Enter Stock Symbol"
                                    value = {props.value}
                                    onChange = {(e) => props.setSearchInput(e.target.value)}/>
                    <Button className="search-button" type="submit">Search</Button>
                </Form>
                <Navbar.Collapse className="justify-content-end">
                    <Navbar.Text className="total-votes">
                        
                    </Navbar.Text>
                </Navbar.Collapse>
            </Navbar>
        </div>
    )
}

export default Header;
