import React, { useState } from "react";
import UserInfo from "./AddUserInfo";
import './DisplayInfo.scss'
import logo from './../logo.svg';
// class DisplayInfo extends React.Component {

//     constructor(props) {
//         console.log('call constructor: 1');
//         super(props);
//         this.state = {
//             isShowListUsers: true
//         }
//     }
//     componentDidMount() {
//         console.log('>>> call me component did mount');
//         setTimeout(() => {
//             document.title = 'Eric & Hoi Dan IT';
//         })
//     }
//     componentDidUpdate(prevProps, prevState, snapshot) {
//         console.log('Components did update', this.props, prevProps);
//         if (this.props.listUsers !== prevProps.listUsers) {
//             if (this.props.listUsers.length === 5) {
//                 alert('You got 5 users!')
//             }
//         }
//     }
//     handleShowHide() {
//         this.setState({
//             isShowListUsers: !this.state.isShowListUsers
//         })
//     }

//     render() {
//         console.log('call me render');
//         const { listUsers } = this.props;
//         console.log(listUsers)
//         console.table(listUsers)
//         return (
//             <div className='display-info-container'>
//                 {/* <img src={logo} /> */}
//                 <div>
//                     <span onClick={() => this.handleShowHide()}>{this.state.isShowListUsers === true ? "Hide list Users" : "Show list Users"}</span>
//                 </div>
//                 {this.state.isShowListUsers &&
//                     <>
//                         {
//                             listUsers.map((user) => {

//                                 return (

//                                     <div key={user.id} className={+user.age > 18 ? "green" : "red"}>

//                                         {/* <div style={{ color: 'yellow', paddingTop: '50px' }}> My name 's {user.name}</div> */}
//                                         <div > My name 's {user.name}</div>

//                                         <div> My age 's {user.age}</div>
//                                         <div>
//                                             <button onClick={() => this.props.handleDeleteUser(user.id)}>Delete</button>
//                                         </div>
//                                     </div>


//                                 )
//                             })
//                         }
//                     </>
//                 }
//             </div>
//         )
//     }
// }

//stateless and statefull
const DisplayInfo = (props) => {
    const { listUsers } = props;
    const [isShowListUser, setShowListUser] = useState(true);//khai báo là const để đảm bảo giá trị đc thay đổi thông qua hàm setShowListUser   
    //destructoring assignment
    // this.state={
    //     isShowListUser:true
    // }
    const handleShowHideUser = () => {

        setShowListUser(!isShowListUser)
    }
    return (
        <div className='display-info-container'>

            <div>
                <span onClick={() => handleShowHideUser()}>{isShowListUser === true ? 'Hide List User' : 'Show List User'}</span>
            </div>
            {isShowListUser &&
                <>
                    {
                        listUsers.map((user) => {

                            return (

                                <div key={user.id} className={+user.age > 18 ? "green" : "red"}>

                                    {/* <div style={{ color: 'yellow', paddingTop: '50px' }}> My name 's {user.name}</div> */}
                                    <div > My name 's {user.name}</div>

                                    <div> My age 's {user.age}</div>
                                    <div>
                                        <button onClick={() => props.handleDeleteUser(user.id)}>Delete</button>
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


export default DisplayInfo