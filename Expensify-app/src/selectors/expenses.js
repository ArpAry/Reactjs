
//
//Get Visible Expenses
//

export default  (expense, { text, sortby, startDate, endDate }) => {
    return expense
      .filter((expense) => {
        const startDateMatch =
          typeof startDate !== "number" || expense.createdAt >= startDate;
        const endDateMatch =
          typeof endDate !== "number" || expense.createdAt <= endDate;
        const textMatch =
          expense.description.toLowerCase().includes(text.toLowerCase()) ||
          textMatch;
        return startDateMatch && endDateMatch && textMatch;
      })
      .sort((a, b) => {
        if (sortby === "Date") {
          return a.createdAt < b.createdAt ? 1 : -1;
        }
        else if(sortby==="amount")
        {
          return a.amount <b.amount ?1:-1;
        }
      });
  };