import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";
import userEvent from "@testing-library/user-event";
import { act } from "react-dom/test-utils";

test('should show the initial increment value', () => {  
  const element = render(<App initialValue={777} />);

  expect(element.getByTestId("count")).toHaveTextContent("777");
});

test('should default to 0 when initial value is not supplied', () => {  
  const element = render(<App />);

  expect(element.getByTestId("count")).toHaveTextContent("0");
});

test("should increment value when + button is pressed", async () => {
  const element = render(<App initialValue={1} />);
  
  await act(async () => {
    const btnAdd = element.getByText("+");
    userEvent.click(btnAdd);
  });

  expect(element.getByTestId("count")).toHaveTextContent("2");
});

test("should decrement value when - button is pressed", async () => {
  const element = render(<App initialValue={1} />);
  
  await act(async () => {
    const btnAdd = element.getByText("-");
    userEvent.click(btnAdd);
  });

  expect(element.getByTestId("count")).toHaveTextContent("0");
});

test("should reset value to 0 when reset button is pressed", async() => {
  const element = render(<App initialValue={7777} />);
  
  await act(async () => {
    const btnAdd = element.getByText("Reset");
    userEvent.click(btnAdd);
  });

  expect(element.getByTestId("count")).toHaveTextContent("0");
});

test("should no longer decrement to negative values when value is already 0", async () => {
  const element = render(<App initialValue={0} />);
  
  await act(async () => {
    const btnAdd = element.getByText("-");
    userEvent.click(btnAdd);
  });

  expect(element.getByTestId("count")).toHaveTextContent("0");
});
