import React from 'react';
import './App.css';
import Customer from './components/Customer';
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableBody from '@material-ui/core/TableBody';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import Button from '@material-ui/core/Button';
const customer=[
  {'id':1,
  'image':'https://placeimg.com/64/64/any/1',
  'name':'서현식',
  'age':'26'},
  {'id':2,
  'image':'https://placeimg.com/64/64/any/2',
  'name':'장은수',
  'age':'26'},
  {'id':3,
  'image':'https://placeimg.com/64/64/any/3',
  'name':'손재기',
  'age':'26'},
]
class App extends React.Component{
  render(){
    return(
    <div>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>
              번호
            </TableCell>
            <TableCell>
              이름
            </TableCell>
            <TableCell>
              나이
            </TableCell>
            <TableCell>
              이미지
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
        {
       customer.map(c=>{
        return(
          <Customer
          key={c.id}
          id={c.id}
          name={c.name}
          age={c.age}
          image={c.image}
          />
        );
      })
      }
        </TableBody>
      </Table>
      <Button variant="contained" color="primary">
      Hello World
    </Button>
    </div>
    )
  }
}
export default App;
