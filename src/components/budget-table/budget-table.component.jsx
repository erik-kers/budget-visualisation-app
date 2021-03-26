import React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

const BudgetTable = () => (
  <TableContainer>
    <Table aria-label="simple table">
      <TableHead>
        <TableRow>
          <TableCell>Name</TableCell>
          <TableCell>Cost</TableCell>
          <TableCell>Lock?</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        <TableRow>
          <TableCell>Hyra</TableCell>
          <TableCell>10000</TableCell>
          <TableCell>Locked</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>Mat</TableCell>
          <TableCell>2000</TableCell>
          <TableCell>Locked</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>Nöjen</TableCell>
          <TableCell>2000</TableCell>
          <TableCell>Lock</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>Sparande</TableCell>
          <TableCell>1500</TableCell>
          <TableCell>Locked</TableCell>
        </TableRow>
      </TableBody>
    </Table>
  </TableContainer>
);

export default BudgetTable;
