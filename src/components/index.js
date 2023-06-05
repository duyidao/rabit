import XtxSku from './XtxSku/index.vue'
import BannerCarousel from './BannerCarousel.vue'

export const componentsPlugin = {
  install(app) {
    app.component('XtxSku', XtxSku)
    app.component('BannerCarousel', BannerCarousel)
  }
}