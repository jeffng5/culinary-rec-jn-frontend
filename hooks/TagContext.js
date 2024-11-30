import { createContext, useState } from 'react';

const TagContext = createContext({ 
    
    tags : [], setTags: () => ([]), 
    // tagFunction : addTagHandler, removeTagFunction : removeTagHandler 

});

export function TagContextProvider(props) {

    const [tags, setTags] = useState([])


    
    
    function addTagHandler(props) {
        setTags((prevUserTag)=> [...prevUserTag, props]);
        };
    
    
    function removeTagHandler(props) {
        setTags(prevUserTag => {
            return prevUserTag.filter((mealId) => mealId !== props);
        })
    }
    
    const context = {tags, setTags,  
    // tagFunction : addTagHandler,
    // removeTagFunction : removeTagHandler

};
    console.log({tags})
    console.log({addTagHandler})
    return <TagContext.Provider value= {context}>
        {props.children}
    </TagContext.Provider>
    }


    export default TagContext