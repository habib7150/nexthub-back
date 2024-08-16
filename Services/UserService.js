const User = require('../Models/User');

class UserService {
    async getAllUsers() {
        return await User.findAll();
    }

    async getUserById(userID) {
        return await User.findByPk(userID);
    }

    async addUser(userData) {
        return await User.create(userData);
    }
    async updateUser(userID, userData) {
        const user = await User.findByPk(userID);
        if (!user) throw new Error('User not found');
        return await user.update(userData, {where: { user_id: userID }  });
    }

    async deleteUser(userID) {
        return await User.destroy({ where: { user_id: userID } });
    }
}

module.exports = new UserService();