import { Component, VERSION, OnDestroy, OnInit } from '@angular/core';
import { TranslateService } from 'angular-xyy';
import { environment } from '../environments/environment';
import { Title } from '@angular/platform-browser';
import { Subscription } from 'rxjs/Subscription';

/**
 * 在组件中只包含与视图相关的逻辑。所有其它逻辑都应该放到服务中
 *
 * @export
 * @class AppComponent
 */
@Component({
    selector: 'fis-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
    private title$: Subscription;

    constructor(private translate: TranslateService, private title: Title) {
        translate.use('zh'); // 强制使用中文
        // this.title$ = translate.get('app.title').subscribe(t => title.setTitle(t));
        // 非生产环境
        if (!environment.production) {
            console.log(`Welcome Angular! v${VERSION.full}`);
        }
    }

    ngOnInit() { }

    ngOnDestroy(): void {
        if (!environment.production) {
            console.log(`GoodBye Angular! v${VERSION.full}`);
        }
        if (this.title$) {
            this.title$.unsubscribe();
        }
	}

}
