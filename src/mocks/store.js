// Mock d'un store redux, on en a besoin pour nos tests de composants en isolation (shallow)
export const storeFake = (state) => {
  return {
    default: () => {},
    subscribe: () => {},
    dispatch: () => {},
    getState: () => {
      return { ...state };
    },
  };
};
