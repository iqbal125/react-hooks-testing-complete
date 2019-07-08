import React from 'react';
import ReactDOM from 'react-dom';
import TestHookContext from '../test_hook_context.js';
import {act, render, fireEvent, cleanup} from '@testing-library/react';
import App from '../../../App'

import Context from '../../store/context';

afterEach(cleanup)

it('Context value is updated by child component', () => {

   const { container, getByText } = render(<App>
                                            <Context.Provider>
                                             <TestHookContext />
                                            </Context.Provider>
                                           </App>);

   expect(getByText(/Some/i).textContent).toBe("Some Text")

   fireEvent.click(getByText("Change Text"))

   expect(getByText(/Some/i).textContent).toBe("Some Other Text")
})
