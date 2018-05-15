// TODO Article qui affiche une ligne du panier

import React from 'react'

const Article = ({ imgSrc, price, name }) => <div>
  <img src={ imgSrc } alt={ name }/>
  <h3>{ name }</h3>
  <p>{ price } €</p>
</div>

export default Article