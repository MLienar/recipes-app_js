import { recipes } from './index.js'
import { fullSearch } from './kmpSearch.js'

export default function filterRecipes (filters) {
    const matchingRecipes = []
    const flatFilters = [... filters.finished, filters.typing].filter( e => e )
    const filterMatches = []
    if (filters.typing.length >= 3 || filters.finished.length > 0) {
        for (const recipe of recipes) {
            const matchingIndexes = fullSearch(recipe, flatFilters)
            if (matchingIndexes) {
                if (!filterMatches[matchingIndexes]) {
                    filterMatches[matchingIndexes] = [ recipe.id ]
                } else {
                    filterMatches[matchingIndexes].push(recipe.id)
                }                     
            }
        }
        console.log(filterMatches);
        // Check common number between arrays
        if (filterMatches.length === 0) {
            console.log("no matches");
            const emptyArray = []
            return emptyArray
        }
        const testArray = filterMatches.shift().filter(function(v) {
            return filterMatches.every(function(a) {
                return a.indexOf(v) !== -1
            })
        })
        // add matching recipe cards to returned array
        for (const number of testArray) {
            matchingRecipes.push(recipes[number])
        }
        return matchingRecipes
    } else {
        return recipes
    }
}   
   
  