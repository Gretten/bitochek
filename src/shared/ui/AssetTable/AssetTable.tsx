import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import classes from './classes.module.scss'
import Button from '@mui/material/Button/Button';

export const AssetTable = ({ header, type, data }) => {

    function createData(
        name: string,
        count: number,
        price: number,
        sum: number,
      ) {
        return { name, count, price, sum };
      }
      
      const rows = [
        createData('Bitcoin', 0.875633, 57400, (0.0875633 * 57400)),
        createData('Ethereum', 237, 9.0, 37),
        createData('Tether USD', 262, 16.0, 24),
        createData('Solana', 305, 3.7, 67),
        createData('Doge', 356, 16.0, 49),
      ];

    return (
      <div className={classes['table-container']}>
        <div className={classes['table-header']}>
          <h4>{header}</h4>
          <div>
            <Button color="secondary">УДАЛИТЬ</Button>
            <Button color="info">ДОБАВИТЬ</Button>
          </div>

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
              {rows.map((row) => (
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
              ))}
                <TableRow
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >                  
                <TableCell component="th" scope="row" colSpan={2}>
                   ИТОГО
                </TableCell>
                <TableCell rowSpan={3} />
                <TableCell align="right">{100000}</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    )
}

