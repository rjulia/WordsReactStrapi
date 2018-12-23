export const Types = {
	GET_WORDS_REQUEST: 'words/get_words_request',
	GET_WORDS_SUCCESS: 'words/get_words_success',
	DELETE_USER_REQUEST: 'words/delete_word_request',
    CREATE_USER_REQUEST: 'words/create_word_request',
};

export const getUsersRequest = () => ({
	type: Types.GET_WORDS_REQUEST
});

export const getUsersSuccess = ({items}) => ({
	type: Types.GET_WORDS_SUCCESS,
	payload: {
		items
	}
});

export const createUserRequest = ({firstName, lastName}) => ({
    type: Types.CREATE_USER_REQUEST,
    payload: {
        firstName,
        lastName
    }
});

export const deleteUserRequest = (wordId) => ({
    type: Types.DELETE_USER_REQUEST,
    payload: {
        wordId
    }
});