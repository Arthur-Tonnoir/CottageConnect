export class User{

    private id: number = 0;
    private username: string = "";
    private password: string = "";
    private role: string  = "";

    constructor(id: number, username: string, password: string, role: string){
        this.setId(id);
        this.setUsername(username);
        this.setPassword(password);
        this.setRole(role);
    }

    client(id: number, username: string, password: string, role='client'){
        this.setId(id);
        this.setUsername(username);
        this.setPassword(password);
        this.setRole(role);
    }

    findByPrenom(){

    }

    findByNom(){

    }

    findByPrenomAndNom(){

    }

    findByRoleIsClient(){

    }

    private setId(id: number){
        this.id = id;
    }

    getId(): number{
        return this.id;
    }

    setUsername(username: string){
        this.username = username;
    }

    getUsername(): string{
        return this.username;
    }

    setPassword(password: string){
        this.password = password;
    }

    getPassword(): string{
        return this.password;
    }

    setRole(role: string){
        this.role = role;
    }

    getRole(): string{
        return this.role;
    }
}