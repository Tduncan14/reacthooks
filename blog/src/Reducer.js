


export function reducer(state,action){

    switch(action.type){


        case 'LOGIN' :

        
        return{...state ,username:'Treek', password:'pokemon1'}


      case 'REGISTER':
          return{...state, username:'Treek', password:'pokemon1', passwordRepeat:'pokemon1'}


     case 'LOGOUT':
         




    }




}






// function reducer(state,action){



//     switch(action.type){

//         case'TOGGLE_EXPAND':
//         return{...state,expandPosts: !state.expandPosts}
       
//         case'CHANGE_FILTER':
//         if(action.all){
//             return {...state, filter:'all'}
//         }

//         let filter = typeof state.filter === 'object' ? state.filter:{}

//         if(action.fromDate){
//             filter = {...filter, fromDate: action.fromDate}
//         }

//         if(action.byAuthor){
//             filter = {...filter, byAuthor:action.byAuthor}
//         }

         
//         return {...state,filter}



//         default:
//              throw new Error()

//     }
// }