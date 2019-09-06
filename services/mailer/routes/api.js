const express = require("express");
const router = express.Router();

router.post(('/'), (req, res) => {
    const Mailer = req.app.get('mailer');
    Mailer.send(req.body.email, req.body.code, req.body.locals)
        .then(() => res.locals.returnStatus(res, 200))
        .catch((err) => res.locals.returnStatus(res, 400, err));
})