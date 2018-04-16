import { DatePipe } from './../../pipes/date.pipe';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { ExpressionPipe } from '../../pipes/expression.pipe';
import { Http } from '@angular/http';

import { NgZorroAntdModule } from 'ng-zorro-antd';
import { PrimengModule } from './primeng.module';
import { XyyModule } from 'angular-xyy';
import { DirectivesModule } from '../../directives/directives.module';
import { NgxEchartsModule } from 'ngx-echarts';

const pipe = [
    ExpressionPipe,
    DatePipe
];
// const directive = [
// ];

/**
 * 共享模块
 * 不要在共享模块中把应用级单例添加到providers中。 否则如果一个惰性加载模块导入了此共享模块，就会导致它自己也生成一份此服务的实例。
 * @export
 * @class SharedModule
 */
@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        XyyModule,
        PrimengModule,
        NgZorroAntdModule,
        // DirectivesModule
        NgxEchartsModule
    ],
    exports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        XyyModule,
        PrimengModule,
        NgZorroAntdModule,

        ...pipe,
        // ...directive,
        NgxEchartsModule
    ],
    declarations: [
        ...pipe,
        // ...directive
    ]
})

export class SharedModule { }
