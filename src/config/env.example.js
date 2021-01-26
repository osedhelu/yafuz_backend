const env = {
    PORT: 3000,
    USER_DB: 'xxxx',
    DB_NAME: 'xxxx',
    USER_PASSWORD: 'xxxx',
    HOST_DB: 'xxxxxxx',
    PORT_DB: 0000000,
    SEED_TOKEN: 'esta_es_la_mama_de_las_comtraseñas_lista_para_no_dejar_pasar_a_nafien',
    mongodbURL: 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
    mongodbURL_local: function() {
        return `mongodb://${this.USER_DB}:${this.USER_PASSWORD}@${this.HOST_DB}:${this.PORT_DB}/${this.DB_NAME}?authSource=admin&readPreference=primary&gssapiServiceName=mongodb&appname=MongoDB%20Compass&ssl=false`
    },
        
 

    EMAIL_USER: 'xxxxx',
    EMAIL_PASS: 'xxxxx',
}

module.exports = {env};