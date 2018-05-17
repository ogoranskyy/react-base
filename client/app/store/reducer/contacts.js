export const contacts = (contacts = {}, action) => {
	switch(action.type) {
		case 'SET_ADDRESS':
			let id;

			const ids = Object.keys(contacts)	
			for (let i = 0; i <= ids.length; i++) {
				console.log(i)
				if (!ids.includes(i.toString())) {
					console.log(i, ids)
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
		default:
		 return contacts;
	}
}