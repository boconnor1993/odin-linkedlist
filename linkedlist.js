class Node {
    constructor(value = null, nextNode = null) {
        this.value = value;
        this.nextNode = nextNode;
    }
}

class LinkedList {
    constructor() {
        this.headNode = null;
    }

    append(value) {
        const newNode = new Node(value);
        if (this.headNode === null) {
            this.headNode = newNode;
        } else {
            let currentNode = this.headNode;
            while (currentNode.nextNode !== null) {
                currentNode = currentNode.nextNode;
            }
            currentNode.nextNode = newNode;
        }
    }

    prepend(value) {
         const newNode = new Node(value, this.headNode);
         this.headNode = newNode;
    }

    size() {
        let counter = 0;
        let currentNode = this.headNode;
        while (currentNode !== null) {
            counter += 1
            currentNode = currentNode.nextNode;
        }
        return counter;
    }

    head() {
        return this.headNode;
    }

    tail() {
        let currentNode = this.headNode;
        while (currentNode.nextNode !== null) {
            currentNode = currentNode.nextNode;
        }
        return currentNode;
    }
}