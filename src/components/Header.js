import React from 'react';
import { Button, Navbar, Form, FormControl } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/Header.css';

const Header = (props) => {

    const clicked = () =>  {
        console.log('the button was clicked');
    }



    return (
        <div>
            <Navbar className="row">
                <Navbar.Brand><b className="title-bold">High and Low Dashboard</b></Navbar.Brand>
                <Form inline className="border-left ml-auto">
                    <FormControl type = "text"
                                    className="search"
                                    placeholder = "Enter Stock Symbol"
                                    value = {props.value}
                                    onChange = {(e) => props.setSearchInput(e.target.value)}/>
                    <Button className="search-button" type="submit" onClick={ clicked() }>Search</Button>
                </Form>
            </Navbar>
        </div>
    )
}

export default Header;
