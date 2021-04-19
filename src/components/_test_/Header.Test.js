import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import  Header  from '../Header';
import { FormControl } from 'react-bootstrap';

it("Test Search Button", () => {
    const {queryByTestId, queryByPlaceHolderName} = render(<Header/>)
    fireEvent.Event.onclick(<Button/>)
    expect(queryByTestId('search-button')).toBeTruthy();
})

it("Test Search Button", () => {
    const {queryByTestId, queryByPlaceHolderName} = render(<Header/>)
    fireEvent.Event.onclick(<FormControl/>)
    expect(queryByTestId('input-field')).toBeTruthy();
})


