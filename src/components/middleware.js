import { showAlert } from "../redux/actions"
import { CREATE_POST } from "../redux/types"

const forbidden= ['fuck', 'spam', 'php']

export function forbiddenWordsMiddleware({dispatch}){
    return function(next){
        return function(action){
            if(action.type === CREATE_POST){
                let words = action.payload.title.split(" ");
                let found = false
                for (let i=0; i<forbidden.length; i++) {
                    for(let j=0; j<words.length; j++) {
                        if(words[j] === forbidden[i]) {
                            found = true;
                        }
                    }
                }
                if(found) {
                    return dispatch(showAlert("Forbidden words"))
                }
            }
            return next(action)
        }
    }
}