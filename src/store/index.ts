import { InjectionKey } from "vue";
import { createStore, useStore as baseUseStore, Store } from "vuex";

// define your typings for the store state
export interface State {
  connected: boolean;
}

// define injection key
export const key: InjectionKey<Store<State>> = Symbol();

export const store = createStore<State>({
  state: {
    connected: false,
  },
  mutations: {
    setWalletState(state, value) {
      console.log("succesfully connected!");
      state.connected = value;
    },
  },
  getters: {
    connected(state) {
      return state.connected;
    },
  },
});

export function useStore() {
  return baseUseStore(key);
}
