import { TransactionHistoryList } from './TransactionHistoryList/TransactionHistoryList';
import {
  Table,
  TableHead,
  TableRow,
  TableHeader,
} from './TransactionHistory.styles';

import transactions from './transactions.json';

export const TransactionHistory = () => {
  return (
    <Table>
      <TableHead>
        <TableRow>
          <TableHeader>Type</TableHeader>
          <TableHeader>Amount</TableHeader>
          <TableHeader>Currency</TableHeader>
        </TableRow>
      </TableHead>

      <TransactionHistoryList dates={transactions} />
    </Table>
  );
};
