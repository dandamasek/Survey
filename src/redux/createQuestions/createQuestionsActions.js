
export const CREATE_QUESTIONS = 'CREATE_QUESTIONS';

export const createQuestions = (questions = []) => {
    return {
        type: CREATE_QUESTIONS,
        payload: questions
    }
}
 