import { NgModule } from '@angular/core';
import { translationChunksConfig, translations } from '@spartacus/assets';
import {
  ConfigModule,
  FeaturesConfig,
  I18nConfig,
  OccConfig,
  provideConfig,
  SiteContextConfig,
} from '@spartacus/core';
import {
  defaultCmsContentProviders,
  layoutConfig,
  mediaConfig,
} from '@spartacus/storefront';
import { CustomParagraphComponent } from './customComponent/custom-paragraph/custom-paragraph.component';
import { CustomProductDetailComponent } from './customComponent/custom-product-detail/custom-product-detail.component';

@NgModule({
  declarations: [],
  imports: [
    ConfigModule.withConfig({
      cmsComponents: {
        ProductDetailComponent: {
          component: CustomProductDetailComponent
        },

      }
    })
  ],
  providers: [
    provideConfig(layoutConfig),
    provideConfig(mediaConfig),
    ...defaultCmsContentProviders,
    provideConfig(<OccConfig>{
      backend: {
        occ: {
          baseUrl: 'https://localhost:9002',
        },
      },
    }),
    provideConfig(<SiteContextConfig>{
      context: {
        currency: ['USD', 'JPY'],
        language: ['en', 'de'],
        baseSite: ['electronics-spa', 'powertools-spa', 'apparel-uk'],
      },
    }),
    provideConfig(<I18nConfig>{
      i18n: {
        resources: translations,
        chunks: translationChunksConfig,
        backend: {
          loadPath: 'assets/translations/{{lng}}/{{ns}}.json',
        },
      },
    }),
    provideConfig(<FeaturesConfig>{
      features: {
        level: '4.3',
      },
    }),
    provideConfig({

    })
  ],
})
export class SpartacusConfigurationModule {}
