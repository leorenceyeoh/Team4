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

export const signUp = ((body) => {
    return (
        axios({
            url: "https://purrfectpawsapi2.azurewebsites.net/api/TUsers",
            method: 'POST',
            data: {
                    "userId": 0,
                    "roleId": 0,
                    "name": body.name,
                    "email": body.email,
                    "password": body.password,
                    "access_Token": "",
                    "role": {
                      "roleId": 0,
                      "roleName": "customer"
                    },
                    "shippingAddresses": [
                      {
                        "shippingAddressId": 0,
                        "userId": 0,
                        "user": body.name,
                        "street1": body.streetAddr1,
                        "street2": body.streetAddr2,
                        "city": body.city,
                        "state": body.state,
                        "postcode": body.poscode
                      }
                    ],
                    "billingAddresses": [
                      {
                        "billingAddressId": 0,
                        "userId": 0,
                        "user": body.name,
                        "street1": body.streetAddr1,
                        "street2": body.streetAddr2,
                        "city": body.city,
                        "state": body.state,
                        "postcode": body.poscode
                      }
                    ]
            }
        })
    )
})