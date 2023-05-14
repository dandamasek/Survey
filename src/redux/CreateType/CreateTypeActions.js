export const CREATE_TYPE = 'CREATE_TYPE';

export const createType = (nameType = 'text') => {
    return {
        type: CREATE_TYPE,
        payload: nameType
    }
}
 