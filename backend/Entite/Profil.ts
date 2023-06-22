import { User } from './User'

export class Profils{

    private id: number;
    private email: string;
    private firstname: string;
    private lastname: string;
    private phone: number;
    private postal: number;
    private city: string;
    private avatar: string;
    private website: string;
    private User : User;

    constructor(id : number, email : string, firstname : string, lastname : string, phone : number, postal : number, city : string, avatar : string, website : string, User : User){
        this.setId(id);
        this.setEmail(email);
        this.setFirstname(firstname);
        this.setLastname(lastname);
        this.setPhone(phone);
        this.setPostal(postal);
        this.setCity(city);
        this.setAvatar(avatar);
        this.setWebsite(website);
        this.setUser(User)
    }

    private setId(id: number){
        this.id = id;
    }

    getId() : number{
        return this.id;
    }

    setEmail(email: string){
        this.email = email;
    }

    getEmail(): string{
        return this.email;
    }

    setFirstname(firstname: string){
        this.firstname = firstname;
    }

    getFirstname(): string{
        return this.firstname;
    }

    setLastname(lastname: string){
        this.lastname = lastname;
    }

    getLastname(): string{
        return this.lastname;
    }

    setPhone(phone: number){
        this.phone = phone;
    }

    getPhone(): number{
        return this.phone;
    }

    setPostal(postal: number){
        this.postal = postal;
    }

    getPostal(): number{
        return this.postal;
    }

    setCity(city: string){
        this.city = city;
    }

    getCity(): string{
        return this.city;
    }

    setAvatar(avatar: string){
        this.avatar = avatar;
    }

    getAvatar(): string{
        return this.avatar;
    }

    setWebsite(website: string){
        this.website = website;
    }

    getWebsite(): string{
        return this.website;
    }

    setUser(User : User)
    {
        this.User = User;
    }

    getUser() : User{
        return this.User;
    }

}