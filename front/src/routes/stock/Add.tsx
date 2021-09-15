import { useState } from "react";
import { useHistory } from "react-router-dom";
import { articleHandler } from "../../handlers/ArticleHandler";
import { NewArticle } from "../../interfaces/Article";

function Add() {
  const [newArticle, setNewArticle] = useState({
    name: "truc",
    price: 2.34,
    qty: 123,
  } as NewArticle);

  const history = useHistory();

  function onChange(fieldName: string) {
    return function (event: React.ChangeEvent<HTMLInputElement>) {
      console.log("onChange", arguments);
      console.log("event.target.value: ", event.target.value);
      if (fieldName === "name") {
        setNewArticle({
          ...newArticle,
          name: event.target.value,
        });
        return;
      }
      const val = event.target.value === "" ? "" : +event.target.value;
      setNewArticle({
        ...newArticle,
        [fieldName]: val,
      });
    };
  }

  function onSubmit(event: React.SyntheticEvent) {
    console.log("onSubmit: ", arguments);
    event.preventDefault();
    articleHandler.add(newArticle);
    history.push("/stock");
  }

  return (
    <main>
      <h1>Ajout d'un article</h1>
      <form onSubmit={onSubmit}>
        <label>
          <div>Nom</div>
          <input
            type="text"
            value={newArticle.name}
            onChange={onChange("name")}
          />
        </label>
        <label>
          <div>Prix</div>
          <input
            type="number"
            value={newArticle.price}
            onChange={onChange("price")}
            min="0"
            step="0.01"
          />
        </label>
        <label>
          <div>Quantité</div>
          <input
            type="number"
            value={newArticle.qty}
            onChange={onChange("qty")}
            min="0"
          />
        </label>
        <button>Ajouter</button>
      </form>
    </main>
  );
}

export default Add;
