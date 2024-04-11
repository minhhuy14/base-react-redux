import React from 'react'

class AddUserInfo extends React.Component {
    state = {
        name: '',
        address: '',
        age: ''

    };
    handleClick = (event) => {
        console.log('>> Click me button');

        this.setState({
            name: 'Minh Lee',
            age: Math.floor((Math.random() * 100) + 1)

        })

    };
    handleOnMouseOver(event) {
        console.log(event.pageX)

    }
    handleOnChangeName = (e) => {
        this.setState({
            name: e.target.value
        })
        // console.log(e.target.value)
    }
    handleOnChangeAge = (e) => {
        this.setState({
            age: e.target.value
        })
        // console.log(e.target.value)
    }
    handleOnSubmit = (e) => {
        e.preventDefault();
        // console.log(this.state)
        this.props.handleAddNewUser({
            id: Math.floor((Math.random() * 100) + 1) + '-random',
            name: this.state.name,
            age: this.state.age
        })
    }
    render() {
        return (
            <>
                My name is {this.state.name} and I am {this.state.age}
                {/* <button onMouseOver={this.handleOnMouseOver}>Hover me</button> */}
                {/* <button onClick={(e) => { this.handleClick(e) }}>Click me</button> */}
                <form onSubmit={(e) => this.handleOnSubmit(e)}>
                    <label>Your name: </label>
                    <input type="text"
                        value={this.state.name}
                        onChange={(e) => this.handleOnChangeName(e)} />
                    <label>Your age: </label>
                    <input type="text"
                        value={this.state.age}
                        onChange={(e) => this.handleOnChangeAge(e)} />
                    <button>Submit</button>
                </form>
            </>
        )
    }
}

export default AddUserInfo