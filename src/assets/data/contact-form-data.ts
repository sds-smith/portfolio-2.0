

export enum CONTACT_FORM_VALUES {
    FIRST_NAME = 'FIRST_NAME',
    LAST_NAME = 'LAST_NAME',
    EMAIL = 'EMAIL',
    MESSAGE = 'MESSAGE'
}

export const contactFormInputs = [
    {
        type : 'text',
        placeholder : 'Your First Name',
        name : 'first-name',
        value : CONTACT_FORM_VALUES.FIRST_NAME,
    },
    {
        type : 'text',
        placeholder : 'Your Last Name',
        name : 'last-name',
        value : CONTACT_FORM_VALUES.LAST_NAME,
    },
    {
        type : 'email',
        placeholder : 'Your Email Address',
        name : 'email',
        value : CONTACT_FORM_VALUES.EMAIL,
    }
]