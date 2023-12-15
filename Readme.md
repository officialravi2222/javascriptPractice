# Shorthand for creating promises 

**In instance three we are not storing promise in any variable infact we are directly chaining .then on it which is a shorthand for promise and it is doing the same functionality.**


## But the thing is that we will not every time calls setTimeout in promise ,infact sometimes we have have to bring data form database

##  Resolve is a method which also sets values things behid the scenes
## When resolve is exexuted then resolve is connected with .then moreover we can also pass values in it. 
## We can also pass data  in resolve and mostly the data is in the form of object.

# In case 4 :
## we are returning an object from resolve method and in  .then we are receiving the value in args and eventually by using interpolation we are printing the values

# Finally 
### With the help of finally we can tell the user the promise work is finished

# There are two syntaxes two handle promise :
 1. .then().catch().finally()
 2. async await

 # Promise is an object

 # Error Handling via ASYNC AWAIT

 Async await doesn't directly handles error

 While getting a response from Promise , if error comes then we have to wrap the code in try catch block

 # Fetch

 Fetch returns a promise