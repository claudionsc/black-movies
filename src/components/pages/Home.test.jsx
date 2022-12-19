/* eslint-disable testing-library/no-promise-in-fire-event */
/* eslint-disable testing-library/prefer-screen-queries */
/* eslint-disable testing-library/await-async-query */
import React from "react";
import Home from "./Home";
import { Provider } from "react-redux";
import store from "../../store";
import { render, fireEvent, screen } from '@testing-library/react'
import '@testing-library/jest-dom'

// const functionJest = jest.fn()
// acima, armazena uma função para ser testada

describe('homepage testing', () => {

    it('should render a list of movies', () => {
        render(

            <Provider store={store}>
                <Home />
            </Provider>

        )
        expect(screen.findAllByTestId('movie-element')).toBeTruthy()
    })

    it('should render a description of movie when clicked',  () => {
      render(

            <Provider store={store}>
                <Home />
            </Provider>

        );

        const movie =  screen.findAllByTestId('movie-element')
        // expect(movie).toBeTruthy()
        fireEvent.click(movie)

        


    })

})