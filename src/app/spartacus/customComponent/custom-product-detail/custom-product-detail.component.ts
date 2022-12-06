import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ProductService } from '@spartacus/core';
import { CmsComponentData } from '@spartacus/storefront';

@Component({
  selector: 'app-custom-product-detail',
  templateUrl: './custom-product-detail.component.html',
  styleUrls: ['./custom-product-detail.component.scss']
})
export class CustomProductDetailComponent implements OnInit {

  uiCode:any = ''
  public resp:any = []
  public product:any ={}

  constructor(
    public productService: ProductService,
    public cmsService: CmsComponentData<any>,
    private ref: ChangeDetectorRef

  ) {
    ref.detach()
    setInterval(()=>{
      this.ref.detectChanges()
    }, 5000)

    cmsService.data$.subscribe($data => {
      this.uiCode = $data.product
      console.log($data)
    })
   }

  ngOnInit() {
    this.getProduct(this.uiCode)
  }

  getProduct(code:any){
    this.productService.get(code).subscribe(data => {
      this.product = data
    })
  }

}
