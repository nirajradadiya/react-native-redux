const postReducer = (state = [], action) => {
  switch(action.type) {
    case 'ADD_POST':
      return Object.assign({}, state, { 
                rent: action.rent,
                tenant: action.tenant,
                landlord: action.landlord
            });
    default:
      return state;
  }
}
export default postReducer;