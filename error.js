const a = 5;


try {
  if (a === 4) {
    console.log("The value of a is 4")
  } else {
    throw  Error("The value of a is not 4");
  }
} catch (error) {

}
finally{

    console.log(" hello world")

}
