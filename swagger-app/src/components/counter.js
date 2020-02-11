import React from 'react'

// const Counter = ({ updatedValue }) => (
//     // constructor(props) {
//     //     super(props)
//     //     this.state = {
//     //         counterValue: 0
//     //     }
//     // }
//     // incrementCounter = () => {
//     //     const { counterValue } = this.state
//     //     this.setState({
//     //         counterValue: counterValue + 1
//     //     })
//     // }
//     // decrementCounter = () => {
//     //     const { counterValue } = this.state
//     //     this.setState({
//     //         counterValue: counterValue - 1
//     //     })
//     // }
//         <div>
//             {/* <button onClick={this.incrementCounter}>increment</button> */}
//             <h1>{updatedValue}</h1>
//             {/* <button onClick={this.decrementCounter}>decrement</button>*/}
//         </div> 
// )
// export default Counter
class Counter extends React.Component{
    constructor(){
      super();
      this.state={
        text:''
          }
          this.passingProps = this.passingProps.bind(this);
      }
    passingProps(e){
      var newInput=e.target.value;
      //alert(newInput);
     this.setState({
       text:newInput
      });
    this.props.updatedValue(this.state.text);
    }
  
    render(){
      return(
        <div>
        <input type="text" placeholder="please input a name..." onChange={this.passingProps} />
  
          </div>
  
      )
    }
  }
  export default Counter;
