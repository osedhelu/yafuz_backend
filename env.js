const env = {
    PORT: 3000,
    USER_DB: 'osedhelu',
    DB_NAME: 'yafuzDB',
    USER_PASSWORD: 'ADMadm1234',
    HOST_DB: 'localhost',
    PORT_DB: 27017,
    SEED_TOKEN: 'esta_es_la_mama_de_las_comtraseñas_lista_para_no_dejar_pasar_a_nafien',
    mongodbURL: 'mongodb://osedhelu:ADMadm1234@localhost:27017/yafuzdb',
    mongodbURL_local: function() {
        return `mongodb://${this.USER_DB}:${this.USER_PASSWORD}@${this.HOST_DB}:${this.PORT_DB}/${this.DB_NAME}?authSource=admin&readPreference=primary&gssapiServiceName=mongodb&appname=MongoDB%20Compass&ssl=false`
    },
    url_email: 'http://osedhelu.ml/e',
    app_url: 'http://osedhelu.ml/#/login',
    EMAIL_USER: 'peverything2016@gmail.com',
    EMAIL_PASS: 'peverything2021',
}

module.exports = {env};
