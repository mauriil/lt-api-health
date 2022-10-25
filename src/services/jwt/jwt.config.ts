interface jwtConfig {
    secret: string,
    jwtExpiration: number,
    jwtRefreshExpiration: number
}

export const jwtConfig: jwtConfig = {
    secret: process.env.JWT_SECRET,
    jwtExpiration: 3600,
    jwtRefreshExpiration: 86400
}