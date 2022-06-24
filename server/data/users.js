const { ObjectId } = require("mongodb");
const blogData = require("./blog");
const userData = require("./users");

let exportedMethods = {
    async createUser(firstName, lastName, email, dateJoined, user, password){
        try {
            let newUser = {
                firstName : firstName,
                lastName : lastName ? lastName : "",
                email : email,
                dateJoined : dateJoined,
                userName : user,
                password : password
            }


            return newUser
        } catch (e) {
            return {error : e, message : ""}
        }

    },

    async deleteUser(id){
        try {
            const userCollection = await userData();

            const deleteUserInfo = await userCollection.deleteOne({_id : ObjectId(id)})

            if (deleteUserInfo.deletedCount === 0) {
                throw `Could not delete post with id of ${id}`;
            }

            return true
        } catch (e) {
            return {error : e, message : ""}
        }
    }
}

module.exports = exportedMethods