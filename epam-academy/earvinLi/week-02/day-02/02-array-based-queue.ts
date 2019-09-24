interface Queue {
  empty(): boolean;
  peek(): string;
  add(value: string): void;
  remove(): string;
}

class ArrayBasedQueue implements Queue {
  array: string[];

  constructor(array: string[] = []) {
    this.array = array;
  }

  empty(): boolean {
    return this.array.length === 0;
  }

  peek(): string {
    return this.array[this.array.length - 1];
  }

  add(newElement: string): void {
    this.array.unshift(newElement);
  }

  remove(): string {
    const popped = this.array.pop();
    return popped;
  }
}

const arrayBasedQueueOne = new ArrayBasedQueue();
console.log(arrayBasedQueueOne.empty());
arrayBasedQueueOne.add('Apple');
console.log(`Now the peek is: ${arrayBasedQueueOne.peek()}.`);
arrayBasedQueueOne.add('Banana');
console.log(`Now the peek is: ${arrayBasedQueueOne.peek()}.`);
console.log(`The popped is: ${arrayBasedQueueOne.remove()}.`);
console.log(`Now the peek is: ${arrayBasedQueueOne.peek()}.`);
