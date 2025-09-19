import { AbstractControl, ValidationErrors, Validator } from "@angular/forms";
//Expresion regular para validaar password
//Al menos una mayuscula una minuscula un numero un caracter especial y ocho caracteres minimo
const patternPassword = new RegExp('(?=.*\\d)(?=.*[a-z])(?=.*[A-Z])(?=.*\\W).{8}');
export  const customPasswodValidator =(
    control: AbstractControl<string>
): ValidationErrors | null => {
    const value = control.value;
    if(!patternPassword.test(value)){
        return{customPasswodValidator: true}
    }
    return null;
}