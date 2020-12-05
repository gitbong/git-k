import styled from "styled-components";

export const Page = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100vh;
  min-height: 700px;
  background: white;
`;
export const Header = styled.header`
  display: flex;
  flex: 0 0 auto;
  justify-content: space-between;
  border-bottom: 1px solid #eee;
  line-height: 3.5rem;
  height: 3.5rem;
  padding: 0 1rem;
`;
export const Main = styled.main`
  flex: 1 1 auto;
  padding: 1rem;
`;
export const Footer = styled.footer`
  flex: 0 0 auto;
  background: blue;
`;

export const Logo = styled.h1`
  font-size: 1.5rem;
  padding: 0;
  margin: 0;
  font-weight: bold;
  letter-spacing: 1px;
  span:nth-child(1) {
    color: #4185f5;
  }
  span:nth-child(2) {
    color: #ea4436;
  }
`;

export const ExpendIcon = styled.span`
  display: inline-block;
  width: 20px;
  cursor: pointer;
  font-weight: bold;
  color: #ea4436;
  font-size: medium;
`;

export const ResponseButton = styled.button`
  display: inline-block;
  height: 1.5rem;
  line-height: 1;
  padding: 5px 10px;
  margin-right: 1rem;
  background: ${({ active }) => (active ? "#34a854" : "#eee")};
  color: ${({ active }) => (active ? "white" : "#666")};
  border: none;
  border-radius: 100px;
  cursor: pointer;
  appearance: none;
  transition: all 0.3s ease;
  overflow: hidden;
  white-space: nowrap;
`;

export const Table = styled.table`
  width: 100%;
  th {
    text-align: left;
    font-size: medium;
    padding: 0 10px;
  }
  td {
    padding: 0 10px;
  }
`;
