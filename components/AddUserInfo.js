import React, { useState } from 'react'

// class AddUserInfo extends React.Component {
//     state = {
//         name: '',
//         address: '',
//         age: ''

//     };
//     handleClick = (event) => {
//         console.log('>> Click me button');

//         this.setState({
//             name: 'Minh Lee',
//             age: Math.floor((Math.random() * 100) + 1)

//         })

//     };
//     handleOnMouseOver(event) {
//         console.log(event.pageX)

//     }
//     handleOnChangeName = (e) => {
//         this.setState({
//             name: e.target.value
//         })
//         // console.log(e.target.value)
//     }
//     handleOnChangeAge = (e) => {
//         this.setState({
//             age: e.target.value
//         })
//         // console.log(e.target.value)
//     }
//     handleOnSubmit = (e) => {
//         e.preventDefault();
//         // console.log(this.state)
//         this.props.handleAddNewUser({
//             id: Math.floor((Math.random() * 100) + 1) + '-random',
//             name: this.state.name,
//             age: this.state.age
//         })
//     }
//     render() {
//         return (
//             <>
//                 My name is {this.state.name} and I am {this.state.age}
//                 {/* <button onMouseOver={this.handleOnMouseOver}>Hover me</button> */}
//                 {/* <button onClick={(e) => { this.handleClick(e) }}>Click me</button> */}
//                 <form onSubmit={(e) => this.handleOnSubmit(e)}>
//                     <label>Your name: </label>
//                     <input type="text"
//                         value={this.state.name}
//                         onChange={(e) => this.handleOnChangeName(e)} />
//                     <label>Your age: </label>
//                     <input type="text"
//                         value={this.state.age}
//                         onChange={(e) => this.handleOnChangeAge(e)} />
//                     <button>Submit</button>
//                 </form>
//             </>
//         )
//     }
// }

const AddUserInfo = (props) => {

    const [name, setName] = useState('');
    const [age, setAge] = useState('');
    const [address, setAddress] = useState('');
    const handleClick = (event) => {
        console.log('>> Click me button');

        // this.setState({
        //     name: 'Minh Lee',
        //     age: Math.floor((Math.random() * 100) + 1)

        // })
        setName('Minh Lee');
        setAge(Math.floor((Math.random() * 100) + 1));


    };
    const handleOnMouseOver = (event) => {
        console.log(event.pageX)

    }
    const handleOnChangeName = (e) => {
        setName(e.target.value);
        // console.log(e.target.value)
    }
    const handleOnChangeAge = (e) => {
        setAge(e.target.value);

        // console.log(e.target.value)
    }
    const handleOnSubmit = (e) => {
        e.preventDefault();
        // console.log(this.state)
        props.handleAddNewUser({
            id: Math.floor((Math.random() * 100) + 1) + '-random',
            name: name,
            age: age
        })
    }
    return (
        <>
            My name is {name} and I am {age}
            {/* <button onMouseOver={this.handleOnMouseOver}>Hover me</button> */}
            {/* <button onClick={(e) => { this.handleClick(e) }}>Click me</button> */}
            <form onSubmit={(e) => handleOnSubmit(e)}>
                <label>Your name: </label>
                <input type="text"
                    value={name}
                    onChange={(e) => handleOnChangeName(e)} />
                <label>Your age: </label>
                <input type="text"
                    value={age}
                    onChange={(e) => handleOnChangeAge(e)} />
                <button>Submit</button>
            </form>
        </>
    )

}

export default AddUserInfo