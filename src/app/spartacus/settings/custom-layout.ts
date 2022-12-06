import { LayoutConfig } from "@spartacus/storefront";

export const MyProjectPageLayout: LayoutConfig = {
    breakpoints: {
        lg: {
          max: 2000,
          min: 1200,
        },
        md: {
          max: 1200,
          min: 920,
        },
        sm: {
          max: 620,
          min: 550,
        },
      },
      layoutSlots: {
        header: {
            lg: {
                slots: ['SiteContext','headerLeft','headerRight', 'headerBottom '],
              },
              md: {
                slots: ['headerLeft','headerRight'],
              },
              sm: {
                slots: ['headerLeft','headerRight'],
              },
              xs: {
                slots: ['headerLeft','headerRight'],
              },
        },
        myProjectPage: {
            lg: {
                slots: ['Section1A', 'Section2A'],
              },
              md: {
                slots: ['Section1A'],
              },
              sm: {
                slots: ['Section1A'],
              },
              xs: {
                slots: ['Section1A'],
              },
        }
      }
}