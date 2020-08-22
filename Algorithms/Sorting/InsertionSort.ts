import LinkedList from '../../Data-Structures/Linked-Lists/LinkedList.ts';
import { plant_families } from './Data/PlantFamilies.ts';


function insertionSort(inputArr: number[] | string[]): Array<any> {
  const sorted = new LinkedList<any>();

  sorted.append(inputArr[0]);

  for (let i=1; i < inputArr.length; ++i) {

    let currentElement = inputArr[i];
    let currentNode = sorted.getHead();

    // Element is less than the lowest value
    if (currentElement < sorted.getHeadValue()) {
      sorted.prepend(currentElement);
    }
    // Element is greater than the highest value
    else if (currentElement > sorted.getTailValue()) {
      sorted.append(currentElement)
    }
    // Otherwise insert in its proper, sorted position
    else {
      for (let j=0; j < sorted.getLength()-1; ++j) {
        if (currentNode.getValue() < currentElement && currentNode.getNext().getValue() > currentElement) {
          sorted.insert(currentElement, j+1);
          break;
        }
        currentNode = currentNode.getNext();
      }
    }
  }
  return sorted.toArray();
}

function executionTime(method: any): string {
  const t0 = performance.now();
  method(plant_families.medium_list);
  const t1 = performance.now();
  return (t1-t0) + 'ms';
}


//---------------------------------------------------------------------
// ----------                 MAIN PROGRAM                   ----------
//---------------------------------------------------------------------
if (import.meta.main) {

  const numbers1  = [9,6,5,3,1,8,7,2,4];
  const numbers2  = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];
  const colors    = ["white", "black", "green", "blue", "orange"];

  console.log('\n------------------ Insertion Sort ------------------');
  console.log(insertionSort(numbers1));
  console.log(insertionSort(numbers2));
  console.log(insertionSort(colors));

  console.log('\n---------------- Algorithm Benchmarks ----------------');

  const a1 = Object.create({});
  a1.run_1 = executionTime(insertionSort);
  a1.run_2 = executionTime(insertionSort);
  a1.run_3 = executionTime(insertionSort);

  // const a2 = Object.create({});
  // a2.run_1 = executionTime(insertionSortModified);
  // a2.run_2 = executionTime(insertionSortModified);
  // a2.run_3 = executionTime(insertionSortModified);

  console.table([a1]);

  // RUN:   deno run Algorithms/Sorting/InsertionSort.ts
}

// --------------------------- Terminal Output: ---------------------------
//
// ------------------ Insertion Sort ------------------
// [
//   1, 2, 3, 4, 5,    
//   6, 7, 8, 9        
// ]
// [
//   0, 1, 2, 4,  5,   
//   6, 44, 63, 87, 99,
//   283
// ]
// [ "black", "blue", "green", "orange", "white" ]
//
// --------- Insertion Sort w/ Traveling Node ---------
// [
//   1, 2, 3, 4, 5,
//   6, 7, 8, 9
// ]
// [
//   0, 1, 2, 4,  5,
//   6, 44, 63, 87, 99,
//   283
// ]
// [ "black", "blue", "green", "orange", "white" ]
//
// ---------------- Algorithm Benchmarks ----------------
// ┌───────┬────────┬────────┬───────┐
// │ (idx) │ run_1  │ run_2  │ run_3 │
// ├───────┼────────┼────────┼───────┤
// │   0   │ "32ms" │ "34ms" │ "2ms" │
// │   1   │ "10ms" │ "12ms" │ "4ms" │
// └───────┴────────┴────────┴───────┘