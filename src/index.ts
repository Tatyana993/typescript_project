import { renderSearchFormBlock } from './search-form.js'
import { renderSearchStubBlock } from './search-results.js'
import { renderUserBlock } from './user.js'
import { renderToast } from './lib.js'

window.addEventListener('DOMContentLoaded', () => {
  renderUserBlock(9, "Tatyana Flaum", "https://gbcdn.mrgcdn.ru/uploads/avatar/2576928/attachment/thumb-6c5900c6abe0ca2167b7109fc2696185.jpeg")
  renderSearchFormBlock(null, null)
  renderSearchStubBlock()
  //renderToast(
      //{text: 'Это пример уведомления. Используйте его при необходимости', type: 'success'},
      //{name: 'Понял', handler: () => {console.log('Уведомление закрыто')}}
  //)
})

