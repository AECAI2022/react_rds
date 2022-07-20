import React,{Component} from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  constructor(props)
  {

    super(props);
    this.state={
      HouseID:'',
      ZipCode:'',
      Stories:'',
      Bedrooms:'',
      Baths:'',
      Garages:'',
      TotalArea:'',
      Porches:'',
      Basement:''
    }
  }

  handleChange= (event) =>{
    event.preventDefault();
    const {name, value} = event.target;
    this.setState({[name]:value});
    console.log(this.state);
  }

  render(){
    return (
        <div className="App">
          <form method='post' action='http://localhost:3001'>
            <div className='HouseID'>
              <label htmlFor='HouseID'>Enter HouseID:</label>
              <input type='text' name='HouseID' onChange={this.handleChange}/>
            </div>
            <div className='ZipCode'>
              <label htmlFor='ZipCode'>Enter ZipCode:</label>
              <input type='text' name='ZipCode' onChange={this.handleChange}/>
            </div>
            <div className='Stories'>
              <label htmlFor='Stories'>Enter Stories:</label>
              <input type='text' name='Stories' onChange={this.handleChange}/>
            </div>
            <div className='Bedrooms'>
              <label htmlFor='Bedrooms'>Enter Bedrooms:</label>
              <input type='text' name='Bedrooms' onChange={this.handleChange}/>
            </div>
            <div className='Baths'>
              <label htmlFor='Baths'>Enter Baths:</label>
              <input type='text' name='Baths' onChange={this.handleChange}/>
            </div>
            <div className='Garages'>
              <label htmlFor='Garages'>Enter Garages:</label>
              <input type='text' name='Garages' onChange={this.handleChange}/>
            </div>
            <div className='TotalArea'>
              <label htmlFor='TotalArea'>Enter TotalArea:</label>
              <input type='text' name='TotalArea' onChange={this.handleChange}/>
            </div>
            <div className='Porches'>
              <label htmlFor='Porches'>Enter Porches:</label>
              <input type='text' name='Porches' onChange={this.handleChange}/>
            </div>
            <div className='Basement'>
              <label htmlFor='Basement'>Enter Basement:</label>
              <input type='text' name='Basement' onChange={this.handleChange}/>
            </div>

            <div className='submit'>
              <input type='submit'/>
            </div>
          </form>

        </div>
    );
  }
}
export default App;
