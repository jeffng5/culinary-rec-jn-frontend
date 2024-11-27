import { createContext, useState } from 'react';

const TagContext = createContext({ tag : [] });

export function TagContextProvider(props) {

    // const [tags, setTags] = useState([])

    // function addTagHandler(props) {}
    //     setTags((prevUserTag)=> {
    //         return prevUserTag.concat(props)
    //     })
    
    
    // function removeTagHandler(tagg) {
    //     setTags(prevUserTag => {
    //         return prevUserTag.filter(thing => thing.tag !== tagg);
    //     })
    // }
    
    const context = {tag : []} 
    // tagFunction : addTagHandler,
    // removeTagFunction : removeTagHandler};

    return <TagContext.Provider value= {context}>
        {props.children}
    </TagContext.Provider>
    }


    export default TagContext