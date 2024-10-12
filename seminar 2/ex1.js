//Modify the program to include a default value if no name is provided, instead of asking the user for input.

//const sayHello =function (name){
    const sayHello=(name) => `hello,${name}`

    if(process.argv.length<3){
        console.log('tell me a name')
    }
    else{
        console.log(sayHello(process.argv[2]))
    }


//console.log(sayHello('Jim'))