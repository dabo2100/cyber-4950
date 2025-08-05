import { create } from 'zustand';

export const userCart = create((set) => ({
  value: [],
  addToCart: (newObj) => set((state) => ({ value: [...state.value, newObj] })),
}));
