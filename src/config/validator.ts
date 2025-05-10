



export class Validator {


    static validateEmail( email: string ){
        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
        return emailRegex.test( email )

    };

    // Contraseña segura: mínimo 8 caracteres, al menos una mayúscula, una minúscula, un número y un símbolo
    static isStrongPassword( password: string ) {
        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/;
        return passwordRegex.test(password);
    };

      // Nombre: solo letras (con tildes y espacios), entre 2 y 50 caracteres
    static isName( name: string ) {
        const nameRegex = /^[A-Za-zÁÉÍÓÚáéíóúÑñ0-9\s]{2,50}$/;
        return nameRegex.test(name.trim());
    };

      // Teléfono: acepta + internacional o números locales (ej: +1234567890 o 3001234567)
    static isPhone( phone: string ) {
        const phoneRegex = /^(\+?\d{1,3})?\s?\d{7,14}$/;
        return phoneRegex.test(phone.trim());
    };

}

