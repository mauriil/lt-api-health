const axios = require('axios');
import HmacMD5 from "crypto-js/hmac-md5";
import AES from "crypto-js/enc-base64";

export const getToken = async () => {
    const hashedCredentials = (HmacMD5(`${process.env.API_MEDIC_AUTH_BASE_URL}login`, process.env.API_MEDIC_SECRET_KEY)).toString(AES);
    
    const tokenRequest = await axios.post(`${process.env.API_MEDIC_AUTH_BASE_URL}login`, {}, {
        headers: {
            'Authorization': `Bearer ${process.env.API_MEDIC_API_KEY}:${hashedCredentials}` 
        }
    });

    return tokenRequest.data.Token;
};
