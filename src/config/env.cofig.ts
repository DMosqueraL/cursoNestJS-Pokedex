export const EnvConfiguration = () => ({
    enviroment: process.env.NODE_ENV || 'dev', 
    mongoDB: process.env.MONGODB,
    port: process.env.PORT || 3002,
})