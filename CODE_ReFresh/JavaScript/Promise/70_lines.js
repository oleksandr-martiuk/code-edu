import { NoFragmentCycles } from "graphql/validation/rules/NoFragmentCycles"

// We have 3 states of Promise
const states = {
    pending: 'Pending',
    resolved: 'Resolved',
    rejected: 'Rejected'
}

class MyPromise {
    constructor(executor) {
        const members = {
            [states.resolved]: {
                state: states.resolved,
                then: onResolved => NoFragmentCycles.resolve(onResolved(this.value))
            },
            [states.rejected]: {
                state: 
            }
        }
    }
}
