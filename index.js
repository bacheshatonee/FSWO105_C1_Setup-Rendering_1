import React from 'react';
import { render } from 'react-dom';

function HandsOn1() {
  return(
    <table>
  <tr>
    <th>Firstname</th>
    <th>Lastname</th>
  </tr>
  <tr>
    <td>Janet</td>
    <td>James</td>
  </tr>
  <tr>
    <td>John</td>
    <td>Jameson</td>
  </tr>
</table>
  )
}


render(
  <HandsOn1 />,
  document.getElementById('root')
)
/*


render(
  <TodoList todos={listItems} />,
  document.getElementById('root')
)
*/
