import { LocationStrategy, HashLocationStrategy, CommonModule } from '@angular/common';
import { APP_BASE_HREF } from '@angular/common';
import { NgModule, ErrorHandler } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutes } from './app.routes';
import { AppService } from './app.service';

import { JwtHelper } from 'angular2-jwt';
import { NotFoundModule } from './pages/not-found/not-found.module';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { XyyModule, CoreModule, TranslateModule, HttpCache, HttpCacheImpl, DEFAULT_TIMEOUT, HttpTimeoutInterceptor, HttpErrorInterceptor, CachingInterceptor, HttpModule } from 'angular-xyy';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { AuthService } from './pages/auth/auth.service';
import { CanDeactivateGuard } from './pages/core/guard/can-deactivate.guard';
import { AuthGuardService } from './pages/auth/auth-guard.service';
import { CanDeactivateGuardService } from './pages/auth/can-deactivate-guard.service';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { JwtInterceptor } from './pages/core/http/interceptor/jwt-interceptor';
import { HttpResponseTokenInterceptor } from './pages/core/http/interceptor/http-response-token-interceptor';
import { FisErrorHandler } from './pages/core/fis-error-handler';
import { UserService } from './pages/user/user.service';
import { EmbeddedAuthGuardService } from './pages/auth/embedded-auth-guard.service';

@NgModule({
    imports: [
        CommonModule,
        BrowserModule,
        BrowserAnimationsModule,
        AppRoutes,
        NotFoundModule,
        CoreModule,
        XyyModule.forRoot({
            initializerFiles: './assets/config/app.json',
            translateFiles: [
                {prefix: './assets/i18n/dict_', suffix: '.json'},
                {prefix: './assets/i18n/error_', suffix: '.json'},
            ]
        }),
        NgZorroAntdModule.forRoot(),
    ],
    declarations: [
        AppComponent,
    ],
    providers: [
        AppService,
        JwtHelper,
        // { provide: LocationStrategy, useClass: HashLocationStrategy },
        // { provide: APP_BASE_HREF, useValue: '/' } // 类似上下文，与index.html中的<base href="/">对应，二者取一
        AuthService,
        CanDeactivateGuard,
        // { provide: AuthGuardService, useClass: UserCodeGuardService },
        AuthGuardService,
        EmbeddedAuthGuardService,
        CanDeactivateGuardService,
        UserService,
        { provide: HttpCache, useClass: HttpCacheImpl },
        // 注册拦截器
        // { provide: HTTP_INTERCEPTORS, useClass: TimingInterceptor, multi: true },
        { provide: DEFAULT_TIMEOUT, useValue: '60000' },
        // { provide: HTTP_INTERCEPTORS, useClass: HttpChangeBodyInterceptor, multi: true },
        { provide: HTTP_INTERCEPTORS, useClass: HttpTimeoutInterceptor, multi: true },
        { provide: HTTP_INTERCEPTORS, useClass: HttpErrorInterceptor, multi: true },
        { provide: HTTP_INTERCEPTORS, useClass: CachingInterceptor, multi: true },
        { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
        { provide: HTTP_INTERCEPTORS, useClass: HttpResponseTokenInterceptor, multi: true },
        { provide: ErrorHandler, useClass: FisErrorHandler }
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
