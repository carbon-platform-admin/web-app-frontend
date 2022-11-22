export const colors = [
    '#123f2f',
    '#4c5843',
    '#945519',
    '#8ecae6',
    '#c8690e',
    '#081d25',

    '#1a3a46',
    '#386857',
    '#738564',
    '#e89d56',
    '#cd541d',
    '#335561',
    '#e5e5e5'
]

export const enumerate = (array) => {
    // allows user to iterate over each obj in the array with access to the index. This is a mirror of the python function
    let temp = [];
    for (let i = 0; i < array.length; i += 1) {
        temp.push([i, array[i]]);
    }
    return temp;
}

export function checkWishlist(product) {
    return (new Set(JSON.parse(localStorage.getItem('wishlist'))).has(JSON.stringify(product)))
}

export function concatBlog(content) {

    let cap = 150;

    if (content.length > cap) {
        content = content.slice(0, cap)
    }

    return content + "..."
}

export function moveSlideshow(dir, currIdx, slideShow, translationDist) {
    if (dir === 'next') {
        currIdx++;    
        currIdx = currIdx % featured.length;
    } else if (dir === 'back') {
        currIdx--;
        if (currIdx < 0) {
            currIdx = featured.length - 1;
        }
    }

    
    
    slideShow.setAttribute('style', `transform: translateX(-${currIdx * itemWidth}px)`);

    return currIdx
}

export class Category {
    constructor(title, subCategories, promotional_text) {
        this.title = title;
        this.link = this.generateLink(title);
        this.subCategories = subCategories ? this.generateSubCategories(subCategories) : [];
        this.promotional_text = promotional_text || "";
    };

    generateSubCategories(subCategories) {
        let temp = []
        
        subCategories.forEach((category_title) => {
            temp.push(new Category(category_title))
        })

        return temp;
    }
    
    generateLink(title) {
        return title.replaceAll(" ", "-").replaceAll(",", "").toLowerCase();
    }
}