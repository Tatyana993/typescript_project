/*import { renderBlock } from './lib.js'
import {IUser} from './interface'

export function renderUserBlock (favoriteItemsAmount:number, UserName: string, UserAvatar: string) {
  const hasFavoriteItems = Boolean(favoriteItemsAmount)
  
  renderBlock(
    'user-block',
    `
    <div class="header-container">
      <img class="avatar" ${UserAvatar ? UserAvatar : '/img/avatar.png'} alt="Wade Warren" />
      <div class="info">
          <p class="name">${UserName ? UserName : 'Wade Warren'}</p></p>
          <p class="fav">
          <i class="heart-icon ${hasFavoriteItems ? 'active"></i>' + favoriteItemsAmount : '"></i> ничего нет'}
          </p>
      </div>
    </div>
    `
  )
}


export function getUserData(): IUser | null {
  const lsItem: string = localStorage.getItem('user');
  if (lsItem)
  try {
    const user: unknown = JSON.parse(lsItem);
    if (typeof user === "object" && "UserName" in user && "AvatarUrl" in user)
    return {UserName: user["UserName"], AvatarUrl: user["AvatarUrl"]};
  }
  catch (e) {
    throw new Error("e");
    

  }
  return null
}


export function getFavoritesAmount(): number {
  const amount: unknown = localStorage.getItem("favoritesAmount");
  if (amount && !isNaN(Number(amount)))
 return +amount;
 else
 return 0
  
}



export function setLocalStorage() : void {
  localStorage.setItem("user", '{"UserName :"Tanya", "AvatarUrl" : "heart.png"}'),
  localStorage.setItem("favoritesAmount", "7")
}
*/


import { renderBlock } from './lib.js'
import { isUser, defaultUser } from './types.js'

export function renderUserBlock(user?: unknown, favorites?: unknown) {

  const hasFavoriteItems = Boolean(favorites);
  const userName = isUser(user) ? user.userName : defaultUser.userName;
  const avatarUrl = isUser(user) ? user?.avatarUrl : defaultUser.avatarUrl;

  renderBlock(
    'user-block',
    `
    <div class="header-container">
      <img class="avatar" src=${avatarUrl} alt="${userName}" />
      <div class="info">
          <p class="name">${userName}</p>
          <p class="fav">
            <i class="heart-icon ${hasFavoriteItems ? 'active"></i>' + Object.keys(favorites).length : '"></i> ничего нет'}
          </p>
      </div>
    </div>
    `
  )
}