export default (expenses = []) => {
  return expenses
  .map(({ amount }) => amount)
  .reduce((total, num) => total + num, 0)
}
