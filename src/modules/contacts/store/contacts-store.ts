import { defineStore } from 'pinia'
import { IContactState } from '../types'
import { reactive, computed } from '@vue/reactivity'
import { ButtonType } from '@/common/types'
import { IContact } from '../types'
import { useRouter } from 'vue-router'
import { ContactRouteName } from '../routes'

export const useContactsStore = defineStore('contacts', () => {
    const router = useRouter()
    const state = reactive<IContactState>({
        term: '',
        editModalVisible: false,
        contacts: [
            {
                id: 1,
                email: '1nazma@gmail.com',
                fullName: 'Umar Naza',
                number: 213123131,
                tags: ['Friends', "Family"]
            },
            {
                id: 2,
                email: 'adsasd@gmail.com',
                fullName: 'Rano Naza',
                number: 21231,
                tags: ['Family']
            }
        ],
        newContact: {
            email: '',
            fullName: '',
            id: Date.now(),
            number: '',
            tags: []
        }
    })

    const contactActions = computed(() => [
        {
            type: ButtonType.WARNING,
            text: 'Delete',
            callback: (id: number) => deleteContactById(id)
        },
        {
            type: ButtonType.PRIMARY,
            text: 'Edit',
            callback: () => {
                state.editModalVisible = true
            }
        }
    ])

    const searchedContacts = computed<IContact[]>(() => {
        return state.contacts.filter(contact =>
            contact.email.includes(state.term) ||
            contact.fullName.includes(state.term) ||
            contact.tags.includes(state.term) ||
            String(contact.number).includes(state.term)
        )
    })

    const getContactById = (id: number) => {
        return state.contacts.find(contact => contact.id === id)
    }

    const deleteContactById = (id: number) => {
        state.contacts = state.contacts.filter(contact => contact.id !== id)
        router.push({ name: ContactRouteName.LIST_ROUTE })
    }

    const createContact = () => {
        state.contacts.push(state.newContact)
        state.newContact = {
            ...state.newContact,
            email: '',
            fullName: '',
            number: '',
        }
    }

    return {
        state,
        getContactById,
        contactActions,
        deleteContactById,
        searchedContacts,
        createContact
    }
}, {
    persist: true,
},)