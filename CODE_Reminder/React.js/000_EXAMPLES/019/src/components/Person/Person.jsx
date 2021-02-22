import React from 'react';

export function Person({ index, name, occupation }) {
   return <p>{index}. {name} ({occupation})</p>;
}
