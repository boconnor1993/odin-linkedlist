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

    at(index) {
        let counter = 0;
        let currentNode = this.headNode;
    
        while (currentNode !== null) {
            if (index === counter) {
                return currentNode;
            }
            counter += 1;
            currentNode = currentNode.nextNode;
        }
    
        // If the loop finishes and no node is found, return null (index out of bounds)
        return null;
    }
    
    pop() {
        // If the list is empty, return early
        if (this.headNode === null) {
            return;
        }
    
        // If the list has only one node, set the head to null
        if (this.headNode.nextNode === null) {
            this.headNode = null;
            return;
        }
    
        let currentNode = this.headNode;
        let priorNode = null;
    
        while (currentNode.nextNode !== null) {
            priorNode = currentNode;
            currentNode = currentNode.nextNode;
        }
    
        priorNode.nextNode = null;
    }
    
}