import React from "react";
import UserInfo from "./AddUserInfo";
import './DisplayInfo.scss'
import logo from './../logo.svg';
class DisplayInfo extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            isShowListUsers: true
        }
    }
    handleShowHide() {
        this.setState({
            isShowListUsers: !this.state.isShowListUsers
        })
    }

    render() {
        const { listUsers } = this.props;
        console.log(listUsers)
        console.table(listUsers)
        return (
            <div className='display-info-container'>
                {/* <img src={logo} /> */}
                <div>
                    <span onClick={() => this.handleShowHide()}>{this.state.isShowListUsers === true ? "Hide list Users" : "Show list Users"}</span>
                </div>
                {this.state.isShowListUsers &&
                    <>
                        {
                            listUsers.map((user) => {

                                return (

                                    <div key={user.id} className={+user.age > 18 ? "green" : "red"}>

                                        {/* <div style={{ color: 'yellow', paddingTop: '50px' }}> My name 's {user.name}</div> */}
                                        <div > My name 's {user.name}</div>

                                        <div> My age 's {user.age}</div>
                                        <div>
                                            <button onClick={() => this.props.handleDeleteUser(user.id)}>Delete</button>
                                        </div>
                                    </div>


                                )
                            })
                        }
                    </>
                }
            </div>
        )
    }
}

export default DisplayInfo