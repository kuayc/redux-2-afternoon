import axios from "axios";

const initialState = {
  purchases: [],
  budgetLimit: null,
  loading: false,
};

//CREATE THE BASE ACTION TYPES THAT WILL BE USED
const REQUEST_BUDGET_DATA = "REQUEST_BUDGET_DATA";

// SET UP AN ACTION CREATOR THAT RETURNS AN ACTION OBJECT WITH A TYPE AND PAYLOAD PROPERTY
export const requestBudgetData = () => {
  let data = axios.get("/api/budget-data").then((res) => res.data);
  return {
    type: REQUEST_BUDGET_DATA,
    payload: data,
  };
};

export default function budgetReducer(state = initialState, action) {
  switch (action.type) {
    case REQUEST_BUDGET_DATA + "_PENDING":
      // IN ORDER TO KEEP VALUES PREVIOUSLY STORED ON STATE, WE SPREAD THE CURRENT STATE OBJECT
      // INTO THE RETURNED OBJECT AND UPDATE ONLY THE VALUES IN STATE WE WANT TO CHANGE
      return { ...state, loading: true };
    case REQUEST_BUDGET_DATA + "_FULFILLED":
      return { ...state, ...action.payload, loading: false };
    default:
      return state;
  }
}
