const initialState = {
    applicationData: null,
  };
  
  const applicationReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'STORE_APPLICATION_DATA':
        return {
          ...state,
          applicationData: action.payload,
        };
      default:
        return state;
    }
  };
  
  export default applicationReducer;
  