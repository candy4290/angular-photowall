import { ErrorHandler } from '@angular/core';

export class FisErrorHandler extends ErrorHandler {
    handleError(err: any): void {
        console.error(`出现错误，请解决`, err);
    }
}
