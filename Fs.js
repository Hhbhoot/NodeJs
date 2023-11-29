
const fs = require('fs')

const {sum , diff} =require('./lib')

// open

const res = fs.openSync('Demo.txt','r+')

//  fs.open ('Demo.txt','r+',(err , data) => {

//     if(err) {
//          console.log(err)
//     }
//     else{

//         console.log("open succesfully")
//     }
// })

// Write

// const data = `Open a File: The fs.open() method is used to create, read, or write a file.
//  method is only for reading the file and fs.writeFil method is
// only for writing to the file, whereas the fs.ope method does several`

// // fs.writeFileSync('write.txt' , data)
// // console.log("file write successfully")

// fs.writeFile('writee.txt',data,(err,data)=>{

//      if(err){
//           console.log(err);
//      }
//      else{
//         console.log("write Succesfully")
//      }

// })

// Read Async

// const t1 = performance.now()

//  fs.readFile('demo.txt','utf-8',(err,data)=>{

//     if(err){
//         console.log(err)

//      }
//     else{
//          console.log(data)
//     }
//  })
// const t2 = performance.now()

// console.log(diff(t2,t1))

// Read Sync

//   const t3 = performance.now()

//  const text = fs.readFileSync('write.txt' ,'utf-8')

//  const t4 = performance.now()

//  console.log(text)

//  console.log(diff(t4,t3))

// const newData = `Parameters:
// ● path: It is a string, Buffer, URL, or file description integer that denotes
// the path of the file where it has to be written. Using a file descriptor
// will make it behave similarly to fs.write() method.
// ● data: It is a string, Buffer, TypedArray, or DataView that will be written
// to the file.
// ● options: It is a string or object that can be used to specify optional
// parameters that will affect the output. It has three optional
// parameters:
// ● encoding: It is a string value that specifies the encoding of the file.
// The default value isutf8.
// ● mode: It is an integer value that specifies the file mode. The default
// value is 0o666.
// ● flag: It is a string value that specifies the flag used while writing to
// the file. The default value is.
// ● callback: It is the function that would be called when the method is
// executed.
// ○ err: It is an error that would be thrown if the operation fail`

// sync Append

// const text = fs.appendFileSync('write.txt',newData)

// console.log("Append success")

//Async Append

// fs.appendFile('writee.txt',newData,(err,newData)=>{

//     if(err){
//         console.log(err)
//     }
//     else{
//         console.log( "append successfully ")
//     }
// })

// console.log(sum(10,5))

// console.log(diff(5,6))

// Rename Async

// fs.rename('demo.txt' , 'Demo.txt',(err)=>{

//     if(err){
//             console.log(err)
//     }
//     else{
//        console.log("Rename Successfully..")

//         }
// })

// rename sync

// fs.renameSync('write.txt' , 'WRITE.txt')

// Delete File => unlink

// fs.unlink('writee.txt',(err)=>{

//    if(err){
//       console.log(err)
//    }
//    else{
//       console.log("Unlink successfully")
//    }
// })

// close

fs.close(res, (err)=>{
   if(err){
      console.log(err)
   }
   else{
          console.log("closed")
   }
})
