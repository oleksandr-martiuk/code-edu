/*
 * Complete the 'fetchItemsToDisplay' function below.
 *
 * The function is expected to return a STRING_ARRAY.
 * The function accepts following parameters:
 *  1. 2D_STRING_ARRAY items
 *  2. INTEGER sortParameter
 *  3. INTEGER sortOrder
 *  4. INTEGER itemsPerPage
 *  5. INTEGER pageNumber
 */

function fetchItemsToDisplay(items, sortParameter, sortOrder, itemsPerPage, pageNumber) {
    // console.log('sortParameter = ', sortParameter);
    // console.log('sortOrder = ', sortOrder);
    // console.log('itemsPerPage = ', itemsPerPage);
    // console.log('pageNumber = ', pageNumber);
    // console.log('--------------------------------------');
    // console.log('items = ', items);

    // Write your code here
    const sp = sortParameter;
    const result = items.sort((a, b) => {
        return (sortOrder) ? +b[sp] - +a[sp] : +a[sp] - +b[sp]; // TODO: check sort parameter
    });

    const startPoint = itemsPerPage * pageNumber;
    const endPoint = startPoint + itemsPerPage;

    return result.slice(startPoint, endPoint).map(item => item[0]);
}

function main() {
