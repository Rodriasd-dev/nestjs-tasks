import { Injectable } from "@nestjs/common";

Injectable({})
export class UsersServices {

    private user = [{
        id:1,
        username:"Rodriasd"
    }]

    getUsers(){
        return this.user
    }
}