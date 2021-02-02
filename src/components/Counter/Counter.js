import React from 'react';

class Counter extends React.Component{

    // constructor(props) {
    //     super(props)
    //     this.state = {
    //         number: 0,
    //     }
    // }

    state = {
        number: 0,
    }

    increase = () => {
        this.setState({
            number: this.state.number + 1,
        })
    }
        
    


    render() {
        return <>
            <h1>Counter</h1>
            <p className={'number'}>{this.state.number}</p>
            <button className='plus' onClick={this.increase}>embiggen</button>
        </>
    }
}
export default Counter;
