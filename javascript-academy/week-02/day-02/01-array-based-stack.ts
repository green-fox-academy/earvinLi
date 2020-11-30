interface Stack {
  empty(): boolean;
  peek(): string;
  push(value: string): void;
  pop(): string;
}

class ArrayBasedStack implements Stack {
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

  push(newElement: string): void {
    this.array.push(newElement);
  }

  pop(): string {
    const popped = this.array.pop();
    return popped;
  }
}

export default ArrayBasedStack;

const arrayBasedStackOne = new ArrayBasedStack();
console.log(arrayBasedStackOne.empty());
arrayBasedStackOne.push('2');
console.log(`Now the peek is: ${arrayBasedStackOne.peek()}.`);
arrayBasedStackOne.push('5');
console.log(`Now the peek is: ${arrayBasedStackOne.peek()}.`);
console.log(`The popped is: ${arrayBasedStackOne.pop()}.`);
console.log(`Now the peek is: ${arrayBasedStackOne.peek()}.`);
