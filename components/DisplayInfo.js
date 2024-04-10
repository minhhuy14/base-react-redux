import React from "react";
import UserInfo from "./UserInfo";

class DisplayInfo extends React.Component {

    render() {
        const { listUsers } = this.props;
        console.log(listUsers)

        return (
            <div>
                display info
                {/*  */}
                {listUsers.map((user) => {
                    return (
                        <div key={user.id}>
                            <div> My name 's {user.name}</div>
                            <div> My age 's {user.age}</div>
                        </div>
                    )

                })}

            </div>
        )
    }
}

export default DisplayInfo