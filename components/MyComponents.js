import React from 'react';

import UserInfo from './UserInfo';
import DisplayInfo from './DisplayInfo'
class MyComponent extends React.Component {
    //JSXL viet code js ben trong code html

    state = {
        listUsers: [
            { id: 1, name: 'HoiDanIt', age: '30' },
            { id: 2, name: 'Eric', age: '31' },
            { id: 3, name: 'HaryPhamDev', age: '32' },

        ]
    }
    render() {
        // const myInfo = ['ab', 'c', 'd']

        return (
            <div>

                <UserInfo></UserInfo>
                <br />
                <br />
                <DisplayInfo listUsers={this.state.listUsers}></DisplayInfo>
            </div>

        );
    }
}

export default MyComponent;