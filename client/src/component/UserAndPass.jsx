import { Form } from "react-router-dom"

const UserAndPW = () => {
    <Form>
        <label>
            Username: <input defaultValue="Type your username"/>
        </label>
        <label>
            Password: <input type="password"/>
        </label>
    </Form>
}

export default UserAndPW