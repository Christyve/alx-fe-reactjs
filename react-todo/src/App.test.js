import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

test('renders the todo list heading', () => {
  render(<App />);
  const headingElement = screen.getByText(/todo list/i);
  expect(headingElement).toBeInTheDocument();
});

test('renders default todos', () => {
  render(<App />);
  expect(screen.getByText(/learn react/i)).toBeInTheDocument();
  expect(screen.getByText(/build a todo app/i)).toBeInTheDocument();
});

test('can add a new todo', () => {
  render(<App />);

  const inputElement = screen.getByTestId('todo-input');
  const addButton = screen.getByText(/add/i);

  // type into the input
  fireEvent.change(inputElement, { target: { value: 'Write tests' } });

  // click the add button (form submit)
  fireEvent.click(addButton);

  // check if new todo appears in the document
  expect(screen.getByText(/write tests/i)).toBeInTheDocument();
});
