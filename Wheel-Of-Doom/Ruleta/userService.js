import axios from "axios";

const apiClient = axios.create({
    baseURL: 'http://localhost:3000/',
    withCredentials: false,
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
    }
});

export const UserService = {
    async getAllUsers() {
        let response = await apiClient.get("/users");
        let allUsers = response.data;
        return allUsers;
    },

    async submitUser(newUser) {
        await apiClient.post("/users", newUser);
    },

    async updateUser(userId, updatedUserData) {
        try {
            await apiClient.patch(`/users/${userId}`, updatedUserData);
        } catch (error) {
            console.error('Hubo un problema al actualizar el usuario:', error);
            throw error;
        }
    },

    async deleteUser(userId) {
        try {
            await apiClient.delete(`/users/${userId}`);
        } catch (error) {
            console.error('Hubo un problema al eliminar el usuario:', error);
            throw error;
        }
    },


    async getDrawParticipants() {
        try {
            let response = await apiClient.get("/draw");
            let participants = response.data;
            return participants;
        } catch (error) {
            console.error('Hubo un problema al obtener los participantes del sorteo:', error);
            throw error;
        }
    },

    async addToDraw(participantIds) {
        try {
            await apiClient.post("/draw", { participantIds });
        } catch (error) {
            console.error('Hubo un problema al agregar participantes al sorteo:', error);
            throw error;
        }
    },

    async removeFromDraw(participantId) {
        try {
            await apiClient.delete(`/draw/${participantId}`);
        } catch (error) {
            console.error('Hubo un problema al eliminar participantes del sorteo:', error);
            throw error;
        }
    },

    async clearDraw() {
        try {
            await apiClient.delete("/draw");
        } catch (error) {
            console.error('Hubo un problema al limpiar la lista del sorteo:', error);
            throw error;
        }
    }
};
