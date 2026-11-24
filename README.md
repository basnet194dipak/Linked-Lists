# Linked Lists

A JavaScript implementation of a singly linked list, created as part of The
Odin Project's JavaScript curriculum.

## Features

The `LinkedList` class provides methods for:

- Adding values to the beginning or end of the list
- Checking the number of nodes in the list
- Reading the first or last value
- Reading a value at a given index
- Removing the first node
- Searching for a value
- Finding a value's index
- Printing the list as a string

## Getting Started

### Prerequisites

- A current version of Node.js
- ES module support

### Run the Demo

The project includes a demo in `main.js`. Run it with Node.js:

```bash
node main.js
```

When the linked list works correctly, the demo prints:

```text
(dog) -> (cat) -> (parrot) -> (hamster) -> (snake) -> (turtle) -> (null)
```

## Usage

Import `LinkedList` and add values with `append()` or `prepend()`:

```javascript
import { LinkedList } from "./linkedlist.js";

const list = new LinkedList();

list.append("dog");
list.append("cat");
list.prepend("mouse");

list.toStrings();
// (mouse) -> (dog) -> (cat) -> (null)
```

## API

| Method | Description |
| --- | --- |
| `append(value)` | Adds a node containing `value` to the end |
| `prepend(value)` | Adds a node containing `value` to the beginning |
| `size()` | Returns the number of nodes |
| `head()` | Returns the value in the first node |
| `tail()` | Returns the value in the last node |
| `at(index)` | Returns the value at the given index |
| `pop()` | Removes and returns the first node's value |
| `contains(value)` | Returns whether `value` exists in the list |
| `findIndex(value)` | Returns the index of `value`, or `-1` when not found |
| `toStrings()` | Logs and returns a string representation of the list |

## Project Structure

```text
Linked-Lists/
├── linkedlist.js  # Node and LinkedList implementations
├── main.js        # Example usage
└── README.md
```

## License

This project was created for educational purposes.
