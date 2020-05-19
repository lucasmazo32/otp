/* eslint-disable array-callback-return */
import React from 'react';
import {
  Link,
} from 'react-router-dom';
import showData from '../helper/showData';

export default function Nav() {
  showData('How I met your Mother');
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
