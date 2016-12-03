import React from 'react';

class App extends React.Component {
   
   constructor() {
      super();
		
      this.state = {
         data: 
         [
            {
               "name":"Oren"
            },				
            {
               "name":"Lior"
            },
            {
               "name":"Alon"
            }
         ]
      }
   }
   
   
   render() {
      
      return (
          <div>
            <h1>Display Name</h1>
            <Button/>
            <table>
               <tbody>
                  {this.state.data.map((person, i) => <TableRow key = {i} data = {person} />)}
               </tbody>
            </table>
         </div>
      );
   }
}

class Button extends React.Component {
     
   render() {
       var myStyle = {
         fontSize: 20,
         color: '#000000'
      }
    
      
      return (
         <div>
            <button type="button" style = {myStyle} >Names</button>
         </div>
      );
   }
}


class TableRow extends React.Component {
   render() {
      return (
         <tr>
            <td>{this.props.data.name}</td>
         </tr>
      );
   }
}



export default App;
