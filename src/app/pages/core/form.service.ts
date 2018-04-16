import { Injectable } from '@angular/core';
import { ValidatorFn } from '@angular/forms';
import { Validators } from './validators';

@Injectable()
export class FormService {

    constructor() { }

    public nullPipe(value: any) {
        return value ? value : '';
    }

    public empty(defaultValue: any = null): (string | ValidatorFn)[] {
        return [defaultValue, Validators.compose([
        ])];
    }

    public undefined(defaultValue: any = ''): (string | ValidatorFn)[] {
        return [defaultValue, Validators.compose([
            Validators.required
        ])];
    }

    public sourceName(defaultValue: any = ''): (string | ValidatorFn)[] {
        return [defaultValue, Validators.compose([
            Validators.required,
            Validators.maxLength(200)
        ])];
    }

    public sourceUrl(defaultValue: any = ''): (string | ValidatorFn)[] {
        return [defaultValue, Validators.compose([
            Validators.required,
            Validators.maxLength(200)
        ])];
    }

    public sourceDriver(defaultValue: any = ''): (string | ValidatorFn)[] {
        return [defaultValue, Validators.compose([
            Validators.required,
            Validators.maxLength(100)
        ])];
    }

    public userName(defaultValue: any = ''): (string | ValidatorFn)[] {
        return [defaultValue, Validators.compose([
            Validators.required,
            Validators.minLength(4),
            Validators.maxLength(50)
        ])];
    }
    public password(defaultValue: any = ''): (string | ValidatorFn)[] {
        return [defaultValue, Validators.compose([
            Validators.required,
            Validators.minLength(6),
            Validators.maxLength(16)
        ])];
    }
    public newPassword(defaultValue: any = ''): (string | ValidatorFn)[] {
        return ['', Validators.compose([
            Validators.required,
            Validators.minLength(6),
            Validators.maxLength(16),
            // Validators.password(defaultValue)
        ])];
    }
    public confirmPassword(defaultValue: any): (string | ValidatorFn)[] {
        return ['', Validators.compose([
            Validators.required,
            Validators.minLength(6),
            Validators.maxLength(16),
            // Validators.confirmPassword(defaultValue)
        ])];
    }
    public funcId(defaultValue: any = ''): (string | ValidatorFn)[] {
        return [defaultValue, Validators.compose([
            Validators.required,
            Validators.maxLength(20)
        ])];
    }
    public dimName(defaultValue: any = ''): (string | ValidatorFn)[] {
        return [defaultValue, Validators.compose([
            Validators.required,
            Validators.maxLength(25)
        ])];
    }
    public dimType(defaultValue: any = ''): (string | ValidatorFn)[] {
        return [defaultValue, Validators.compose([
            Validators.required,
            Validators.maxLength(10)
        ])];
    }
    public parentDimId(defaultValue: any = ''): (string | ValidatorFn)[] {
        return [defaultValue, Validators.compose([
            Validators.required,
            Validators.maxLength(20)
        ])];
    }
    public filterQueryId(defaultValue: any = ''): (string | ValidatorFn)[] {
        return [defaultValue, Validators.compose([
            Validators.required,
            Validators.maxLength(20)
        ])];
    }
    public compQueryId(defaultValue: any = ''): (string | ValidatorFn)[] {
        return [defaultValue, Validators.compose([
            Validators.required,
            Validators.maxLength(20)
        ])];
    }
    public inputCompType(defaultValue: any = ''): (string | ValidatorFn)[] {
        return [defaultValue, Validators.compose([
            Validators.required,
            Validators.maxLength(20)
        ])];
    }
    public funcExpression(defaultValue: any = ''): (string | ValidatorFn)[] {
        return [defaultValue, Validators.compose([
            Validators.required,
            Validators.maxLength(4000)
        ])];
    }
    public funcOutname(defaultValue: any = ''): (string | ValidatorFn)[] {
        return [defaultValue, Validators.compose([
            Validators.required,
            Validators.maxLength(100)
        ])];
    }
    public funcName(defaultValue: any = ''): (string | ValidatorFn)[] {
        return [defaultValue, Validators.compose([
            Validators.required,
            Validators.maxLength(100)
        ])];
    }
    public funcOrd(defaultValue: any = ''): (string | ValidatorFn)[] {
        return [defaultValue, Validators.compose([
            Validators.required,
            Validators.maxLength(10)
        ])];
    }
    public funcCategoryId(defaultValue: any = ''): (string | ValidatorFn)[] {
        return [defaultValue, Validators.compose([
            Validators.required,
            Validators.maxLength(20)
        ])];
    }
    public spName(defaultValue: any = ''): (string | ValidatorFn)[] {
        return [defaultValue, Validators.compose([
            // Validators.required,
            Validators.maxLength(100)
        ])];
    }
    public funcDescription(defaultValue: any = ''): (string | ValidatorFn)[] {
        return [defaultValue, Validators.compose([
            // Validators.required,
            Validators.maxLength(1000)
        ])];
    }
    public paramName(defaultValue: any = ''): (string | ValidatorFn)[] {
        return [defaultValue, Validators.compose([
            Validators.required,
            Validators.maxLength(50)
        ])];
    }
    public paramDescription(defaultValue: any = ''): (string | ValidatorFn)[] {
        return [defaultValue, Validators.compose([
            Validators.required,
            Validators.maxLength(50)
        ])];
    }
    public dataType(defaultValue: any = ''): (string | ValidatorFn)[] {
        return [defaultValue, Validators.compose([
            Validators.required,
            Validators.maxLength(10)
        ])];
    }
    public defaultValue(defaultValue: any = ''): (string | ValidatorFn)[] {
        return [defaultValue, Validators.compose([
            // Validators.required,
            Validators.maxLength(2000)
        ])];
    }
    public paramOrd(defaultValue: any = ''): (string | ValidatorFn)[] {
        return [defaultValue, Validators.compose([
            // Validators.required,
            Validators.maxLength(10)
        ])];
    }
    public dimId(defaultValue: any = ''): (string | ValidatorFn)[] {
        return [defaultValue, Validators.compose([
            Validators.required,
            Validators.maxLength(20)
        ])];
    }
    public queryName(defaultValue: any = ''): (string | ValidatorFn)[] {
        return [defaultValue, Validators.compose([
            Validators.required,
            Validators.maxLength(100)
        ])];
    }
    public queryExpression(defaultValue: any = ''): (string | ValidatorFn)[] {
        return [defaultValue, Validators.compose([
            Validators.required,
            Validators.maxLength(4000)
        ])];
    }
    public queryCode(defaultValue: any = ''): (string | ValidatorFn)[] {
        return [defaultValue, Validators.compose([
            Validators.required,
            Validators.maxLength(100)
        ])];
    }
    public queryDescription(defaultValue: any = ''): (string | ValidatorFn)[] {
        return [defaultValue, Validators.compose([
            // Validators.required,
            Validators.maxLength(1000)
        ])];
    }
    public resultType(defaultValue: any = ''): (string | ValidatorFn)[] {
        return [defaultValue, Validators.compose([
            Validators.required,
            Validators.maxLength(1)
        ])];
    }
    public sourceId(defaultValue: any = ''): (string | ValidatorFn)[] {
        return [defaultValue, Validators.compose([
            Validators.required,
            Validators.maxLength(20)
        ])];
    }
    public categoryName(defaultValue: any = ''): (string | ValidatorFn)[] {
        return [defaultValue, Validators.compose([
            Validators.required,
            Validators.maxLength(100)
        ])];
    }
    public description(defaultValue: any = ''): (string | ValidatorFn)[] {
        return [defaultValue, Validators.compose([
            // Validators.required,
            Validators.maxLength(500)
        ])];
    }
    public folderName(defaultValue: any = ''): (string | ValidatorFn)[] {
        return [defaultValue, Validators.compose([
            Validators.required,
            Validators.minLength(3),
            Validators.maxLength(32)
        ])];
    }
    public fileName(defaultValue: any = ''): (string | ValidatorFn)[] {
        return [defaultValue, Validators.compose([
            Validators.required,
            Validators.minLength(3),
            Validators.maxLength(32)
        ])];
    }
    public keyWords(defaultValue: any = ''): (string | ValidatorFn)[] {
        return [defaultValue, Validators.compose([
            Validators.required,
            Validators.minLength(2),
            Validators.maxLength(32)
        ])];
    }
    public remark(defaultValue: any = ''): (string | ValidatorFn)[] {
        return [defaultValue, Validators.compose([
            Validators.required,
            Validators.minLength(8)
        ])];
    }
}
