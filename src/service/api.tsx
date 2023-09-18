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

export const signUp = ((body: { name: string; email: string; password: string; streetAddr1: string; streetAddr2: string; city: string; state: string; poscode: string}) => {
    return (
        axios({
            url: "https://localhost:7224/api/TUsers",
            method: 'POST',
            data: {
                "role": "customer",
                "name": body.name,
                "email": body.email,
                "password": body.password,
                "isBillingAddressSame": true,
                "street_1": body.streetAddr1,
                "street_2": body.streetAddr2,
                "city": body.city,
                "state": body.state,
                "postcode": body.poscode,
                "billingStreet_1": body.streetAddr1,
                "billingStreet_2": body.streetAddr2,
                "billingCity": body.city,
                "billingState": body.state,
                "billingPostcode": body.poscode

            }
        })
    )
})