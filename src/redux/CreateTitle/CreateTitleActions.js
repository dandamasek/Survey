
export const CREATE_TITLE = 'CREATE_TITLE';

export const createTitle = (nameTitle = 'WHAT IS RGB') => {
    return {
        type: CREATE_TITLE,
        payload: nameTitle
    }
}
 