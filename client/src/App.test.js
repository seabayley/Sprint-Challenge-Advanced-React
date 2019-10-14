import React from 'react';
import { render } from "@testing-library/react";
import App from './App';
import { PlayerCard } from './components/PlayerCard'
import { PlayerList } from './components/PlayerList'

test("Creates a PlayerCard component for each player", () => {
  const props = [
    { name: 'chris', country: 'United States', searches: 3, key: 1 },
    { name: 'bob', country: 'France', searches: 1, key: 1 }
  ]
  const { queryByText } = render(<PlayerList playerData={props} />)
  expect(queryByText(/chris/i)).toBeTruthy();
  expect(queryByText(/bob/i)).toBeTruthy();
});

test("player data is displayed by the card", () => {
  const props = { name: 'chris', country: 'United States', searches: 3, key: 1 }
  const { queryByText } = render(<PlayerCard player={props} />)
  expect(queryByText(/chris/i)).toBeTruthy();
});