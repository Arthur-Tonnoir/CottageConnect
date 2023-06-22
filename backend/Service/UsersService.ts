import { User } from "../Entite/User";
import { ICrud } from "../Interfaces/ICrud";
import { getData } from '../index';

export class UsersService implements ICrud{

    findAll(): Promise<any> {
        return new Promise((resolve, reject) => {
            getData().getConnection().query("SELECT * FROM users;", function (err: any, result: any) {
            if (err) {
                console.error("Erreur de récupération de la liste des utilisateurs : " + err);
                reject(err);
            } else {
                const users: any[] = [];
                for (let i of result) {
                    if (i !== null && i !== undefined) {
                        users.push(new User(i.ID, i.USERNAME, i.PASSWORD, i.ROLE));
                    }
                }
                resolve(users);
            }
            });
        });
    }

    findById(id : string): Promise<any> {
        return new Promise((resolve, reject) => {
            getData().getConnection().query("SELECT * FROM users WHERE ID = " + id + ";", function (err: any, result: any) {
            if (err) {
                console.error("Erreur de récupération de la liste des utilisateurs : " + err);
                reject(err);
            } else {
                const users: any[] = [];
                for (let i of result) {
                    if (i !== null && i !== undefined) {
                        users.push(new User(i.ID, i.USERNAME, i.PASSWORD, i.ROLE));
                    }
                }
                console.log(users)
                resolve(users);
            }
            });
        });
    }

    create(entite: any): Promise<Boolean> {
        let json = JSON.parse(entite);
        return new Promise((resolve, reject) => {
            getData().getConnection().query("INSERT INTO users (id, username, password, role) VALUES ('" + json.id + " ', '" + json.username + "', '" + json.password + "',' " + json.role +  "');", function (err: any, result: any) {
            if (err) {
                console.error("Erreur de récupération de la liste des utilisateurs : " + err);
                reject(err);
            } else {
                let resultat = result ? true : false
                resolve(resultat);
            }
            });
        });
    }
    update(entite: any): Promise<Boolean> {
        let json = JSON.parse(entite);
        return new Promise((resolve, reject) => {
            getData().getConnection().query("UPDATE users SET username =" + json.username + " password =" + json.password + "role = " + json.role +  " WHERE id = " + json.id + ";", function (err: any, result: any) {
            if (err) {
                console.error("Erreur de récupération de la liste des utilisateurs : " + err);
                reject(err);
            } else {
                let resultat = result;
                resolve(resultat);
            }
            });
        });
    }
    delete(id: any): Promise<Boolean> {
        
        return new Promise((resolve, reject) => {
            getData().getConnection().query("DELETE FROM users WHERE id = " + id + " ;", function (err: any, result: any) {
            if (err) {
                console.error("Erreur de récupération de la liste des utilisateurs : " + err);
                reject(err);
            } else {
                let resultat = result;
                resolve(resultat);
            }
            });
        });
    }

    
    

}