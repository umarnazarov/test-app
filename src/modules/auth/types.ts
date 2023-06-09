export interface IFormInput {
    type?: IInputTypes
    component: IInputComp
    placeholder: string
    value: string | ''
    disabled?: boolean
}

type IInputComp = 'InputText'

type IInputTypes = 'text' | 'password' | 'email'