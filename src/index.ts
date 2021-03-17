class Sorter {
    constructor(public collection: number[]) { }
    // to be updated
    sort(): void {
        const { length } = this.collection;

        for (let i = 0; i < length; i++) {
            for (let j = 0; j < length - 1 - 1; j++) {
                if (this.collection[j] > this.collection[j + 1]) {
                    const leftHand = this.collection[j];
                    this.collection[j] = this.collection[j + 1];
                    this.collection[j + 1] = leftHand
                }
            }
        }
    }
}

const sorter = new Sorter([69, 12, -5, 0]);
sorter.sort();
console.log(sorter.collection);
