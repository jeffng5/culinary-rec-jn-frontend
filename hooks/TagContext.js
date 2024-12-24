import { createContext, useState } from 'react';

const TagContext = createContext({ 
    
    tags : [], setTags: () => ([]), 
    name : [],
    image_url: [],
    id :[]

});

export function TagContextProvider(props) {

    const [tags, setTags] = useState([])
    const [name, setName] = useState([])
    const [image_url, setImage_Url] = useState([])

    
    
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
    name, setName, image_url, setImage_Url

};
    console.log({tags})
    console.log({addTagHandler})
    return <TagContext.Provider value= {context}>
        {props.children}
    </TagContext.Provider>
    }


    export default TagContext