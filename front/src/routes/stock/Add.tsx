function Add() {
  return (
    <main>
      <h1>Ajout d'un article</h1>
      <form action="">
        <label>
          <div>Nom</div>
          <input type="text" />
        </label>
        <label>
          <div>Prix</div>
          <input type="text" />
        </label>
        <label>
          <div>Quantité</div>
          <input type="text" />
        </label>
        <button>Ajouter</button>
      </form>
    </main>
  );
}

export default Add;
