// CREATE AN INITIAL STATE OBJECT THAT WILL BE PASSED THROUGH THE REDUCER TO SET AN INITIAL STATE FOR THE STORE
const initialState = {
  purchases: [],
  budgetLimit: null,
  loading: false,
};

// EXPORT DEFAULT A REDUCER FUNCTION THAT RETURNS A STATE OBJECT
export default function reducer(state = initialState, action) {
  return state;
}
