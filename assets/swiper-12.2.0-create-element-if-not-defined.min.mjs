<<<<<<< HEAD
import{e as elementChildren,c as createElement}from"./swiper-12.2.0-utils.min.mjs";function createElementIfNotDefined(e,t,n,a){return e.params.createElements&&Object.keys(a).forEach(l=>{if(!n[l]&&!0===n.auto){let r=elementChildren(e.el,`.${a[l]}`)[0];r||(r=createElement("div",a[l]),r.className=a[l],e.el.append(r)),n[l]=r,t[l]=r}}),n}export{createElementIfNotDefined as c};
=======
import{e as elementChildren,c as createElement}from"./swiper-12.2.0-utils.min.mjs";function createElementIfNotDefined(e,t,n,a){return e.params.createElements&&Object.keys(a).forEach(l=>{if(!n[l]&&!0===n.auto){let r=elementChildren(e.el,`.${a[l]}`)[0];r||(r=createElement("div",a[l]),r.className=a[l],e.el.append(r)),n[l]=r,t[l]=r}}),n}export{createElementIfNotDefined as c};
>>>>>>> d73b3dc669ce2e982ec9fa182bb0a1b947fc20e2
//# sourceMappingURL=create-element-if-not-defined.min.mjs.map