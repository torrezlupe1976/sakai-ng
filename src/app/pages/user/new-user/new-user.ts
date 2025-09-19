import { Component, inject } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { customPasswodValidator } from './new-user-validator';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { MessageModule } from 'primeng/message';

@Component({
  selector: 'app-new-user',
  imports: [ ReactiveFormsModule, InputTextModule,  ButtonModule,  FormsModule, MessageModule],
  templateUrl: './new-user.html',
  styleUrl: './new-user.css'
})
export class NewUser {
   private readonly _formBuilder = inject(FormBuilder);

  formGroup = this._formBuilder.nonNullable.group({
    nombres:['', Validators.required],
    apellidos: ['', Validators.required],
    correo: ['', [Validators.required, Validators.email]],
    password:['', [Validators.required, customPasswodValidator]],
    confirmPassword:['', Validators.required],
  });

  clickRegister(): void{
    if (this.formGroup.invalid) {
      this.formGroup.markAllAsTouched();  // 👈 Marca todos los controles como touched
    }

    console.log(this.formGroup.get('nombres')?.value);
    const nombres = this.formGroup.controls.nombres.value;
    console.log(`Nombre: ${nombres}`)
    console.log(`Estado de validacion de nombres: ${this.formGroup.controls.nombres.valid}`)
    console.log(`Estado de valicacion del formulario: ${this.formGroup.valid}`)
    if(this.formGroup.valid){
      console.log('Los datos del formulario son correctos');
    }

    console.log('Propiedad errors correo:', this.formGroup.controls.correo.errors)
    console.log('Funcion haserror(email) correo:', this.formGroup.controls.correo.hasError('email'))
  
    console.log('Validador Personalizado password: ', this.passwordField.errors);
  }

  //METODOS GETTER
  get nombresField(): FormControl<string>{
    return this.formGroup.controls.nombres;
  }

  get apellidosField(): FormControl<string>{
    return this.formGroup.controls.apellidos;
  }

  get correoField(): FormControl<string>{
    return this.formGroup.controls.correo;
  }
 
 get passwordField(): FormControl<string>{
    return this.formGroup.controls.password;
  }

  get confirmPasswordField(): FormControl<string>{
    return this.formGroup.controls.confirmPassword;
  }
}
