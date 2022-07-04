import {Request as _Req, Response as _Res, NextFunction as _Next} from "express";


async function isAuthorized(req: _Req, res: _Res, next: _Next) {
        if (!req.user) {
            // console.log("User is not logged in.");
            res.redirect("/login");
        } else {
            console.log("User is logged in.");
            next();
        }
}
