import { capitalizeFirstLetter } from '../../../utils';
/*
    Passwords must have at least 6 and maximum 20 characters;
    Passwords must contain at least 1 upper case letter;
    Passwords must contain at least 1 lower case letter;
    Passwords must contain at least 1 number;
    Passwords must contain at least 1 special character;
 */
export const passwordValidation = {
    pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$#!%*?&]{6,20}$/,
    message: `Passwords must have at least 6 and maximum 20 characters;\nPasswords must contain at least 1 upper case letter;\nPasswords must contain at least 1 lower case letter;\nPasswords must contain at least 1 number;\nPasswords must contain at least 1 special character;`,
};

/*
    DD/MM/YYYY or DD-MM-YYYY
*/
export const dateValidation = {
    pattern: /^(0?[1-9]|[12]\d|3[01])[/\-](0?[1-9]|1[0-2])[/\-]\d{4}$/,
    message: 'Birthday should follow the format DD-MM-YYYY',
};

export const nameValidator = {
    pattern: /(\w.+\s).+/,
    message: 'Use full name (more then one name).',
};

export const emailValidator = {
    message: 'Invalid email address. Please try again!',
};

export const minMaxValidation = (name, min, max?) => {
    var pattern = new RegExp(`^[\\w\\W]{${min ?? ''},${max ?? ''}}$`, 'g');

    return {
        pattern,
        message: `${capitalizeFirstLetter(name)} must have at least ${min} ${
            max ? max + 'and maximum' : ''
        }characters.`,
    };
};
