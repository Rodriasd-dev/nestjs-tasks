import { Injectable } from "@nestjs/common";

export interface user {
    name: string,
    age: number
}

Injectable({})
export class UsersServices {

    // private user = []

    getUsers():user{
        return {
            name:"Rodriasd",
            age: 2
        }
    }
}