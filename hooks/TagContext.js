import { createContext, useState } from 'react';

const TagContext = createContext({ 
    
    tags : [], setTags: () => ([]), 
    id :[]

});

export function TagContextProvider({children}) {

    const [tags, setTags] = useState([])

    function addNameHandler(props) {
        setName((prevUserName)=> [...prevUserName, props]);
        };
    
    const context = {tags, setTags,  
    // tagFunction : addTagHandler,
    // removeTagFunction : removeTagHandler
    // name, setName, 
    // addNameHandler: addNameHandler, 
    // removeNameHandler: removeNameHandler
};
 
    console.log({addNameHandler})
    return <TagContext.Provider value= {context}>
        {children}
    </TagContext.Provider>
    }


    export default TagContext