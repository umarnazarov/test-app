import { initAuthModule } from '@/modules/auth'
import { initContactsModule } from '@/modules/contacts'

export default (opts: any) => {
  initAuthModule(opts)
  initContactsModule(opts)
}