// @ts-check
//
// The line above enables type checking for this file. Various IDEs interpret
// the @ts-check directive. It will give you helpful autocompletion when
// implementing this exercise.

/**
 * Determines how long it takes to prepare a certain juice.
 *
 * @param {string} name
 * @returns {number} time in minutes
 */
export function timeToMixJuice(name) {
  
  switch (true) {
    case (name === 'Pure Strawberry Joy'):
      return 0.5;

    case (name === 'Energizer' || name === 'Green Garden'):
      return 1.5;

    case (name === 'Tropical Island'):
      return 3;

    case (name === 'All or Nothing'):
      return 5;

    default:
      return 2.5

  }
}

/**
 * Calculates the number of limes that need to be cut
 * to reach a certain supply.
 *
 * @param {number} wedgesNeeded
 * @param {string[]} limes
 * @returns {number} number of limes cut
 */
export function limesToCut(wedgesNeeded, limes) {

    let numberOfLimes = 0;

    if(wedgesNeeded === 0){
        return numberOfLimes;
    }
  
    let i = 0;

    while (i < limes.length) {
        
        switch (true) {
            case limes[i] === 'small':
                limes.splice(i, 1, 6);
                break;

            case limes[i] === 'medium':
                limes.splice(i, 1, 8);
                break;
                
            default:
                limes.splice(i, 1, 10);
                break;
            }
            
            i++;
        }
        
    let j = 0;
    
    while (j < limes.length) {
        let k = 0;
        
        while (k < 1) {
            
            wedgesNeeded -= limes[j];
            numberOfLimes = j + 1;
            
            if(wedgesNeeded <= 0){
                return numberOfLimes;
            }
            
            k++;
            
        }
        
        j++
    }
    
    return numberOfLimes;
}

/**
 * Determines which juices still need to be prepared after the end of the shift.
 *
 * @param {number} timeLeft
 * @param {string[]} orders
 * @returns {string[]} remaining orders after the time is up
 */
export function remainingOrders(timeLeft, orders) {
  
    let i = 0
    
    do {
        
        let j = 0
        while (j < orders.length && timeLeft > 0) {
            let time = timeToMixJuice(orders[0]);
            orders.splice(0, 1)
            timeLeft -= time;
            
            j--
        }
        
        i++
        return orders
    } while (i < orders.length);
}
