export class CounterService {

    activeToInactive = 0;
    inactiveToActive = 0;

    updateCounterToInactive(count: number){
        this.activeToInactive = count;
    }

    updateCounterToActive(count: number){
        this.inactiveToActive = count;
    }
}
