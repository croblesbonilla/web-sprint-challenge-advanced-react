import React from "react";
import App from '../App';
import useForm from '../hooks/useForm';
import { render } from "@testing-library/react";

// Write up the two tests here and make sure they are testing what the title shows

test("form header renders", () => {
    const { getByText } = render (<App/>);
    const header = getByText(/React Plants/i);
    expect(header).toBeInTheDocument();
});

test("form shows success message on submit with form details", () => {
    const { getByText } = render (<useForm/>);
    const message = getByText(/You have ordered some plants/i);
});
