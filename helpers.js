
export class Helpers {
   

//fetch all recipes for main page
static async fetchRecipes() {
    const response = await fetch(`http://127.0.0.0.1:5431`)
    const json = await response.json();
    console.log(json.name)
    return json.name;
    }
    catch(error) {
        console.error(error)
    }
}
