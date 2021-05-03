
export const addItem = (title, content) => {
    return {
        type: 'ADD_ITEM',
        payload: {
            title: title,
            content: content
        }
    }
}

export const removeItem = (indx) => {
    return {
        type: 'REMOVE_ITEM',
        payload: indx
    }
}