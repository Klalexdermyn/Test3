export function countPay(loan,interest,term){

const chekLoan = loan.match(/,/) ? loan.replace(/,/, '.') : loan;
const chekInt = interest.match(/,/) ? interest.replace(/,/, '.') : interest;
const chekTerm = term.match(/,/) ? term.replace(/,/, '.') : term;

const loanConv = Number(chekLoan);
const interestConv = Number(chekInt);
const termConv = Number(chekTerm);

const result = loanConv*(interestConv*(1+interestConv)**termConv)/((1+interestConv)**termConv - 1);
return result.toFixed(2);
}