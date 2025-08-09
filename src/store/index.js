import { create } from 'zustand';

export const domain = 'http://82.112.241.233:2500';

export const userCart = create((set) => ({
  value: [],
  addToCart: (newObj) => set((state) => ({ value: [...state.value, newObj] })),
}));

export const activeCategory = create((set) => ({
  value: null,
  selectCategoty: (categoty) => set(() => ({ value: categoty })),
  resetCategory: () => set(() => ({ value: null })),
}));

// export const selectedCats = create((set) => ({
//   value: [],
//   toggleCategory: (cat) => set((state) => {
//     let catIndex = state.value.findIndex((el)=>(el.documentId == cat.documentId ))
//     if(catIndex == -1){
//       return
//     }

//   }),
//   // addToCart: (newObj) => set((state) => ({ value: [...state.value, newObj] })),
// }));
