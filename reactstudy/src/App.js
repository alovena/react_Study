import React from 'react';
import './App.css';
import Customer from './components/Customer'
import CustomerP from './components/Customer'
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
    </div>
    )
  }
}
export default App;
