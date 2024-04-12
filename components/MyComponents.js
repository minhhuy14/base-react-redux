import React, { useState } from 'react';

import AddUserInfo from './AddUserInfo';
import DisplayInfo from './DisplayInfo'
// class MyComponent extends React.Component {
//     //JSXL viet code js ben trong code html

//     state = {
//         listUsers: [
//             { id: 1, name: 'HoiDanIt', age: '16' },
//             { id: 2, name: 'Eric', age: '31' },
//             { id: 3, name: 'HaryPhamDev', age: '62' },

//         ]
//     }
//     handleAddNewUser = (userObj) => {
//         this.setState({
//             listUsers: [userObj, ...this.state.listUsers]
//         })
//         console.log(userObj)
//     }

//     handleDeleteUser = (userId) => {
//         let listUsersClone = this.state.listUsers;
//         listUsersClone = listUsersClone.filter(item => item.id !== userId);
//         this.setState({
//             listUsers: listUsersClone
//         })
//     }

//     render() {
//         // const myInfo = ['ab', 'c', 'd']
//         const test = { name: 'Huy', age: '20' }
//         return (
//             <>
//                 {/* {console.log(test)} */}
//                 {JSON.stringify(test)}
//                 <AddUserInfo handleAddNewUser={this.handleAddNewUser}></AddUserInfo>
//                 <br />
//                 <br />
//                 <DisplayInfo listUsers={this.state.listUsers}
//                     handleDeleteUser={this.handleDeleteUser}
//                 ></DisplayInfo>
//             </>

//         );
//     }
// }

const MyComponent = (props) => {
    const test = { name: 'Huy', age: '20' }

    const [listUsers, setListUsers] = useState([
        { id: 1, name: 'HoiDanIt', age: '16' },
        { id: 2, name: 'Eric', age: '31' },
        { id: 3, name: 'HaryPhamDev', age: '62' },

    ])

    const handleAddNewUser = (userObj) => {
        setListUsers([userObj, ...listUsers]
        );
        console.log(userObj)
    }

    const handleDeleteUser = (userId) => {
        let listUsersClone = listUsers;
        listUsersClone = listUsersClone.filter(item => item.id !== userId);
        setListUsers(listUsersClone);
    }
    return (
        // const myInfo = ['ab', 'c', 'd']

        <>
            {/* {console.log(test)} */}
            {JSON.stringify(test)}
            <AddUserInfo handleAddNewUser={handleAddNewUser}></AddUserInfo>
            <br />
            <br />
            <DisplayInfo listUsers={listUsers}
                handleDeleteUser={handleDeleteUser}
            ></DisplayInfo>
        </>

    );

}

export default MyComponent;


