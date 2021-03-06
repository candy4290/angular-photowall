import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
	selector: 'fis-not-found',
	templateUrl: './not-found.component.html',
	styleUrls: ['./not-found.component.scss']
})

export class NotFoundComponent implements OnInit {

	constructor(private currentRoute: ActivatedRoute) { }

	ngOnInit() {
        console.log('NotFound');
        console.log(`当前路由：${this.currentRoute.snapshot.url}`);
	}
}
