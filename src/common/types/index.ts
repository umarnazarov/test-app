export enum ButtonType {
    PRIMARY = "primary",
    WARNING = "warning",
    SUCCESS = "success"
}

export interface IFormInput {
    type?: IInputTypes
    component?: IInputComp
    placeholder: string
    value: string | ''
    disabled?: boolean
    validation: any
}

type IInputComp = 'InputText'

export interface IFormGroup {
    title?: string
    inputs: IFormInput[]
}


type IInputTypes = 'text' | 'password' | 'email'