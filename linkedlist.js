class Node{
    constructor(){
        this.value = null;
        this.nextNode = null;
    }
}

class LinkedList{

    constructor()
    {
        this.head = null;
    }

    append(value)
    {
        if(this.head == null)
        {
            this.head = new Node()
            this.head.value = value
        }
        else{
            var current = this.head
            while(current.nextNode!=null)
            {
                current = current.nextNode
            }
            current.nextNode = new Node()
            current.nextNode.value = value
        }
    }

    prepend(value)
    {
        hello = new Node()
        hello.value = value
        current = this.head 
        hello.nextNode = current
        this.head = hello
    }

    size()
    {
        if (this.head == null)
        {
            return 0
        }
        else{
            const count = 1
            while(this.head.nextNode != null)
            {
                count += 1
            }
            return count
        }
    }

    head()
    {
        if (this.head == null)
        {
            return undefined;
        }
        else{
            return this.head.value;
        }
    }

    tail()
    {
        if (this.head == null)
        {
            return undefined;
        }
        else{
            var current = this.head
            while(current.nextNode!=null)
            {
                current = current.nextNode
            }
            return current.value;
        }
    }

    at(index)
    {
        if (index <= 0 || this.head== null)
        {
            return undefined
        }
        else{
            var current = this.head
            const count = 1
            while(current.nextNode != null)
            {
                if (count == index)
                {
                    return current.value
                }
                current = current.nextNode
                count += 1

            }
            if (count == index)
                {
                    return current.value
                }
        }
    }

    pop()
    {
        if (this.head == null)
        {
            return undefined
        }

        var present = this.head
        this.head = present.nextNode
        return present.value
    }

    contains(value)
    {
        if (this.head != null)
        {
            var present = this.head
            while (present.nextNode != null)
            {
                if (present.value == value)
                {
                    return true
                }
                present = present.nextNode
            }
            if (present.value == value)
            {
                return true
            }
        }
        return false;
    }


    findIndex(value)
    {
        if (this.head == null)
        {
            return -1
        }
        else{
            var count = 1
            var now = this.head 
            while (now.nextNode != null)
            {
                if (now.value == value)
                {
                    return count
                }
                now = now.nextNode
            }
            return -1
        }
    }

    toStrings()
    {
        const strings = ""

        if (this.head == null)
        {
            strings + " null"
        }

        var current = this.head
        while(current.nextNode!=null)
        {
            strings + `(${String(current.value)})`
            current = current.nextNode
        }

    }
}