import { Pipe, PipeTransform } from '@angular/core'
import { IProduct } from './product'

@Pipe({name: 'productFilter'})
export class ProductFilterPipe  implements PipeTransform {
    transform(value: IProduct[], filterBy: string): any {
        filterBy = filterBy ? filterBy.toLocaleLowerCase() : null;
        return filterBy ? value.filter((product: IProduct)=> 
            product.productName.toLocaleLowerCase().includes(filterBy)) : value;
    }
}