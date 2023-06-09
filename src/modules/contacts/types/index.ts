export interface IContact {
    id: number;
    fullName: string;
    number: string | number;
    email: string;
    tags: string[];
}

export interface IContactState {
    term: string;
    editModalVisible: boolean;
    contacts: IContact[];
    newContact: IContact;
}

export type ContactInfo = {
    [key: string]: string | number;
}