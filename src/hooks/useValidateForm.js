export const NAME_REGEX = /^[a-zA-Z]{3,}$/;
// eslint-disable-next-line no-useless-escape
export const EMAIL_REGEX = new RegExp('[a-z0-9]+@[a-z]+\.[a-z]{2,3}')
export const PASSWORD_REGEX = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/gm;

function useValidateForm({ newUser, setNewUser, formType = '' }) {

    let fieldValidationErrors = newUser.formErrors;
    let nameValid = newUser.nameValid;
    let lastNameValid = newUser.lastNameValid;
    let emailValid = newUser.emailValid;
    let passwordValid = newUser.passwordValid;
    let generalValid = newUser.generalValid;

    if (newUser.name !== '' && !newUser.name.match(NAME_REGEX)) {
        fieldValidationErrors.name = nameValid ? '' : 'Ingrese un nombre válido';
    }
    if (newUser.lastName !== '' && !newUser.lastName.match(NAME_REGEX)) {
        fieldValidationErrors.lastName = lastNameValid ? '' : 'Ingrese un apellido válido';
    }
    if (newUser.email !== '' && !newUser.email.match(EMAIL_REGEX)) {
        fieldValidationErrors.email = emailValid ? '' : 'Ingrese un email válido';
    }
    if (newUser.password !== '' && !newUser.password.match(PASSWORD_REGEX)) {
        fieldValidationErrors.password = passwordValid ? '' : 'La contraseña debe tener al menos 8 caracteres, una letra mayúscula, una letra minúscula y un número.';
    }

    if (formType === 'logIn') {
        if (newUser.email === '' || newUser.password === '') {
            fieldValidationErrors.general = generalValid ? '' : 'Rellene todos los campos obligatorios';
        }
    } else {
        if (newUser.name === '' || newUser.email === '' || newUser.password === '') {
            fieldValidationErrors.general = generalValid ? '' : 'Rellene todos los campos obligatorios';
        }
    }


    setNewUser({
        ...newUser,
        formErrors: fieldValidationErrors,
        generalError: generalValid,
        emailValid: emailValid,
        passwordValid: passwordValid,
        nameValid: newUser.nameValid,
        lastNameValid: newUser.lastNameValid,
    });
}

export default useValidateForm