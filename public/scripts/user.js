import { renderBlock } from './lib.js';
export function renderUserBlock(favoriteItemsAmount, UserName, UserAvatar) {
    const hasFavoriteItems = Boolean(favoriteItemsAmount);
    renderBlock('user-block', `
    <div class="header-container">
      <img class="avatar" ${UserAvatar ? UserAvatar : '/img/avatar.png'} alt="Wade Warren" />
      <div class="info">
          <p class="name">${UserName ? UserName : 'Wade Warren'}</p></p>
          <p class="fav">
          <i class="heart-icon ${hasFavoriteItems ? 'active"></i>' + favoriteItemsAmount : '"></i> ничего нет'}
          </p>
      </div>
    </div>
    `);
}
