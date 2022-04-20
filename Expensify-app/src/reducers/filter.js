// Filter Reducer
const defaultFilterReducer = {
    text: "",
    sortby: "Date",
    startDate: undefined,
    endDate: undefined,
  };
  export default (state = defaultFilterReducer, action) => {
    switch (action.type) {
      case "SET_TEXT_FILTER":
        return { ...state, text: action.text };
      case "SORT_BY_DATE":
        return { ...state, sortby: "date" };
      case "SORT_BY_AMOUNT":
        return { ...state, sortby: "amount" };
      case "SORT_BY_START_DATE":
        return { ...state, startDate: action.startDate };
      case "SORT_BY_END_DATE":
        return { ...state, endDate: action.endDate };
      default:
        return state;
    }
  };