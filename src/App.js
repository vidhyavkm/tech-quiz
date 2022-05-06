import React from 'react';
import Intro from './Components/Intro/Intro';
class App extends React.Component{
  constructor(props){
    super(props);
  }
  render(){
    return (
      <div className = "App">
        <div className = "Intro">
<Intro />
        </div>
      </div>
    )
  }
}
export default App;