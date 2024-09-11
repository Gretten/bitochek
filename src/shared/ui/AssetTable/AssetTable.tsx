import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import classes from './classes.module.scss'

  interface Row {
    name: string,
    count: number,
    price: number,
    sum: number,
  }

  interface Data {
    rows: Row[];
    total: number;
  }

  interface Params {
    data?: Data;
    header: string;
  }


export const AssetTable = ({ header, data }: Params) => {
  
    return (
      <div className={classes['table-container']}>
        <div className={classes['table-header']}>
          <h4>{header}</h4>
        </div>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
            <TableHead>
              <TableRow>
                <TableCell>Название</TableCell>
                <TableCell align="right">Количество</TableCell>
                <TableCell align="right">Цена</TableCell>
                <TableCell align="right">Сумма</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {data && data?.rows?.map((row) => (
                <>
                  <TableRow
                    key={row.name}
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                  >
                    <TableCell component="th" scope="row">
                      {row.name}
                    </TableCell>
                    <TableCell align="right">{row.count}</TableCell>
                    <TableCell align="right">{row.price}</TableCell>
                    <TableCell align="right">{row.sum}</TableCell>
                  </TableRow>
                  <TableRow
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                  >                  
                  <TableCell component="th" scope="row" colSpan={2}>
                    ИТОГО
                  </TableCell>
                  <TableCell rowSpan={3} />
                  <TableCell align="right">{data?.total}</TableCell>
                </TableRow>              
              </>
              )) }
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    )
}

