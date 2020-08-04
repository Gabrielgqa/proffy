import React from 'react';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

import './style.css';

function TeacherItem() {
  return (
    <article className="teacher-item">
      <header>
        <img src="https://avatars1.githubusercontent.com/u/6667778?s=460&u=3718480917e8e3244a6b989e1bff0806fe30f69d&v=4" alt="Gabriel Almeida"/>
        <div>
          <strong>Gabriel Almeida</strong>
          <span>Programação</span>
        </div>
      </header>
      <p>
        Is simply dummy text of the printing and typesetting industry.
        <br /> <br />
        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
      </p>
      <footer>
        <p>
          Preço/hora
          <strong>R$ 60,00</strong>
        </p>
        <button type="button">
          <img src={whatsappIcon} alt="Whatsapp"/>
          Entrar em contato
        </button>
      </footer>
    </article>
  )
}

export default TeacherItem;