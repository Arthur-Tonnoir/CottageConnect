const mysql = require('mysql');

export class MySQL{

    private connection: any;

    constructor(host : string, user : string, password : string, port : number, database: string){
        this.connection  = mysql.createConnection({
            host: host,
            user: user,
            password: password,
            port: port,
            database: database
        });
        this.connection.connect(function(err: string){
            if(err) { 
                console.log("Connection a la base de données échoué : " + err) 
                throw err
            }else{
                console.log("Connection a la base de données reussi")
            }
            
        })
    }

    public getConnection(): any{
        return this.connection;
    }

}