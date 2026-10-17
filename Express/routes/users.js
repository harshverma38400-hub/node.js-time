const express = require("express");

const router = express.Router();

const {
    ShowingallDataofUser,
    CreatingAllUsers,
    FindTheUserById,
    UpdateTheUserById,
    DeleteUserById
} = require("../controller/users.js");

router
    .route("/")
    .get(ShowingallDataofUser)
    .post(CreatingAllUsers);

router
    .route("/:id")
    .get(FindTheUserById)
    .patch(UpdateTheUserById)
    .delete(DeleteUserById);

module.exports = router;