/* eslint-disable testing-library/prefer-screen-queries */
/* eslint-disable testing-library/await-async-query */
import React from "react";
import Home from "./Home";
import { render } from '@testing-library/react'
import '@testing-library/jest-dom'

describe('homepage testing', () => {

    it('should render a list of movies',  () => {

        const { findAllByRole } =  render(<Home />)
        expect(findAllByRole('div')).toBeTruthy()
        
    })
        

})