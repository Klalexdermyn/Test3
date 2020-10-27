function checkCommaConvertToNum(num) {
  return Number(num.match(/,/) ? num.replace(/,/, ".") : num);
}
export function countPay(loan, interest, term) {
  const loanConv = checkCommaConvertToNum(loan);
  const interestConv = checkCommaConvertToNum(interest) / 12 / 100;
  const termConv = checkCommaConvertToNum(term);

  const a = interestConv * (1 + interestConv) ** termConv;
  const b = (1 + interestConv) ** termConv - 1;
  const result = loanConv * (a / b);
  return result.toFixed(2);
}
