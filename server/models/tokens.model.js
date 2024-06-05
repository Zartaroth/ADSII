// Contiene los modelos de la base de datos.

import { pool } from '../utils/db.js';

// Función para guardar un nuevo token
export const saveToken = async (token) => {
    try {

        await pool.query('INSERT INTO tokens (token) VALUES (?)', [token]);

        // Devuelve una respuesta de éxito
        return { success: true, message: 'Token registered successfully.' };
    } catch (error) {
        throw new Error('Failed to register token.');
    }
};

// Función para obtener un token 
export const getToken = async (refreshToken) => {
    const [rows] = await pool.query('SELECT * FROM tokens WHERE token = ?', [refreshToken]);
    return rows[0];
};