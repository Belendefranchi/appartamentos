import { create } from 'zustand'

export const usePropertyStore = create((set) => ({
  property: [],
  addProperty: (newProperty) => set(() => ({ property: newProperty })),
  removeProperty: () => set({ bears: [] }),
}))