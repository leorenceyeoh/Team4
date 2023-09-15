import axios from "axios"

export const login = ((username: string, password: string) => {
    return (
        axios({
            url: "https://purrfectpawsapi2.azurewebsites.net/api/UserLogin/Login",
            method: 'POST',
            data: {
                email: username,
                password: password
            }
        })
    )
})