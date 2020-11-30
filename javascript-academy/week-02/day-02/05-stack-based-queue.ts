import ArrayBasedStack from './01-array-based-stack';
import NodeBasedStack from './04-node-based-stack';

interface Queue {
  empty(): boolean;
  peek(): string;
  add(value: string): void;
  remove(): string;
}

class StackBasedQueue implements Queue {
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

const stackBasedQueueOne = new StackBasedQueue();
console.log(stackBasedQueueOne.empty());
stackBasedQueueOne.add('Apple');
console.log(`Now the peek is: ${stackBasedQueueOne.peek()}.`);
stackBasedQueueOne.add('Banana');
console.log(`Now the peek is: ${stackBasedQueueOne.peek()}.`);
console.log(`The popped is: ${stackBasedQueueOne.remove()}.`);
console.log(`Now the peek is: ${stackBasedQueueOne.peek()}.`);
