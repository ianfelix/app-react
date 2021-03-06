import React from 'react';
import decoracao from '../../assets/images/decoracao.jpg';
import arteIndigena from '../../assets/images/indigena.png';
import mestre from '../../assets/images/mestre.jpg';
import Card from '../../components/Card';
import Head from '../../components/Head';

const Norte = () => {
  return (
    <section className='margin-body animeDown'>
      <Head title='Norte' description='Essa é a página da região Norte' />
      <div className='content card-content content-grid-pages'>
        <div className='flex-card'>
          <Card
            img={arteIndigena}
            titleImg='Arte'
            titleCard='Arte Indígena'
            textCard=''
            textButton='Saiba mais'
            to='artes'
          />
        </div>
        <div className='flex-card'>
          <Card
            img={mestre}
            titleImg='Arte'
            titleCard='Mestres'
            textCard=''
            textButton='Saiba mais'
            to='mestres'
          />
        </div>
        <div className='flex-card'>
          <Card
            img={decoracao}
            titleImg='Decoração'
            titleCard='Decoração'
            textCard=''
            textButton='Saiba mais'
            to='decoracao'
          />
        </div>
      </div>
    </section>
  );
};

export default Norte;
