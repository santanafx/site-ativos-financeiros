import React from 'react'
import './CarouselNews.css'

export const CarouselNews = () => {

    const array = [{ nome: 'lucas1' }, { nome: 'lucas2' }, { nome: 'lucas3' }, { nome: 'lucas4' }, { nome: 'lucas5' }, { nome: 'lucas6' }, { nome: 'lucas7' },]

    return (
        <section className='carouselNewsContainerBg'>
            <div className='carouselNewsContainer'>
                {array.map(element => (<div key={element.nome}>{element.nome}</div>))}
                {array.map(element => (<div key={element.nome}>{element.nome}</div>))}
            </div>
        </section>
    )
}
