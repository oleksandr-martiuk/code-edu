let o = {
   a: {
      b: 2
   }
};
// 2 objects are created. One refers to the other as one of its fields.
// The second one has a virtual reference because it was assigned as the value to the variable 'o'.
// Obviously none of them are subject to garbage collection.


let o2 = o; // variable 'o2' - the second reference to the object
o = 1; // now the object that originally had a reference to itself from 'o' has a unique reference through the variable 'o2'

let oa = o2.a; // reference to the field 'a' of the object.
// Now there are 2 references to the object: one to its field and the second to the 'oa' variable

o2 = "yo"; // The object that was originally referenced by the 'o' variable now has zero references to it.
// TODO: (?) May be destroyed by garbage collection.
// However, its 'a' field is still referenced by the 'oa' variable, so you cannot delete it yet

oa = null; // the original value of the object field 'a' in the o variable has zero references to itself.
// TODO: (!) can be destroyed by garbage collection.
