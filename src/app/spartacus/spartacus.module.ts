import { NgModule } from '@angular/core';
import { ConfigModule, I18nModule } from '@spartacus/core';
import { BaseStorefrontModule } from "@spartacus/storefront";
import { CustomProductDetailComponent } from './customComponent/custom-product-detail/custom-product-detail.component';
import { MyProjectPageLayout } from './settings/custom-layout';
import { SpartacusConfigurationModule } from './spartacus-configuration.module';
import { SpartacusFeaturesModule } from './spartacus-features.module';

@NgModule({
  declarations: [
    CustomProductDetailComponent
  ],
  imports: [

    SpartacusFeaturesModule,
    SpartacusConfigurationModule,
    BaseStorefrontModule,
    ConfigModule.withConfig(MyProjectPageLayout),
    I18nModule,
  ],
  exports: [BaseStorefrontModule]
})
export class SpartacusModule { }
