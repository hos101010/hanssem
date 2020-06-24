import React from 'react';
import styled from 'styled-components';

const Div = styled.div`
    margin-right: 10px;
    > table {
      width: 100px;
      background-color: white;
      > tr {
        > div {
          text-align: right;
          padding-right: 10px;
          padding-top: 10px;
          font-weight: bold;
          border-bottom : 1px solid lightgray;
          height: 35px;
          width: 150px;
          background-color: white;
        }
      }
    }   
`;

const a = [];
for (let i = 0; i < 15; i++) {
  a.push(i);
}
function LeftNav() {
  return (
    <Div>
      <table>
        {a.map((comp, i) => <tr key={i + 1}><div>+</div></tr>)}
      </table>
    </Div>
  );
}

export default LeftNav;
