// Copyright 2009 the Sputnik authors.  All rights reserved.
/**
 * If thisArg is not null(defined) the called function is passed ToObject(thisArg) as the this value
 *
 * @path ch15/15.3/15.3.4/15.3.4.4/S15.3.4.4_A5_T8.js
 * @description thisArg is Function()
 */

var obj=Function();

new Function("this.touched= true; return this;").call(obj);

//CHECK#1
if (!(obj.touched)) {
  $ERROR('#1: If thisArg is not null(defined) the called function is passed ToObject(thisArg) as the this value');
}

