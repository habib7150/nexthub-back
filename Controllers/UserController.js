const UserService = require('../Services/UserService');

class UserController {
    async getAllUsers(request, response) {
        try {
            const users = await UserService.getAllUsers();
            response.json(users);
        } catch (error) {
            response.status(500).json({ error: error.message });
        }
    }

    async getUserById(request, response) {
        try {
            const user = await UserService.getUserById(request.params.id);
        
            response.json(user);
        } catch (error) {
            response.status(500).json({ error: 'User not found' });
        }
    }

    async addUser(request, response) {
        try {
            const user = await UserService.addUser(request.body);
            response.json(user);
        } catch (error) {
            response.status(500).json({ error: error.message });
        }
    }
}

module.exports = new UserController();