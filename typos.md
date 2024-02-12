# Typos for *Essential TypeScript 4*

This file contains smaller errors that are unlikely to prevent the code examples from working and which I will correct in the next edition of the book. See [this](errata.md) file for mistakes that prevent the code examples from working as expected.

---

**Chapter 4**

On page 104, the `applyDiscount` function defines a `discount` parameter that is not used.

(Thanks to Olivier Payen for reporting this problem)

---

**Chapter 11**

On page 267, this sentence:

>   To resolve this problem, a type annotation can be used to tell the compiler that the array can contain Product objects, as shown in Listing 11-15.

should be:

>   To resolve this problem, a type annotation can be used to tell the compiler that the array can contain **Person** objects, as shown in Listing 11-15.

(Thanks to Alex Goulielmos for reporting this problem)

---

On page 273, this sentence:

>   The data array can contain any object created from a class that implements the Product array, although 
the function passed to the forEach method can access only the features defined by the interface unless 
objects are narrowed to a more specific type. 

should be:

>   The data array can contain any object created from a class that implements the **Person** array, although 
the function passed to the forEach method can access only the features defined by the interface unless 
objects are narrowed to a more specific type. 

(Thanks to Alex Goulielmos for reporting this problem)

---

On page 274, this sentence:

>   In the listing, the Customer 
class implements the Person and DogOwner interfaces, which means that the Person object assigned to 
the variable named alice can be added to the arrays typed for Person and DogOwner objects. 

should be:

>   In the listing, the Customer 
class implements the Person and DogOwner interfaces, which means that the Customer object assigned to 
the variable named alice can be added to the arrays typed for Person and DogOwner objects. 

(Thanks to Alex Goulielmos for reporting this problem)

