import React from 'react'
class calcvalues extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            result: 0
        }
    }
    print = () => {
        alert('ok')
        const { result } = this.state
        alert(result)
    }
    addition = () => {
        //const { counterValue } = this.state
        let num1=parseInt(document.getElementById("additionForm").elements.namedItem("number1").value)
        let num2=parseInt(document.getElementById("additionForm").elements.namedItem("number2").value)
        // const { result } = this.state
        // alert(result)
        alert(num1 + num2)
        // this.setState({
        //     result: result + 1
        // })
        // this.print()
    }
    subtraction = () => {
        //const { counterValue } = this.state
        let num1=parseInt(document.getElementById("subtractionForm").elements.namedItem("number1").value)
        let num2=parseInt(document.getElementById("subtractionForm").elements.namedItem("number2").value)
        alert(num1 - num2)
        // this.setState({
        //     result: num1 - num2
        // })
        //this.print()
    }
    multiplication = () => {
        //const { counterValue } = this.state
        let num1=parseInt(document.getElementById("multiplicationForm").elements.namedItem("number1").value)
        let num2=parseInt(document.getElementById("multiplicationForm").elements.namedItem("number2").value)
        alert(num1 * num2)
        // this.setState({
        //     result: num1 * num2
        // })
        //this.print()
    }
    division = () => {
        // const { counterValue } = this.state
        let num1=parseInt(document.getElementById("divisionForm").elements.namedItem("number1").value)
        let num2=parseInt(document.getElementById("divisionForm").elements.namedItem("number2").value)
        alert(num1 / num2)
        // this.setState({
        //     result: num1 / num2
        // })
        //this.print()
    }
    // submitLoginDetails = () => {
    //    let number1 = document.getElementById('number1').value
    //     let number2 = document.getElementById('number2').value

    // }
    render() {
        return (
            <div>
            <div>
                <form id="additionForm" onSubmit={this.addition}>
                    <br /><span>number1 : </span><input type='number' id='number1' />
                    <br /><span>number2 : </span><input type='number' id='number2' />
                    <br />add<input type='submit' />
                </form>
            </div>
            <div>
                <form id="subtractionForm" onSubmit={this.subtraction}>
                    <br /><span>number1 : </span><input type='number' id='number1' />
                    <br /><span>number2 : </span><input type='number' id='number2' />
                    <br />subtraction<input type='submit' />
                </form>
                </div>
                <div>
                <form id="multiplicationForm" onSubmit={this.multiplication}>
                    <br /><span>number1 : </span><input type='number' id='number1' />
                    <br /><span>number2 : </span><input type='number' id='number2' />
                    <br />multiplication<input type='submit' />
                </form>
                </div>
                <div>
                <form id="divisionForm" onSubmit={this.division}>
                    <br /><span>number1 : </span><input type='number' id='number1' />
                    <br /><span>number2 : </span><input type='number' id='number2' />
                    <br />division<input type='submit' />
                </form>
                </div>
            </div>
        )
    }
}
export default calcvalues