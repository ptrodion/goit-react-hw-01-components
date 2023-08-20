import styled from 'styled-components';

export const Table = styled.table`
  width: 900px;
  border-collapse: collapse;
`;

export const TableHead = styled.thead`
  background-color: #1346b0;
  font-weight: bold;
`;

export const TableRow = styled.tr`
  &:nth-child(even) {
    background-color: #f2f2f2;
  }
`;

export const TableHeader = styled.th`
  padding: 10px;
  border: 1px solid #ccc;
  color: #fcfefefa;
`;
