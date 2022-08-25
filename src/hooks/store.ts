import create from "zustand";

interface TStore {
  cubes: TCube[];
  addCube: (cube: TCube) => void;
  removeCube: (position: TPosition) => void;
  setActiveTexture: (texture: string) => void;
  saveWorld: () => void;
  activeTexture: string;
}

export type TCube = {
  position: TPosition;
  type: string;
};

type TPosition = [x: number, y: number, z: number];

export const useStore = create<TStore>((set) => ({
  cubes: getLocalStorage("world") || [{ position: [0, 0, 0], type: "wood" }],
  addCube: (newCube) => set((state) => ({ cubes: [...state.cubes, newCube] })),

  removeCube: (position) =>
    set((state) => ({
      cubes: state.cubes.filter((c) => c.position != position),
    })),

  activeTexture: "",
  setActiveTexture: (activeTexture) =>
    set(() => ({
      activeTexture,
    })),

  saveWorld: () => set((state) => setLocalStorage("world", state.cubes)),
}));

const getLocalStorage = (key: string) =>
  JSON.parse(window.localStorage.getItem(key)!);

const setLocalStorage = (key: string, value: any) =>
  JSON.parse(window.localStorage.setItem(key, JSON.stringify(value))!);
