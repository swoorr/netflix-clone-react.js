import Head from 'next/head';
import Image from 'next/image';
import Banners from '../components/banners';
import Headers from '../components/headers';
import Series from '../components/series';

import { useEffect, useState } from 'react';
import axios from 'axios';

export default function Home() {

  const [Netflix, setNetflix] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setNetflix(JSON.parse(localStorage.getItem('netflix')));

    if (!localStorage.getItem('netflix')) {
      axios.get('https://run.mocky.io/v3/5c7289c2-45dd-4357-873b-933545ac32eb').then(resp => {
        localStorage.setItem('netflix', JSON.stringify(resp.data));
        setNetflix(resp.data);
        setIsLoading(false);
      });
    }
  }, []);

  if (!Netflix) return <p style={{ color: 'white' }}>Yükleniyor...</p>;

  return (
    <div>
      <Head>
        <title>Netflix | Clone</title>
        <meta name="description" content="Netflix clone by swor.dev" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Headers />

      {Netflix &&
        <div style={{ paddingTop: '10rem' }}>
          <Series rand="5" title="Gizem & Gerilim Dizileri" Netflix={Netflix} />
          <Series rand="10" title="Ödüllü Diziler" Netflix={Netflix} />
          <Series rand="33" title="En İyi Yapımlar" Netflix={Netflix} />
          <Series rand="102" title="Gerilim" Netflix={Netflix} />
        </div>
      }

    </div>
  );
}
