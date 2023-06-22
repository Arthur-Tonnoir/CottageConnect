import { UsersService } from "../Service/UsersService";
import { getData } from '../index';
import express from 'express';
const router = express.Router();

let app = express();

let userService = new UsersService();

export class UsersController{

    private userService : UsersService = new UsersService();
    
    private sql = getData();

}

router.get("/", (req, res) => {
    userService.findAll().then((users) => {
        res.send(users);
    })
    
})

router.get("/:id", (req, res) => {
    userService.findById(req.params.id).then((users) => {
        res.send(users);
    })
    
}) 

router.post("/:user", (req, res) => {
    userService.create(req.params.user).then((result) => {
        res.send(result)
    });
    
})

router.put("/:user", (req, res) => {
    userService.update(req.params.user).then((result) => {
        res.send(result)
    });
    
})

router.delete("/:id", (req, res) => {
    userService.delete(req.params.id).then((result) => {
        res.send(result)
    });
    
})

module.exports = router;