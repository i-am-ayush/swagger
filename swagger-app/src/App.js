import React,{ Component }from 'react';
import './App.css';
import Counter from './components/counter'
import Login from './components/login'
import Calcvalues from './components/calcvalues'
import Checkingscss from './components/checkingscss'
import SwaggerUI, {presets} from 'swagger-ui';
import 'swagger-ui/dist/swagger-ui.css';
// import SwaggerUI, {presets} from "swagger-ui-react"
// import "swagger-ui-react/swagger-ui.css"


//import Swagger1UI from './Swagger';

// class App extends React.Component {
//   constructor(props) {
//     super(props)
//     this.state = {
//         counterValue: 0
//     }
// }
// incrementCounter = () => {
//     const { counterValue } = this.state
//     this.setState({
//         counterValue: counterValue + 1
//     })
// }
// decrementCounter = () => {
//     const { counterValue } = this.state
//     this.setState({
//         counterValue: counterValue - 1
//     })
// }
// decrementCounter1 = (abc) => {
//  console.log(abc);
// }
//   render() {
//     const { counterValue } = this.state
//     return (
//       <div>
//   <div class="meter">
//   <span style={{ width: `100%`}}></span>
// </div>
//          <button onClick={this.incrementCounter}>increment</button>
//         <Counter updatedValue={this.decrementCounter1} />
//         <button onClick={this.decrementCounter}>decrement</button>
//         {/* <Login/> */}
//         {/* <Checkingscss/> */}
//         {/* <Calcvalues/> */}
//       </div>
//     )
//   } 
// }

// const DisableTryItOutPlugin = function() {
//   return {
//     statePlugins: {
//       spec: {
//         wrapSelectors: {
//           allowTryItOutFor: () => () => false
//         }
//       }
//     }
//   }
// }

// Create the layout component
class AugmentingLayout extends React.Component {
  render() {
    const {
      getComponent
    } = this.props
    const BaseLayout = getComponent("BaseLayout", true)
    console.log('okooko')
    return (
      <div>
        <div className="myCustomHeader">
          <h1>I have a custom header above Swagger-UI!</h1>
        </div>
        <BaseLayout backgroundColor='white'/>
      </div>
    )
  }
}
// Create the plugin that provides our layout component
const AugmentingLayoutPlugin = () => {
  return {
    components: {
      AugmentingLayout: AugmentingLayout
    }
  }
}

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      definitionLink: "http://localhost:3000/public/swagger.json",
    }
  }

   componentDidMount() {
    SwaggerUI({
      domNode: document.getElementById("api-data"),
      url: this.state.definitionLink,
      plugins: [
        AugmentingLayoutPlugin,
      ],
      layout: "AugmentingLayout",
    })
    
 }


  render() {
    const x= [ AugmentingLayoutPlugin ];
      //const sample_spec = getSpec();

      return (
        // <SwaggerUI url= {this.state.definitionLink}
        // plugins= {x}
        // layout= "AugmentingLayout"></SwaggerUI>
                //  plugins= {x}/>
        <div className="App">
        <div id="api-data" />
      // </div>
      )
  }
}

export default App;
