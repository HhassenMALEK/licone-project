export function LicornForm() {
  return (
    <form>
      <input type="text" name="name" placeholder="Nom de la licorne" />
      <input type="text" name="color" placeholder="Couleur de la licorne" />
      <input type="number" name="age" placeholder="Âge de la licorne" />
      <input type="text" name="breed" placeholder="Race de la licorne" />
      <button type="submit">Créer la Licorne</button>
    </form>
  );
}
