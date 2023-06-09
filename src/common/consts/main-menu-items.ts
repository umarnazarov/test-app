import { ContactRouteName } from '@/modules/contacts/routes'
import type { IMainMenuItem } from '@/common/layouts/components/nav-bar/types'

export const MainMenuItems: IMainMenuItem[] = [
    { name: 'Contacts', href: ContactRouteName.LIST_ROUTE },
]