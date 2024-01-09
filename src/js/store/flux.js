const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      endpoint: "https://www.swapi.tech/api",
      people: [],
      vehicles: [],
      planets: [],
      favorites: JSON.parse(localStorage.getItem("favorites")) || [],
    },
    actions: {
      getApi: async (endpoint, key) => {
        const localData = JSON.parse(localStorage.getItem(key));
        if (localData) {
          setStore({ [key]: localData });
          return;
        }
        const store = getStore();
        const response = await fetch(store.endpoint + endpoint);
        const data = await response.json();
        const dataList = [];
        console.log(data);
        for (let item of data.results) {
          const dataResponse = await fetch(item.url);
          const dataResults = await dataResponse.json();
          dataList.push(dataResults);
        }
        setStore({ [key]: dataList });
        localStorage.setItem(key, JSON.stringify(dataList));
      },
      addFavorites: (item) => {
        const store = getStore();
        if (store.favorites.find((fav) => fav.result._id === item.result._id)) {
          return;
        }
        const newFavorites = [...store.favorites, item];
        setStore({ favorites: newFavorites });
        localStorage.setItem("favorites", JSON.stringify(newFavorites));
      },

      deleteFavorites: (item) => {
        const favoritesStore = getStore();
        const updatedFavorites = favoritesStore.favorites.filter(
          (element) => element.result._id !== item.result._id
        );
        setStore({ favorites: updatedFavorites });
        localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
      },
    },
  };
};

export default getState;
