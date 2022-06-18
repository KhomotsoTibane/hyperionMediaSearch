import React from 'react';
import ReactTestRenderer from 'react-test-renderer';

test('the fetch data has resultCount and Results', () => {
  return fetch("http://itunes.apple.com/search?term=drake&media=all&limit=30")
  .then(res => res.json()).then(data => {
    expect(data).toHaveProperty(['resultCount']);
    expect(data).toHaveProperty(['results']);
   
  });
});
