interface LinkedList {
  add(value: string, index?: number): void;
  get(index: number): string;
  removeItem(value: string): void;
  remove(index: number): string;
  size(): number;
}

class NodeClass {
  ele: string;
  next;

  constructor(ele) {
    this.ele = ele;
    this.next = null;
  }
}

class NodeBasedLinkedList implements LinkedList {
  head;
  len: number;

  constructor() {
    this.head = null;
    this.len = 0;
  }

  size(): number {
    return this.len;
  }

  get(index: number): string {
    let currentNode = this.head;
    let baseIndex = 0;

    while(baseIndex++ < index) {
      currentNode = currentNode.next;
    }

    return currentNode.ele;
  }

  removeItem(value: string): void {
    let currentNode = this.head;
    let previousNode;
    let baseIndex = 0;

    if (currentNode.ele === value) {
      this.head = currentNode.next;
    } else {
      while (baseIndex++ < this.len) {
        if (currentNode.ele === value) {
          previousNode.next = currentNode.next;
          break;
        }
        previousNode = currentNode;
        currentNode = currentNode.next;
      }
    }

    this.len--;
  }

  remove(index: number): string {
    if (index > -1 && index < this.len) {
      let currentNode = this.head;
      let previousNode;
      let baseIndex = 0;

      if (index === 0) {
        this.head = currentNode.next;
      } else {
        while (baseIndex++ < index) {
          previousNode = currentNode;
          currentNode = currentNode.next;
        }
        previousNode.next = currentNode.next;
      }

      this.len--;
      return currentNode.ele;
    } else {
      throw 'Please provide a valid position.';
    }
  }

  add(value: string, index?: number): void {
    const nodeClassToAdd = new NodeClass(value);

    if (index === undefined) {
      let currentNode;

      if (this.head === null) {
        this.head = nodeClassToAdd;
      } else {
        currentNode = this.head;
        // Go all the way down to the latest element
        while (currentNode.next) currentNode = currentNode.next;
        currentNode.next = nodeClassToAdd;
      }

      this.len++;
    } else {
      if (index > -1 && index < this.len) {
        let currentNode = this.head;
        let baseIndex = 0;
        let previousNode;

        if (index === 0) {
          nodeClassToAdd.next = currentNode;
          this.head = nodeClassToAdd;
        } else {
          // Go all the way to the target element which makes currentNode smaller and smaller
          while (baseIndex++ < index) {
            previousNode = currentNode;
            currentNode = currentNode.next;
          }
          nodeClassToAdd.next = currentNode;
          previousNode.next = nodeClassToAdd;
        }

        this.len++;
      } else {
        throw 'Please provide a valid position.';
      }
    }

  }

  print(): void {
    console.log(this.head);
  }
}

// console.log('Test Add:\n')
// const nodeBasedLinkedListOne = new NodeBasedLinkedList();
// nodeBasedLinkedListOne.add('Apple');
// console.log(nodeBasedLinkedListOne);
// nodeBasedLinkedListOne.add('Banana', 0);
// console.log(nodeBasedLinkedListOne);
// nodeBasedLinkedListOne.add('Orange', 1);
// console.log(nodeBasedLinkedListOne);


console.log('Test Remove:\n')
const nodeBasedLinkedListOne = new NodeBasedLinkedList();
nodeBasedLinkedListOne.add('Apple');
nodeBasedLinkedListOne.add('Banana');
nodeBasedLinkedListOne.add('Orange');
console.log(nodeBasedLinkedListOne);
nodeBasedLinkedListOne.removeItem('Apple');
console.log(nodeBasedLinkedListOne);

console.log('Test Get:\n')
console.log(nodeBasedLinkedListOne.get(1));

console.log('Test Size:\n')
console.log(nodeBasedLinkedListOne.size());
