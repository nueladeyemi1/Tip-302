# head = {
#         'value': 4,
#         'next': {
#             'value': 8,
#             'next' : {
#                 'value': 3,
#                 'next' : {
#                     'value': 1,
#                     'next': {
#                         'value': 7,
#                         'next': None
#                             }
#                          }
#                     }
#                 }
#         }

# print(head['next']['next']['value'])

# class Node:
#     def __init__ (self, value): #constructor
#         self.value = value
#         self.next = None

# class LinkedList:
#     def __init__ (self, value): #constructor
#         new_node = Node(value)
#         self.head = new_node
#         self.tail = new_node
#         self.length = 1

# my_linked_list = LinkedList(4)

# print(my_linked_list.head.value)


    #  def append(self, value):
    #         # create a node 
    #         # add the node to the end 
    #         value
    #     def prepend (self, value):
    #         # create a node 
    #         # add the node to the start
    #         value
    #     def insert(self, value):
    #          # create a node 
    #         # insert the node
    #         value






























#create a node

class Node:
    def __init__ (self, value):
        self.value = value
        self.next = None


#declearing the LinkedList

class LinkedList:
    def __init__ (self, value):
        new_node = Node(value)
        self.head =  new_node
        self.tail = new_node
        self.length = 1
    
    def print_list(self):
        temp = self.head
        while temp != None :
            print(temp.value)
            temp = temp.next

    def append(self, value):
        new_node = Node(value)
        if self.length == 0 :
            self.head =  new_node
            self.tail = new_node
        else:
            self.tail.next = new_node
            self.tail = new_node
        self.length +=1
        return True
    
    def pop(self, value):
        new_node = Node(value)
        if self.length == 0 :
            return None
        else:
            for ele in range(0, self.head.length):
                if ele.tail.next == None:
                    ele

my_new_linked_list = LinkedList(3)
my_new_linked_list.append(1)
my_new_linked_list.print_list()

# print(my_new_linked_list.head.value)