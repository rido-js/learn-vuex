import { createStore } from "vuex";

import todos from "./modules/todos";
import agenda from "./modules/agenda";

import donatur from "./modules/donasi/donatur";
import clients from "./modules/donasi/clients";
import transaksi from "./modules/donasi/transaksi";
import counter from "./modules/counter";

// create store
const store = createStore({
  state: { isLoading: false },
  modules: { todos, agenda, donatur, clients, transaksi, counter },
});

export default store;
