import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import classes from './classes.module.scss'
import { AssetTableProps } from './types';
import { defaultConfig } from './config';

export const AssetTable = ({ header, rows, total, columns = defaultConfig }: AssetTableProps) => {

  const summaryLength = columns.length - 1;

    return (
      <div className={classes['table-container']}>
        <div className={classes['table-header']}>
          <h4>{header}</h4>
        </div>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
            <TableHead>
              <TableRow>
                {
                  columns.map((column) => {
                    const { name, align } = column;

                    return (
                      <TableCell align={align || "inherit"}>{name}</TableCell>
                    )
                  })
                }
              </TableRow>
            </TableHead>
            <TableBody>
              {rows?.map((row) => {
                const { count, price, sum, name } = row;
                
                return (
                  <TableRow
                    key={name}
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                  >
                    <TableCell component="th" scope="row">
                      {name}
                    </TableCell>
                    <TableCell align="right">{count}</TableCell>
                    <TableCell align="right">{price}</TableCell>
                    <TableCell align="right">{sum}</TableCell>
                  </TableRow>           
              )})}
             <TableRow
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                  >                  
                    <TableCell component="th" scope="row"></TableCell>
                    <TableCell colSpan={summaryLength} align="right">{total}</TableCell>
                </TableRow>   
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    )
}

