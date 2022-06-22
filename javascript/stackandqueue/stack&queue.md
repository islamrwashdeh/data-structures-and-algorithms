
# Stacks and Queues
**Stack** is a container of objects that are inserted and removed according to the last-in first-out (LIFO) principle.     


**Queue** is a container of objects (a linear collection) that are inserted and removed according to the first-in first-out (FIFO) principle.

## Challenge
Using a Linked List as the underlying data storage mechanism, implement both a Stack and a Queue    


**Node**
Create a Node class that has properties for the value stored in the Node, and a pointer to the next node.     

**Stack**
Create a Stack class that has a top property. It creates an empty Stack when instantiated.     

**Queue**
Create a Queue class that has a front property. It creates an empty Queue when instantiated.


## API   


**Stack** 


push: adds a new node with that value to the top of the stack    


pop: Removes the node from the top of the stack    


peek: Returns: Value of the node located at the top of the stack    


isEmpty: Returns: Boolean indicating whether or not the stack is empty.

**Queue**

enqueue: adds a new node with that value to the back of the queue    


dequeue: Returns: the value from node from the front of the queue, removes the node from the front of the queue and should raise exception when called on empty queue.    


peek: Returns: Value of the node located at the top of the stack     


isEmpty: Returns: Boolean indicating whether or not the stack is empty.    
