import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import renderer from 'react-test-renderer';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
});

// SNAPSHOT TESTS follow link for more details
// http://facebook.github.io/jest/docs/en/snapshot-testing.html#snapshot-testing-with-jest
it('enters numbers to display', () => {
  const app = renderer.create(<App />);
  expect(app.toJSON()).toMatchSnapshot();

  app.getInstance().handleReceiveInput('4');
  expect(app.toJSON()).toMatchSnapshot();

  app.getInstance().handleReceiveInput('64');
  expect(app.toJSON()).toMatchSnapshot();
});

it('clears screen', () => {
  const app = renderer.create(<App />);
  expect(app.toJSON()).toMatchSnapshot();

  app.getInstance().handleReceiveInput('4');
  expect(app.toJSON()).toMatchSnapshot();

  app.getInstance().handleReceiveInput('0');
  expect(app.toJSON()).toMatchSnapshot();
});

it('performs addition', () => {
  const app = renderer.create(<App />);
  expect(app.toJSON()).toMatchSnapshot();

  app.getInstance().handleReceiveInput('4');
  expect(app.toJSON()).toMatchSnapshot();

  app.getInstance().handleReceiveOperator('+');
  expect(app.toJSON()).toMatchSnapshot();

  app.getInstance().handleReceiveInput('7');
  expect(app.toJSON()).toMatchSnapshot();

  app.getInstance().handleReceiveOperator('=');
  expect(app.toJSON()).toMatchSnapshot();
});
