
export const CREATE_QUESTIONS = 'CREATE_QUESTIONS';
export const CREATE_NAME = 'CREATE_NAME';

export const createQuestions = (questions = []) => {
    return {
        type: CREATE_QUESTIONS,
        payload: questions
    }
}

export const createId = (id = "") => {
    return {
        type: CREATE_NAME,
        payload: id
    }
}
 