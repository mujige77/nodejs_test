import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { Subscription }       from 'rxjs/Subscription';

import { IProduct } from './product';
import { ProductService } from './product.service';

@Component({
    templateUrl: 'app/products/product-detail.component.html'
})
export class ProductDetailComponent implements OnInit {
    pageTitle: string = 'Product Detail'
    product: IProduct
    errorMessage: string
    private sub: Subscription

    constructor(private _route: ActivatedRoute,
                private _router: Router) {
    }

    ngOnInit(): void {
        let id = this._route.snapshot.params['id']
        this.pageTitle += ` : ${id}`
    }

    onBack(): void {
        this._router.navigate(['/products'])
    }

    onRatingClicked(message: string): void {
        this.pageTitle = 'Product Detail: ' + message
    }
}
