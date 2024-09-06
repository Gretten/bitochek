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
        calories: number,
        fat: number,
        carbs: number,
        protein: number,
      ) {
        return { name, calories, fat, carbs, protein };
      }
      
      const rows = [
        createData('Bitcoin', 159, 6.0, 24, 4.0),
        createData('Ethereum', 237, 9.0, 37, 4.3),
        createData('Tether USD', 262, 16.0, 24, 6.0),
        createData('Solana', 305, 3.7, 67, 4.3),
        createData('Doge', 356, 16.0, 49, 3.9),
      ];

    return (
      <div className={classes['table-container']}>
        <div className={classes['table-header']}>
          <h4>{header}</h4>
          <Button color="secondary">ДОБАВИТЬ</Button>
        </div>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
            <TableHead>
              <TableRow>
                <TableCell>Название</TableCell>
                <TableCell align="right">Количество</TableCell>
                <TableCell align="right">Цена (USD)</TableCell>
                <TableCell align="right">Цена (RUB)</TableCell>
                <TableCell align="right">График за 7 дней</TableCell>
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
                  <TableCell align="right">{row.calories}</TableCell>
                  <TableCell align="right">{row.fat}</TableCell>
                  <TableCell align="right">{row.carbs}</TableCell>
                  <TableCell align="right">{row.protein}</TableCell>
                </TableRow>
              ))}
                <TableRow
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >                  
                <TableCell component="th" scope="row" colSpan={3}>
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