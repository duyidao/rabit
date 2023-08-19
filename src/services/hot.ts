import type { PageParams } from '@/types/home'
import { http } from '@/utils/http'
import type { HotResult } from '@/types/hot'

type HotParams = PageParams & { subType?: string }
export const getHotRecommendApi = (url: string, data?: HotParams) => {
  return http<HotResult>({
    method: 'GET',
    url,
    data,
  })
}
