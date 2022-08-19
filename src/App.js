import logo from './logo.svg';
import './App.css';
import {useState} from 'react';

function App() {

      

  const canciones = [
      {
            nombre: 'Play Hard (feat. Ne-Yo & Akon)',
            duracion: '3:21',
            artista: 'David Guetta',
            foto:"https://yt3.ggpht.com/ytc/AMLnZu9GSAGe1H_Dg54RqpJqgJvlSr8R4P-Aywp4-E8Oyw=s176-c-k-c0x00ffffff-no-rj",
            descripcion: 'Play Hard (feat. Ne-Yo & Akon) · David Guetta',
            url: 'https://www.youtube.com/embed/ZxM5XKVvKAE?list=RDZxM5XKVvKAE',
            img:'https://i.ytimg.com/vi/ZxM5XKVvKAE/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCXdVvnSJAuCtBZsWvDPCAxRYa04Q'
      },
      {
            nombre: 'Axwell Λ Ingrosso - Something New (Lyric Video)',
            duracion: '4:07',
            artista: 'Axwell Λ Ingrosso',
            foto:"https://yt3.ggpht.com/ytc/AMLnZu-FCPG81ay0-Qz0URm-hbmxdfUwF2NaWc0S3_PlFQ=s176-c-k-c0x00ffffff-no-rj-mo",
            descripcion: 'Original Out Now (Excl UK): http://axing.so/somethingnew',
            url: 'https://www.youtube.com/embed/eCH9gClZprM?list=RDZxM5XKVvKAE',
            img:"https://i.ytimg.com/vi/eCH9gClZprM/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDWkQMmrBAiRodHEAC_p01eFjaNUw"
      },
      {
            nombre: 'I Gotta Feeling',
            duracion: '4:49',
            artista: 'Black Eyed Peas',
            foto:"https://yt3.ggpht.com/BAtHU7XHPfD-tYvUuNglAOjSXkEJ-Nt3fznYg_NLU4wap-aJkdw7wgCNXworTo6zNt4gKv_cUQ=s176-c-k-c0x00ffffff-no-rj",
            descripcion: 'I Gotta Feeling · The Black Eyed Peas',
            url: 'https://www.youtube.com/embed/OIPmhkzN2ug?list=RDZxM5XKVvKAE',
            img:"https://i.ytimg.com/vi/OIPmhkzN2ug/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAPv3T4ZUi1QbjZ1v2LdrTnbS-RJw"
      },
      {
            nombre: 'Payphone',
            duracion: '3:51',
            artista: 'Maroon 5',
            foto:"https://yt3.ggpht.com/CL8tVHSaAetXksR5I_RCn1tgfvrfRfyeoVasD4c3Vav4-ikrZA0LzDZdIgg4tcDf90-yPQpndA=s176-c-k-c0x00ffffff-no-rj",
            descripcion: 'Payphone · Maroon 5 · Wiz Khalifa',
            url: 'https://www.youtube.com/embed/3ssXSY7f3s4?list=RDZxM5XKVvKAE',
            img:"https://i.ytimg.com/vi/3ssXSY7f3s4/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCQSJH2RK2Jv6FPdlA5WBhTrjz8MA"
      },
      {
            nombre: 'Home Well Go (Take My Hand) [Official Video]',
            duracion: '4:03',
            artista: 'Ultra Music',
            foto:"https://yt3.ggpht.com/5fCAtOaFnCfD61TLcNBPmvMMWCvhV_Bs9ilpM5vkPcgd9B3iBE7DWuHrxBWuoQokMBfTpkikVw=s176-c-k-c0x00ffffff-no-rj",
            descripcion: 'Steve Aoki & Walk Off The Earth - Home Well Go (Take My Hand) Available Now! ',
            url: 'https://www.youtube.com/embed/kAwSQq44O_U',
            img:"https://i.ytimg.com/vi/kAwSQq44O_U/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLA_b_9Rb7O7rHCJ5hf7kGBcjqC4HA"
      },
      {
            nombre: 'Play Hard (feat. Ne-Yo & Akon)',
            duracion: '3:21',
            artista: 'David Guetta',
            foto:"https://yt3.ggpht.com/ytc/AMLnZu9GSAGe1H_Dg54RqpJqgJvlSr8R4P-Aywp4-E8Oyw=s176-c-k-c0x00ffffff-no-rj",
            descripcion: 'Play Hard (feat. Ne-Yo & Akon) · David Guetta',
            url: 'https://www.youtube.com/embed/ZxM5XKVvKAE?list=RDZxM5XKVvKAE',
            img:'https://i.ytimg.com/vi/ZxM5XKVvKAE/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCXdVvnSJAuCtBZsWvDPCAxRYa04Q'
      },
      {
            nombre: 'Axwell Λ Ingrosso - Something New (Lyric Video)',
            duracion: '4:07',
            artista: 'Axwell Λ Ingrosso',
            foto:"https://yt3.ggpht.com/ytc/AMLnZu-FCPG81ay0-Qz0URm-hbmxdfUwF2NaWc0S3_PlFQ=s176-c-k-c0x00ffffff-no-rj-mo",
            descripcion: 'Original Out Now (Excl UK): http://axing.so/somethingnew',
            url: 'https://www.youtube.com/embed/eCH9gClZprM?list=RDZxM5XKVvKAE',
            img:"https://i.ytimg.com/vi/eCH9gClZprM/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDWkQMmrBAiRodHEAC_p01eFjaNUw"
      },
      {
            nombre: 'I Gotta Feeling',
            duracion: '4:49',
            artista: 'Black Eyed Peas',
            foto:"https://yt3.ggpht.com/BAtHU7XHPfD-tYvUuNglAOjSXkEJ-Nt3fznYg_NLU4wap-aJkdw7wgCNXworTo6zNt4gKv_cUQ=s176-c-k-c0x00ffffff-no-rj",
            descripcion: 'I Gotta Feeling · The Black Eyed Peas',
            url: 'https://www.youtube.com/embed/OIPmhkzN2ug?list=RDZxM5XKVvKAE',
            img:"https://i.ytimg.com/vi/OIPmhkzN2ug/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAPv3T4ZUi1QbjZ1v2LdrTnbS-RJw"
      },
      {
            nombre: 'Payphone',
            duracion: '3:51',
            artista: 'Maroon 5',
            foto:"https://yt3.ggpht.com/CL8tVHSaAetXksR5I_RCn1tgfvrfRfyeoVasD4c3Vav4-ikrZA0LzDZdIgg4tcDf90-yPQpndA=s176-c-k-c0x00ffffff-no-rj",
            descripcion: 'Payphone · Maroon 5 · Wiz Khalifa',
            url: 'https://www.youtube.com/embed/3ssXSY7f3s4?list=RDZxM5XKVvKAE',
            img:"https://i.ytimg.com/vi/3ssXSY7f3s4/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCQSJH2RK2Jv6FPdlA5WBhTrjz8MA"
      },
      {
            nombre: 'Home Well Go (Take My Hand) [Official Video]',
            duracion: '4:03',
            artista: 'Ultra Music',
            foto:"https://yt3.ggpht.com/5fCAtOaFnCfD61TLcNBPmvMMWCvhV_Bs9ilpM5vkPcgd9B3iBE7DWuHrxBWuoQokMBfTpkikVw=s176-c-k-c0x00ffffff-no-rj",
            descripcion: 'Steve Aoki & Walk Off The Earth - Home Well Go (Take My Hand) Available Now! ',
            url: 'https://www.youtube.com/embed/kAwSQq44O_U',
            img:"https://i.ytimg.com/vi/kAwSQq44O_U/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLA_b_9Rb7O7rHCJ5hf7kGBcjqC4HA"
      },
     
  ]    
  const [video, setVideo]= useState(canciones[0]);
  return (
    <div className="App">
      <header className="App-header">
        <div className='container-header-left'>
             
                   <i id="barras" className="fa-solid fa-bars"></i>
                   <i id='youtube' className="fa-brands fa-youtube"></i>
                   <h2>YouTube</h2>
        </div>
        <div className='container-header-center'>
                    <input className='buscador' type='text' placeholder='  Buscar'/>
                    <i id='search' className="fa-solid fa-search"></i>
                    <i id="microfono" className="fa-solid fa-microphone"></i>


        </div>
        <div className='container-header-right'>
                  <i id='camara' class="fa-solid fa-video"></i>
                   <i  id="campana" class="fa-solid fa-bell"></i>
                   <p>D</p>
        </div>
      </header>
      <main className='App-main'>
        <div className='container-main-left'>
              
              <iframe className='video-grande' width="950" height="572" src={video.url} title={video.nombre} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
              <p className='titulo-cancion'>{video.nombre}</p>
              
              <div className='container-iconos'>
                    <p className='visualizaciones'>2M Visualizaciones...</p>
                    <div className='iconos-inside'>
                        <div className='icon-individual'>
                              <i className="fa-solid fa-thumbs-up"></i>
                              <p>Me gusta</p>
                        </div>
                        <div className='icon-individual'>
                              <i className="fa-solid fa-thumbs-down"></i>
                              <p>No me gusta</p>
                        </div>
                        <div className='icon-individual'>
                              <i className="fa-solid fa-share"></i>
                              <p>Compartir</p>
                        </div>
                        <div className='icon-individual'>
                              <i class="fa-solid fa-download"></i>
                              <p>Descargar</p>
                        </div>
                        <div className='icon-individual'>
                              <i class="fa-solid fa-scissors"></i>
                              <p>Clip</p>
                        </div>
                        <div className='icon-individual'>
                              <i className="fa-solid fa-hard-drive"></i>
                              <p>Guardar</p>
                        </div>
                        <div className='icon-individual'>
                              <i className="fa-solid fa-ellipsis"></i>
                        </div>
                    
                    </div>

              </div>
              
              <section className='container-info-video'>
                    <div className='container-info-video-img'>
                            <img src={video.foto}/>
                    </div>
                    <div className='container-info-description'>
                          <h4>{video.artista}</h4>
                          <p className='subscriptores'>24,4 M de subscriptores</p>
                          <p className='info-description'>
                             {video.descripcion}
                          </p>
                          <p className='mas'>MOSTRAR MÁS</p>
                    </div>
                    <div className='container-sub'>
                          <button>SUSCRIBIRME</button>
                    </div>
              </section>
              <p className='ultimo-container'>Los comentarios estan desactivados. <span className='mas-info'>Más información</span></p>
        </div>  
        
        
        <div className='container-main-right'>
                  <div className='container-box-videos'>
                        <div className='box-videos-info'>
                                 <div className='videos-info-text'>
                                    <p>Mix: {video.nombre}</p>
                                    <p><small>YouTube</small></p>
                                 </div>
                                 <div className='videos-info-x'>
                                    <i className="fa-solid fa-times"></i>
                                 </div>

                        </div>
                        <div className='barras-verticales'>
                              <i className="fa-solid fa-ellipsis-vertical"></i>
                        </div>
                        <div className='container-videos-mix'>
                              {canciones.map(cancion => {
                                    return(
                                          <div onClick={()=>{
                                                setVideo(cancion);
                                          }} className='video-mix'>
                                               <div className='video-mix-img-time'>
                                                      <img className='video-small' src={cancion.img} alt={cancion.descripcion}/>
                                                      <p className='time'>{cancion.duracion}</p>
                                               </div>
                                               <div className='info-video-mix'>
                                                      <h5>{cancion.nombre}</h5>
                                                      <h6>{cancion.artista}</h6>
                                               </div>
                                               <div className='video-mix-icons'>
                                                      <i className="fa-solid fa-trash"></i>
                                                      <i className="fa-solid fa-ellipsis-v"></i>
                                               </div>
                                          </div>
                                    )
                              })}
                        
                        </div>
                  </div>

        </div>

      </main>
    </div>
  );
}

export default App;
