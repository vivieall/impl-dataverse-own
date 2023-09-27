export const renderItems = (dataArray) => {
  const listItem = dataArray.map(element => `
    <li class="scientist-card" data-id="${element.id}" itemscope itemtype="https://schema.org/Person">
      <dl itemscope itemtype="WomenInTech">
        <img itemprop="image" src="${element.imageUrl}" alt="${element.name}">
        <dt>Nombre</dt><dd itemprop="name">${element.name}</dd>
        <dt>Destacada en</dt><dd itemprop="shortDescription">${element.shortDescription}</dd>
        <dt>Especialista en</dt><dd itemprop="mainField">${element.facts.mainField}</dd>
      </dl>
    </li>
  `).join('');

  return `<ul class='cointainer-cards'>${listItem}</ul>`;
}
