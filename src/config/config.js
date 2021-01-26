const bcryptjs = require('bcryptjs');

let r = {
    _400: (res, error) => {
       return res.status(400).json({
            ok: false,
            error
        })
    },
    _200: (res, data) => {
        return res.status(200).json({
            ok: true,
            data
        })
    },
    
    _201: (res, data) => {
        return res.status(201).json({
            ok: true,
            data
        })
    },
    _401: (res, error) => {
        return res.status(401).json({
            ok: false,
            error
        })
    },
    _500: (res, error) => {
        return res.status(500).json({
            ok: false,
            error
        })
    },
    _message: (res, message) => {
        return res.status(200).json({
            message
        })
    }
}
let validator = (type, value, acton = {require: false, compare: ''}) => {
    let emailRegex = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
    let stringRegex = /^[a-zA-Z\s]*$/;
    let numberRegex = /^[0-9\s]*$/;
    let action = false
    let message = '';
    
    switch (type) {
        case 'email':
            if (emailRegex.test(value)) {
                action = (value);
            } else {
                action = "null"
                if(value == undefined) {
                    message = `Este campo es requerido`

                }else {
                    
                    message = `${value} no es un correo valido`
                }

            }
            break;
        case 'string':
                if (stringRegex.test(value)) {
                    action = (value);
                } else {
                    action = "null"
                    message = `${value} debe ser solo letras`
                }

            break;
        case 'number':
            if (numberRegex.test(value)) {
                action = (value);
            } else {
                action = "null"
                message = `${value} debe ser solo numeros`
            }
            break;
        case 'password':
         if(value != undefined && value != null) {
             let compare = acton.compare
            if (value === compare) {
                
                action = bcryptjs.hashSync(value, 10);
            } else {
                action = "null"
                message = `${value} y password_compare: ${compare} no son iguales`
            }
         }else {
            action = "null"
            message = `Este campo es requerido`
         }
            break;
        default:
            break;
    }
    if(acton.require){
        // console.log("resp_____", `${value == '' || value == undefined}-------${value}`);
        
        if(value === '' || value == undefined || value == null){
            action = 'null',
            message = 'este campo es requerido'
        }   
    }
    if (action != 'null') {
        return action
    } else {
        return `${message}.error`
    }
}
module.exports = {
    r,
    validator
}