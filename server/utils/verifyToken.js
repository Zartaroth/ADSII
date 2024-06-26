import jwt from 'jsonwebtoken';

import dotenv from 'dotenv';

dotenv.config();

export function verifyAccessToken(token) {
    return jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);
}


export function verifyRefreshToken(token) {
    return jwt.verify(token, process.env.REFRESH_TOKEN_SECRET);

}
