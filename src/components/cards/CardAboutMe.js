import React from 'react'

export default function CardAboutMe() {
  return (
    <div className="xl:flex">
      <div className="bg-gray-800 rounded-lg text-center p-6 m-8 ">
        <icon></icon>
        <h2 className="text-[#878e99]">Web Design </h2>
        <p className="text-[#878e99] pt-2">
          J'aime creer des maquettes pour mes clients, et trouver le logo qui va
          leur convenir et les représenter.’ai toujours été passionnée par le
          web, le design et tout ce qui touche à la création. J’aime imaginer et
          concevoir des interfaces agréables et créatives pensées pour les
          utilisateurs.
        </p>
      </div>
      <div className="bg-gray-800 rounded-lg text-center p-6 m-8">
        <icon></icon>
        <h2 className="text-[#878e99]">Front-end</h2>
        <p className="text-[#878e99]">
          Je suis passionnée par la création de solutions fiables et intuitives
          pour les utilisateurs. Je suis capable d'intégrer des maquettes en
          utilisant html, css, js et react.
        </p>
      </div>
    </div>
  );
}
