import { createContext, useState } from "react";
import PropTypes from "prop-types";
import dayjs from "dayjs";

export const StockContext = createContext({});

StockContextProvider.propTypes = {
  children: PropTypes.node,
};

export function StockContextProvider({ children }) {
  const [items, setItems] = useState(() => {
    const storedItems = localStorage.getItem("react-stock");
    if (!storedItems) return [];
    const items = JSON.parse(storedItems);
    items.forEach((item) => {
      item.createdAt = dayjs(item.createdAt);
      item.updatedAt = dayjs(item.updatedAt);
    });
    return items;
  });

  const addItem = (item) => {
    setItems((current) => {
      const updatedItems = [item, ...current];
      localStorage.setItem("react-stock", JSON.stringify(updatedItems));
      return updatedItems;
    });
  };

  const getItem = (itemId) => {
    return items.find((i) => i.id === +itemId);
  };

  const updateItem = (itemId, newAttributes) => {
    setItems((current) => {
      const itemIndex = current.findIndex((i) => i.id === itemId);
      const updatedItems = [...current];
      Object.assign(updatedItems[itemIndex], newAttributes, {
        updatedAt: dayjs(),
      });
      localStorage.setItem("react-stock", JSON.stringify(updatedItems));
      return updatedItems;
    });
  };

  const deleteItem = (itemId) => {
    setItems((current) => {
      const updatedItems = current.filter((item) => item.id !== itemId);
      localStorage.setItem("react-stock", JSON.stringify(updatedItems));
      return updatedItems;
    });
  };

  const stock = {
    items,
    addItem,
    getItem,
    updateItem,
    deleteItem,
  };

  return (
    <StockContext.Provider value={stock}>{children}</StockContext.Provider>
  );
}
