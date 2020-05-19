/* eslint-disable array-callback-return */
import React from 'react';
import {
  Link,
} from 'react-router-dom';

export default function Nav() {
  return (
    <div>
      <form>
        <select>
          <option>Comedy</option>
          <option>Romance</option>
        </select>
        <input type="text" />
      </form>
      <Link to="/test">test</Link>
    </div>
  );
}
