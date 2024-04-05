import { Form } from "react-router-dom"

const UserAndPW = () => {

    return (
        <div>
            <div className="input-group mb-3">
                <label>
                    Username: <input defaultValue="Type your username"/>
                </label>
            </div>
            <div className="input-group mb-3">
                <label>
                    Password: <input type="password"/>
                </label>
            </div>
        </div>
    )
}

export default UserAndPW