
//traditional way to import modules

// import { getUsers } from './userAPI/index'

// const loadBtn = document.getElementById('btn');

// loadBtn.addEventListener('click',()=>{
//     getUsers().then(json=>console.log(json))
// })


//using dynamic imports
const usersModule =()=> import('./userAPI/index');
//additional note: if we want to change bundle file name that is generated for userAPI 
//instead of this: src_userAPI_index_js.index ==> want to make it like userAPI
/**Do like this using webpackChunkName: 'needed file name' */
// const usersModule =()=> import(/* "webpackChunkName: userAPI" */ './userAPI/index');

const loadBtn = document.getElementById('btn');

loadBtn.addEventListener('click',async()=>{
    let {getUsers} = await usersModule();
    let data = await getUsers()
    console.log(data)
})