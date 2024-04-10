import React from "react";
import UserInfo from "./AddUserInfo";

class DisplayInfo extends React.Component {
    handleShowHide() {
        this.setState({
            isShowListUsers: !this.state.isShowListUsers
        })
    }
    state = {
        isShowListUsers: true
    }
    render() {
        const { listUsers } = this.props;
        console.log(listUsers)
        console.table(listUsers)
        return (
            <div>
                display info
                <div>
                    <span onClick={() => this.handleShowHide()}>{this.state.isShowListUsers === true ? "Hide list Users" : "Show list Users"}</span>
                </div>
                {this.state.isShowListUsers &&
                    <div>
                        {listUsers.map((user) => {

                            return (

                                <div key={user.id} className={+user.age > 18 ? "green" : "red"}>
                                    <div> My name 's {user.name}</div>
                                    <div> My age 's {user.age}</div>
                                </div>
                            )
                        })}
                    </div>
                }
            </div>
        )
    }
}

export default DisplayInfo