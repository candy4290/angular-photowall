import { Validators as BaseValidators, ValidatorFn, AbstractControl, ValidationErrors } from '@angular/forms';

function isEmptyInputValue(value: any): boolean {
    // we don't check for string here so it also works with arrays
    return value == null || value.length === 0;
}

export class Validators extends BaseValidators {

    static password(c: string | AbstractControl): ValidatorFn {
        return (control: AbstractControl): ValidationErrors | null => {
            if (c != null) {
                let targetControl = null;
                if (typeof c === 'string') {
                    targetControl = control.root.get(c);
                }
                // else if (c instanceof AbstractControl) {
                //     targetControl = c;
                // }
                if (targetControl == null) {
                    return  null;
                }
                if (isEmptyInputValue(control.value) || isEmptyInputValue(targetControl.value)) {
                    return null;  // don't validate empty values to allow optional controls
                }
                if (control.value !== targetControl.value) {
                    console.log(control, targetControl);
                    return { 'notEqual.password': {'sourceControl': control.value, 'targetControl': targetControl.value} };
                }
            }
            return null;
        };
    }
    static confirmPassword(c: string | AbstractControl): ValidatorFn {
        return (control: AbstractControl): ValidationErrors | null => {
            if (c != null) {
                let targetControl = null;
                if (typeof c === 'string') {
                    targetControl = control.root.get(c);
                }
                // else if (c instanceof AbstractControl) {
                //     targetControl = c;
                // }
                if (targetControl == null) {
                    return  null;
                    // throw new Error('not find the target Control');
                }
                if (isEmptyInputValue(control.value)) {
                    return null;  // don't validate empty values to allow optional controls
                }
                if (control.value !== targetControl.value) {
                    console.log(control, targetControl);
                    return { 'notEqual.confirmPassword': {'sourceControl': control.value, 'targetControl': targetControl.value} };
                } else {
                    targetControl.reset();
                }
            }
            return null;
        };
    }
}
