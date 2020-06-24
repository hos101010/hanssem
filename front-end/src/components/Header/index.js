import React from 'react';
import styled from 'styled-components';
import { FlexRowWrap } from '../globalComponents/FlexWrap.style';

const Div = styled.div`
    background-color: #F6F6F6;
    width: 100%;
    min-width: 1220px;
    height: 190px; 
    padding-top: 5px;
    span {
      display: inline-block;
      margin-top: 30px;
      margin-left: 10%;
      font-weight: light;
      font-size: 25px;
    }
    td{
      border-right: 1px solid lightgray;
      width: 40px;
      padding: 15px;
      text-align: center;
      span {
        font-size: 15px;
        font-weight: bold;
        margin : 0;
      overflow: hidden;
      height: 20px;
      }
    }
    table{
      width: 40%;
    }
`;

const NavBtn = styled.div`
  background-color: ${(props) => (props.color)};
  width: 300px;
  height: 40px;
  border : 1px solid lightgray;
  border-bottom : 0;
  display:flex;
  justify-content: center;
  margin-bottom: -1px;
  > * {
    margin: 10px 5px;
  }
  > h6 {
    margin-top: 15px;
  }
`;

function Header() {
  return (
    <div>
      <Div>
        <FlexRowWrap>
          <NavBtn color="white" style={{ textAlign: 'center', marginLeft: '10%' }}>
            <h4>한샘 닷컴</h4>
            <h6>한샘매장을 한눈에</h6>
          </NavBtn>
          <NavBtn color="#D5D5D5" style={{ textAlign: 'center' }}>
            <h4>한샘몰</h4>
            <h6>바로 사는 온라인몰</h6>
          </NavBtn>
        </FlexRowWrap>
        <div style={{
          height: '90px', width: '100%', backgroundColor: 'white', border: '1px solid lightgray',
        }}
        >
          <span>HANSSEM</span>
        </div>
        <table style={{
          height: '20%', width: '100%', backgroundColor: 'white', borderBottom: '1px solid lightgray',
        }}
        >
          <tbody>
            <tr>
              <td style={{ borderBottom: '3px solid black' }}><span>전체상품</span></td>
              <td><span>집꾸밈 사례</span></td>
              <td><span>아이디어</span></td>
              <td><span>매장 통합검색</span></td>
              <td><span>이벤트/기획전</span></td>
              <td style={{ backgroundColor: '#CC0001', color: 'white' }}>
                <span>빠른 상담신청</span>
              </td>
            </tr>
          </tbody>
        </table>
      </Div>
      <div style={{
        fontSize: '30px', paddingTop: '30px', height: '50px', width: '80%', minWidth: '1100px', marginLeft: '10%', backgroundColor: 'white', borderBottom: '1.5px solid black', borderTop: '1px solid lightgray',
      }}
      >
        가구

      </div>
    </div>
  );
}

export default Header;
