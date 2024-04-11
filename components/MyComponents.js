import React from 'react';

import AddUserInfo from './AddUserInfo';
import DisplayInfo from './DisplayInfo'
class MyComponent extends React.Component {
    //JSXL viet code js ben trong code html

    state = {
        listUsers: [
            { id: 1, name: 'HoiDanIt', age: '16' },
            { id: 2, name: 'Eric', age: '31' },
            { id: 3, name: 'HaryPhamDev', age: '62' },

        ]
    }
    handleAddNewUser = (userObj) => {
        this.setState({
            listUsers: [userObj, ...this.state.listUsers]
        })
        console.log(userObj)
    }
    render() {
        // const myInfo = ['ab', 'c', 'd']

        return (
            <>

                <AddUserInfo handleAddNewUser={this.handleAddNewUser}></AddUserInfo>
                <br />
                <br />
                <DisplayInfo listUsers={this.state.listUsers}
                ></DisplayInfo>
            </>

        );
    }
}

export default MyComponent;


