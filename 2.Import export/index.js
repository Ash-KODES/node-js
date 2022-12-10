// == and ===
//"compare value only" and "compare value aswell as type"

/*why to import stuff?
let say you have some function written in some other file and instead of 
writing it again,you can just import it.
*/

//importing file 
const app =require('./helper');
console.log(app);
console.warn(app.x);
console.warn(app.y);

//Filtering array
var a=[1,3,4,5,6];
//Filter function->filter out a element.
var result=a.filter((item)=>{
    console.log(item===3);
    //can write any condition here,and apply it on item.
    return item===3
})
console.log(result);
