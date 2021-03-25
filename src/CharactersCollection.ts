export class CharactersCollection {
    constructor(public data: string) { }

    get length(): number {
        return this.data.length
    }

    compare(leftIndex: number, rightIndex: number): boolean {
        // TODO: write logic for compare function
        return this.data[leftIndex].toLocaleLowerCase() > this.data[rightIndex].toLocaleLowerCase()
    }
    // Swap characters in a string
    swap(leftIndex: number, rightIndex: number): void {
        const characters = this.data.split('');

        const leftHand = characters[leftIndex];
        characters[leftIndex] = characters[rightIndex];
        characters[rightIndex] = characters[leftIndex];

        this.data = characters.join('')

    }
}