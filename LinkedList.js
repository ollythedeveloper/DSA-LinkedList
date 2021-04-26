class _Node {
    constructor(value, next) {
        this.value = value;
        this.next = next;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
    }

    insertFirst(item) {
        this.head = new _Node(item, this.head);
    }

    insertBefore(beforeItem, item) {
        //if list is empty
        if(!this.head) {
            return null
        }
        //if no head
        if (this.head === null) {
            this.insertFirst(item)
        }
        //if beforeItem is at head
        if (this.head.value === beforeItem) {
            let tempNode = this.head
            this.head = new _Node(item, tempNode)
            return
        }
        let currNode = this.head;
        let next
        let previousNode
        while (currNode.value !== beforeItem) {
            previousNode = currNode
            currNode = currNode.next
        }
        previousNode.next = new _Node(item, currNode)
    }

    insertAt(position, item) {
        //if no head
        if (this.head === null) {
            this.insertFirst(item)
            return
        }
        else {
            let currNode = this.head
            let index = 0
            while (currNode.next !== null && position !== index) {
                currNode = currNode.next
                index++
            }
            const tempNode = new _Node(item, currNode.next)
            currNode.next = tempNode
        }
    }

    insertAfter(afterItem, item) {
        //if list is empty
        if(!this.head) {
            return null
        }
        //if no head
        if (this.head === null) {
            this.insertFirst(item)
        }
        //if afterItem is at the head
        if (this.head.value === afterItem) {
            let tempNode = this.head.next
            this.head.next = new _Node(item, tempNode)
            return
        }
        let currNode = this.head
        let next = ''
        while (currNode.value !== afterItem) {
            currNode = currNode.next
        }
        if (currNode == null) {
            this.insertLast(item)
            return
        }
        next = currNode.next
        currNode.next = new _Node(item, next)
    }


    insertLast(item) {
        if (this.head === null) {
            this.insertFirst(item);
        }
        else {
            let tempNode = this.head;
            while (tempNode.next !== null) {
                tempNode = tempNode.next;
            }
            tempNode.next = new _Node(item, null);
        }
    }

    find(item) {
        //Start at the head
        let currNode = this.head;
        //If list is empty
        if (!this.head) {
            return null;
        }
        //Check for the item
        while (currNode.value !== item) {
            //Return null if it's the end of the list
            //and the item is not on the list
            if (currNode.next === null) {
                return null;
            }
            else {
                //otherwise, keep looking
                currNode = currNode.next;
            }
        }
        //Found it
        return currNode;
    }

    remove(item) {
        //if the list is empty
        if (!this.head) {
            return null;
        }
        //if the node to be removed is head, make the next node head
        if (this.head.value === item) {
            this.head = this.head.next;
            return;
        }
        //start at the head
        let currNode = this.head;
        //keep track of previous
        let previousNode = this.head;

        while ((currNode !==null) && (currNode.value !== item)) {
            //save the previou node
            previousNode = currNode;
            currNode = currNode.next;
        }
        if (currNode === null) {
            console.log('Item not found');
            return;
        }
        previousNode.next = currNode.next;
    }

}

function main() {
    const SLL = new LinkedList()
    SLL.insertFirst('Apollo')
    SLL.insertLast('Boomer')
    SLL.insertLast('Helo')
    SLL.insertLast('Husker')
    SLL.insertLast('Starbuck')
    SLL.insertLast('Tauhida')
    SLL.remove('Husker')
    SLL.insertBefore('Boomer', 'Athena')
    SLL.insertAfter('Helo', 'Hotdog')
    SLL.insertAt(2, 'Kat')
    SLL.remove('Tauhida')
    return SLL
}

const SLL = main()

function display(list) {
    let output = ''
    let currNode = list.head
    while (currNode !== null) {
        output += currNode.value
        if (currNode.next !== null) {
            output += ' => '
        }
        currNode = currNode.next
    }
    return output
}

console.log('display: ' + display(SLL))

function size(list) {
    let index = 0
    let currNode = list.head
    while (currNode !== null) {
        currNode = currNode.next
        index++
    }
    return index
}

console.log('size: ' + size(SLL))

function isEmpty(list) {
    if (!list.head) {
        return true
    }
    return false
}

console.log('List is empty: ' + isEmpty(SLL))

function findPrevious(item, list) {
    //if list is empty or has no head
    if (!list.head || list.head === null) {
        return null;
    }
    //if at the head
    if (list.head.value === item) {
        return list.head;
    }
    //else
    let currNode = list.head;
    let previousNode;
    while (currNode.value !== item) {
        previousNode = currNode;
        currNode = currNode.next;
    }
    return previousNode.value
}

console.log('Find Previous of Helo: ' + findPrevious('Helo', SLL))

function findLast(list) {
    //if list is empty or has no head
    if (!list.head || list.head === null) {
        return null;
    }
    //if at head
    if (list.head.next === null) {
        return list.head;
    }
    //else
    let currNode = list.head;
    while (currNode.next !== null) {
        currNode = currNode.next;
    }
    return currNode.value;
}

console.log('Find Last: ' + findLast(SLL))

function WhatDoesThisProgramDo(lst) {
    let current = lst.head;
    while (current !== null) {
        let newNode = current;
        while (newNode.next !== null) {
            if (newNode.next.value === current.value) {
                newNode.next = newNode.next.next;
            }
            else {
                newNode = newNode.next;
            }
        }
        current = current.next;
    }
}
// This function removes duplicate values from the list
//O(n) the time depends on the length of the list

function reverseList(list) {
    //if list is empty or has no head
    if (!list.head || list.head === null) {
        return null;
    }
    //else
    let currNode = list.head;
    let previousNode = null;
    let tempNode = currNode

    while (currNode !== null) {
        tempNode = currNode.next;
        currNode.next = previousNode;
        previousNode = currNode;
        currNode = tempNode;
    }
    list.head = previousNode;
    return display(list)
}

console.log('Reverse List: ' + reverseList(SLL))

function thirdfromEnd(list) {
    //if list is empty or has no head
    if (!list.head || list.head === null) {
        return null;
    }
    //if there are not at least 3 items in the list
    if (list.head.next === null || list.head.next.next === null) {
        return "There are not enough items on the list";
    }
    //else
    let currNode = list.head;
    while (currNode.next.next.next !== null) {
        currNode = currNode.next;
    }
    return currNode.value;
}

console.log(thirdfromEnd(SLL) + ' is the third item from the end of the list ' + display(SLL))

