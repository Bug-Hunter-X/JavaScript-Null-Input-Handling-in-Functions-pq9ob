# JavaScript Null Input Handling

This repository demonstrates a common error in JavaScript: improper handling of null or undefined function parameters.

## The Problem

Many JavaScript functions fail to explicitly check for null or undefined values passed as arguments.  This can result in runtime errors or unexpected behavior if these values are not handled correctly.

## The Solution

The best practice is to always check for null or undefined values at the beginning of a function, and to provide a suitable default value or handle the null case appropriately. This prevents runtime errors and leads to more robust code.

## Example

The example code shows a function with improved null handling.