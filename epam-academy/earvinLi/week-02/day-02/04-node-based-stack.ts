// import { NodeClass } from './03-node-based-linked-list';

interface Stack {
  empty(): boolean;
  peek(): string;
  push(value: string): void;
  pop(): string;
}

class NodeClass {
  ele: string;
  next;

  constructor(ele) {
    this.ele = ele;
    this.next = null;
  }
}

class NodeBasedStack implements Stack {
  array;

  constructor() {
    this.array = [];
  }

  empty(): boolean {
    return this.array.length === 0;
  }

  peek(): string {
    return this.array[this.array.length - 1].ele;
  }

  push(newElement: string): void {
    const nodeClassToAdd = new NodeClass(newElement);
    this.array.push(nodeClassToAdd);
  }

  pop(): string {
    const popped = this.array.pop();
    return popped.ele;
  }
}

export default NodeBasedStack;

const nodeBasedStackOne = new NodeBasedStack();
console.log(nodeBasedStackOne.empty());
nodeBasedStackOne.push('2');
console.log(`Now the peek is: ${nodeBasedStackOne.peek()}.`);
nodeBasedStackOne.push('5');
console.log(`Now the peek is: ${nodeBasedStackOne.peek()}.`);
console.log(`The popped is: ${nodeBasedStackOne.pop()}.`);
console.log(`Now the peek is: ${nodeBasedStackOne.peek()}.`);
