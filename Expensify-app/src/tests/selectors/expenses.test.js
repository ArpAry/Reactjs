import selectExpenses from "../../selectors/expenses.js";
import moment from "moment";
const expenses=[{
    id:'1',
    description:'Gum',
    note:"",
    amount:195,
    createdAt:moment(0).subtract(4,"days").valueOf()

},
{
    id:'2',
    description:'Rent',
    note:"",
    amount:109500,
    createdAt:0},
{
    id:'3',
    description:'Credit Card',
    note:"",
    amount:4500,
    createdAt:moment(0).add(4,"days").valueOf()
}
];

test('should filter by text value',()=>{
    const filter={
        text:"e",
        sortby:"Date",
        startDate:undefined,
        endDate:undefined
    };
    const action=selectExpenses(expenses,filter);
    expect(action).toEqual([expenses[2],expenses[1]]);
});


test('should filter by startdate' ,()=>{
    const filters={
        text:'',
        sortby:'date',
        startDate:moment(0),
        endDate:undefined
    };
    const result=selectExpenses(expenses,filters);
    expect(result).toEqual([expenses[1],expenses[2]]);
});

test('should sort by enddate',()=>{
    const filters = {
        text: '',
        sortby: 'date',
        startDate: undefined,
        endDate: moment(0).add(2, 'days')
      };
      const task=selectExpenses(expenses,filters);
      expect(task).toEqual([expenses[0],expenses[1]]); 

});

test('sort by date',()=>{
    const filters = {
        text: '',
        sortby: 'date',
        startDate: undefined,
        endDate: undefined
      };
      const result = selectExpenses(expenses, filters);
      expect(result).toEqual([expenses[0],expenses[1],expenses[2]]);
//
});

test('sort by amount',()=>{
    const filters = {
        text: '',
        sortby: 'amount',
        startDate: undefined,
        endDate: undefined
      };
      const task=selectExpenses(expenses,filters);
      expect(task).toEqual([expenses[1],expenses[2],expenses[0]]);
})
