export const contacts = (contacts = {}, action) => {
	switch(action.type) {
		case 'SET_ADDRESS':
			let id;

			const ids = Object.keys(contacts)	
			for (let i = 0; i <= ids.length; i++) {
				if (!ids.includes(i.toString())) {
					id = i;
				}
			}


            return {
            	...contacts,

                [id]:{
                	name: action.name,
                	address: action.address,
                	comments: [],
                	phone: action.phone,
                	id,
                }
                
			}
			
		case 'ADD_COMMENT':
			const contactId = action.comment.contactId
			const comments = contacts[contactId].comments.concat([action.generatedID])
			const contact = contacts[contactId]
			return {
				...contacts,
				[contactId]: {
					...contact,
					comments: comments
				}
			}
		default:
		 return contacts;
	}
}