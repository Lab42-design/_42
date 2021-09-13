/**
 * 
 * Layout
 * 
 */
 class Layout {

    constructor(...pages) {
        this.pages = pages;
        // console.log('___ class Layout');
    }

    load() {
        // try {
                // for (const i = 0; i < partialTags.length; i++) {
                //     this.partial(partialTags[i]);
                // }
                return Promise.all(
                    this.pages.map(
                        (page) => page.load()
                    )
                )

                // console.log('result ' + result);
                
                // return JSON.stringify(result);
        // } catch(e) {
        //     console.log('eee ' + e);
        // }
        
    }

    show(el) {
        for (let page of this.pages) {
            const div = document.createElement('div');
            console.log('div created');
            page.show(div);
            el.appendChild(div);
        }
    }

}



// class Layout {
//     constructor(...pages) {
//         this.pages = pages;
//     }

//     load() {
//         return Promise.all(this.pages.map((page) => page.load()));
//     }

//     show(el) {
//         for (let page of this.pages) {
//             const div = document.createElement('div');
//             page.show(div);
//             el.appendChild(div);
//         }
//     }
// }
