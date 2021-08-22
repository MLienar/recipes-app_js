"use strict";exports.__esModule=!0,exports.tagList=exports.filterFunction=exports.recipes=void 0;var recipes_js_1=require("./js/recipes.js"),galleryCard_js_1=require("./js/galleryCard.js"),filterInit_js_1=require("./js/filterInit.js"),buildAllArrays_js_1=require("./js/buildAllArrays.js"),filterInit_js_2=require("./js/filterInit.js"),filterArrays_js_1=require("./js/filterArrays.js"),preciseFilter_js_1=require("./js/preciseFilter.js"),filterTags_js_1=require("./js/filterTags.js");require("./sass/main.scss");var propertiesArray={ingredients:[],appliances:[],ustensils:[]};exports.tagList=propertiesArray;var allRecipeCards=[];exports.recipes=allRecipeCards;var recipesContainer=document.querySelector("main");function refreshDOM(e){for(;recipesContainer.firstChild;)recipesContainer.removeChild(recipesContainer.firstChild);if(e.length>0)for(var r=0,i=e;r<i.length;r++){var s=i[r].buildCard();recipesContainer.appendChild(s)}else{var t=document.createElement("h3");t.innerText="Aucune recette ne correspond à votre critère… vous pouvez chercher « tarte aux pommes », « poisson », etc.",recipesContainer.appendChild(t)}}function refreshDOMFilters(e){for(var r in e){for(var i=document.getElementById(r+"-list");i.firstChild;)i.removeChild(i.firstChild);for(var s=0,t=e[r];s<t.length;s++){var n=t[s];i.appendChild(n)}}}function buildFilters(e){var r={ingredients:[],appliances:[],ustensils:[]};for(var i in e){var s=i.toString();for(var t in e[s]){var n=document.createElement("li");n.classList.add("dropdown_list-item"),n.innerText=t,n.addEventListener("click",(function(e){var r=e.target.innerText.toLowerCase();if(!filterInit_js_2.typedFilters.finished.includes(r)){filterInit_js_2.typedFilters.finished.push(r);for(var i=0,s=preciseInputs;i<s.length;i++){var t=s[i];t.value&&(t.value="")}}mainFilterFunction(filterInit_js_2.typedFilters),filterTags_js_1.default(r)})),r[s].push(n)}}refreshDOMFilters(r)}function allRecipesToArray(){for(var e=0,r=recipes_js_1.recettes;e<r.length;e++){var i=r[e],s=new galleryCard_js_1.galleryCard(i);allRecipeCards[s.id]=s,buildAllArrays_js_1.buildAllArrays(s,propertiesArray)}buildFilters(propertiesArray),refreshDOM(allRecipeCards)}allRecipesToArray();var mainInput=document.getElementById("main-search");function mainFilterFunction(e){var r={ingredients:[],appliances:[],ustensils:[]},i=filterArrays_js_1.default(e);refreshDOM(i);for(var s=0,t=i;s<t.length;s++){var n=t[s];buildAllArrays_js_1.buildAllArrays(n,r)}buildFilters(r)}exports.filterFunction=mainFilterFunction,mainInput.addEventListener("keyup",(function(e){mainFilterFunction(filterInit_js_1.handleFilters(e))}));var preciseInputs=document.querySelectorAll(".dropdown_input");preciseInputs.forEach((function(e){e.addEventListener("keyup",(function(e){buildFilters(preciseFilter_js_1.default(e))}))})),preciseInputs.forEach((function(e){e.addEventListener("focus",(function(e){e.composedPath[2].children[1].classList.remove("hidden")}))})),preciseInputs.forEach((function(e){e.addEventListener("focusout",(function(e){e.composedPath[2].children[1].classList.add("hidden")}))}));