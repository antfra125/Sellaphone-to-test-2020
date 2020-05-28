<template>
  <div id="details">
    <button id="open-order">Beställ</button>
    <input type="hidden" name="price" id="price" value="0" />
    <input type="text" name="first-name" id="first-name" placeholder="Förnamn" required />
    <input type="text" name="last-name" id="last-name" placeholder="Efternamn" required />
    <input type="tel" name="phone-number" id="phone-number" placeholder="Telefonnr" required />
    <input type="email" name="email" id="email" placeholder="E-postadress" required />
    <input type="number" name="street" id="street" placeholder="Gatuadress" required />
    <input type="text" name="zip" id="zip" placeholder="Postnr" required />
    <input type="text" name="city" id="city" placeholder="Ort" required />
    <input type="submit" value="Skicka" />
  </div>
</template>