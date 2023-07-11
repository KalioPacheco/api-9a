const express = require("express");
const Controller = require("./controller")

const router = express.Router();

function addUser(req, res) {
    const { auth } = req;
    const {
        email,
        password,
        displayName
    } = req.body;

    Controller.addUser({
        auth,
        email,
        password,
        displayName
    })
    .then((result) => res.send(result))
    .catch((error) => res.send(error))

}

function getUser(req, res) {
    const { auth } = req;
    const { email } = req.body;

    Controller.getUser({
        auth,
        email
    })
    .then((result) => res.send(result))
    .catch((error) => res.send(error))
}

// /users post agregar
// /users patch actualizar
// /users delete eliminar
// /users get obtener

router.post("/", addUser)
router.get("/get-user", getUser)
router.patch("/", () => {})

module.exports = router