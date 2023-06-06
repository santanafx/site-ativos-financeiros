import React from 'react'
import './CarouselPrice.css'

export const CarouselPrice = () => {

    const array = [{ nome: 'lucas1' }, { nome: 'lucas2' }, { nome: 'lucas3' }, { nome: 'lucas4' }, { nome: 'lucas5' }, { nome: 'lucas6' }, { nome: 'lucas7' },]

    return (
        <section className='carouselPriceContainerBg'>
            <div className='carouselPriceContainer'>
                {array.map(element => (<div key={element.nome}>{element.nome}</div>))}
                {array.map(element => (<div key={element.nome}>{element.nome}</div>))}
            </div>
        </section>
    )
}
