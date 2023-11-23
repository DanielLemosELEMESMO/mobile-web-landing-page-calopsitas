import Image from 'next/image'
// import ImgBanner from 'public/parrot-cage-sit-crest-wallpaper.jpg'
import Banner from './components/Banner'
import Section from './components/Section'
import { GridGallery, GridGalleryImage, GridGalleryEmbed } from './components/GridGallery'
import { CTAButton } from './components/CommonComponents'
import './page.css'

const ImgBanner = '/parrot-cage-sit-crest-wallpaper.jpg'
const ctaText = 'CLIQUE E ENTRE EM CONTATO'
const ctaLink = 'https://wa.me/5527997117518?text=Olá,%20tenho%20interesse%20em%20comprar%20uma%20calopsita'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
        <Banner
          title="Filhotes Mansos em Vila Velha!"
          subtitle={()=>{return <span>Já estão alimentando sozinhos! <br></br> Escolha o Seu! Preço super baixo!</span>}}
          ctaText={ctaText}
          ctaLink={ctaLink}
          backgroundImage={ImgBanner}
          className="flex-1"
        />
        <Section>
          <h1 className='text-2xl font-bold'>Seu novo pet!</h1>
          <p>Adoráveis e inteligentes, as calopsitas não são apenas aves de estimação, elas interagem com seus donos e proporcionam muitos momentos de alegria. <br/><br/> Além disso, são muito fáceis de cuidar e não fazem bagunça. <br/><br/> Se você está procurando um pet para alegrar o seu dia, a calopsita é a escolha perfeita! 🦜</p>
          <GridGallery className='mt-4'>
            <GridGalleryImage sizeInGrid={6} imageUrl="/img1.jpg" />
            <GridGalleryImage sizeInGrid={6} imageUrl="/img2.jpg" />
            <GridGalleryImage sizeInGrid={6} imageUrl="/img3.jpg" />
            <GridGalleryImage sizeInGrid={6} imageUrl="/img4.jpg" />
          </GridGallery>
        </Section>
        <Section>
          <h1 className='text-2xl font-bold'>Como é ter uma calopsita?</h1>
          <Section>
            <h2 className="text-xl font-bold">Amigável e sociável</h2>
            <p>Fofura e inteligência juntos! Esses amiguinhos de penas são mais que aves de estimação, são praticamente amigos. Elas não só gostam de carinho, mas também são capazes de truques e interações.</p>
            <video controls src="/video-plutaozinho.mp4" width="320" height="240" className='my-10 rounded'>
              Seu navegador não suporta a tag de vídeo.
            </video>
            <GridGallery className="my-4">
              <GridGalleryImage sizeInGrid={6} imageUrl="/como-e-ter-calopsitas-1.jpg" />
              <GridGalleryImage sizeInGrid={6} imageUrl="/como-e-ter-calopsitas-2.jpeg" />
              <GridGalleryImage sizeInGrid={6} imageUrl="/como-e-ter-calopsitas-3.jpg" />
              <GridGalleryImage sizeInGrid={6} imageUrl="/como-e-ter-calopsitas-8.jpg" />
            </GridGallery>
            <p>Quer um bichinho pra animar o seu dia? Calopsita é a resposta! 🦜</p>
          </Section>

          <Section>
            <h2 className="text-xl font-bold">Dócil e Carinhosa</h2>
            <p>Calopsitas são aves muito dóceis e carinhosas. Elas adoram ficar perto de seus donos e são muito afetuosas. Além disso, são muito inteligentes e aprendem truques facilmente.</p>
            <video controls src="/como-e-ter-calopsitas-video-1.mp4" width="320" height="240" className='my-10 rounded'>
              Seu navegador não suporta a tag de vídeo.
            </video>
          </Section>
          <Section>
            <h2 className="text-xl font-bold">Treinamento e Beleza</h2>
            <p>Calopsitas são aves muito inteligentes e aprendem truques facilmente. Além disso, são muito vaidosas e adoram tomar banho. Elas são muito fáceis de treinar e podem aprender a fazer truques incríveis.</p>  
            <GridGallery className="my-4">
              <GridGalleryImage sizeInGrid={6} imageUrl="/img6.jpg" />
              <GridGalleryImage sizeInGrid={6} imageUrl="/img7.png" subtitle="Tomando banho (com borrifador de água)" />
            </GridGallery>
          </Section>
          <Section>
            <h2 className="text-xl font-bold">Sem bagunça em casa!</h2>
            <p>Calopsitas são aves muito limpas e não fazem bagunça.<br/><br/> Elas não precisam de banho, pois se limpam sozinhas (e raramente soltam penas). Além disso, não fazem barulho e não sujam a casa.</p>

          </Section>
        </Section>
        <Section>
          <h1 className='text-2xl font-bold text-center'>Observação:<br/> <span className='text-xl'>O PREÇO ESTÁ SUPER BAIXO!</span></h1>
          <CTAButton text={"ENTRE EM CONTATO AGORA MESMO"} link={ctaLink} className='my-4'/>
          <p className='text-center'>Clique no botão acima para mais informações!</p>
        </Section>
        <Section>
          <h1 className='text-2xl font-bold'>Ainda não tem certeza? </h1>
          <Section>
            <h2 className="text-xl font-bold">Fácil de cuidar</h2>
            <p>Calopsitas são aves muito fáceis de cuidar. Elas não precisam de banho (mas amam quando você borrifa água nelas), não fazem bagunça e não sujam a casa.<br/><br/> Além disso, são muito resistentes e não ficam doentes com facilidade.<br/><br/> Apenas tome cuidado com o que você deixa ao alcance delas, pois elas adoram roer coisas.</p>
            <GridGallery className="my-4">
              <GridGalleryImage sizeInGrid={6} imageUrl="/como-e-ter-calopsitas-4.jpg" imgPosition='20%' />
              <GridGalleryImage sizeInGrid={6} imageUrl="/img8.jpg" />
            </GridGallery>
          </Section>
          <Section>
            <h2 className="text-xl font-bold">Custos</h2>
            <p>Calopsitas são aves muito baratas de se cuidar.<br/><br/> Elas comem pouco e não precisam de muitos cuidados. Além disso, são muito resistentes e não ficam doentes com facilidade.</p>
            <GridGallery className="my-4">
              <GridGalleryImage sizeInGrid={6} imageUrl="/calopsita-meme-1.jpg" />
              <GridGalleryImage sizeInGrid={6} imageUrl="/como-e-ter-calopsitas-7.jpg" />
            </GridGallery>
          </Section>
          <Section>
            <h2 className="text-xl font-bold">Asas</h2>
            <br/>
            <p className='font-bold text-lg'>E se deixar as asas crescerem?</p>
            <br/>
            <p>Ao considerar a convivência de uma calopsita em casa, surge a decisão sobre cortar ou não suas asas. No nosso caso, inicialmente, optávamos por permitir que nossas calopsitas voassem livremente dentro de casa, mantendo as janelas fechadas (temos uma porta que separa a sala dos quartos, o que foi útil). Essa liberdade proporcionava uma experiência única de interação e nos permitia apreciar a graça natural dessas aves em voo.</p>
            <br/>
            <p>Entretanto, não estava tão confortável nosso ambiente, pois não tinhamos uma tela adequada para deixar as janelas abertas (você pode ter se preferir), então decidimos experimentar o corte de penas das asas. Essa escolha não causa dor às calopsitas, pois </p>
            <br/>
            <p className='font-bold text-lg'>Como elas ficam de asa cortada?</p>
            <br/>
            <p>Ao optar pelo corte de penas das asas, a convivência é mais tranquila e você terá menos ansiedade em relação a possíveis acidentes ou fugas. <br/><br/> <span className='font-bold'>Essa prática não afeta o bem-estar das calopsitas</span>, e elas continuam a desfrutar de uma vida confortável e saudável em casa.</p>
            <br/>
            <p><span className='font-bold'>Cortar as asas não causa dor!</span> <br/> Pode acalmar o coração, assim como você nós também tivemos esse medo um dia. Mas agora sabemos que as penas são constituídas por tecido morto e não possuem terminações nervosas.</p>
            <br/>
            <br/>
            <p>É importante destacar que a decisão de cortar as asas ou não é pessoal e depende das circunstâncias específicas de cada lar. Seja qual for a escolha, o mais crucial é proporcionar um ambiente seguro, estimulante e amoroso para sua calopsita, garantindo que ela possa desfrutar de uma vida plena e feliz ao seu lado.</p>
          </Section>
        <Section>
            <h1 className='text-2xl font-bold text-center'>Chegou até aqui?</h1>
            <GridGallery className="mt-4">
              <GridGalleryImage sizeInGrid={6} imageUrl="/img10.jpg" subtitle='Leva a gente pra sua casa 🥺' />
              <GridGalleryImage sizeInGrid={6} imageUrl="/img9.jpg" subtitle='Estamos te esperando 😉🦜' />
            </GridGallery>
            <br/>
            <p> Então você já sabe que a calopsita é o pet perfeito para você! 🦜</p>
          </Section>
          <h1 className='text-xl font-bold text-center'>O PREÇO ESTÁ SUPER BAIXO!</h1>
          <CTAButton text={ctaText} link={ctaLink}  className='my-4'/>
          <p className='text-center'>Clique no botão acima e busque logo a sua!</p>
        </Section>
        <footer className="flex-1 w-full">
          <div className="flex flex-col items-center justify-center py-8 bg-sky-950">
            <h1 className="text-2xl font-bold">Contato</h1>
            <p className="text-base text-center">Entre em contato conosco para mais informações:</p>
            <div className="flex items-center mt-4">
            <svg className="h-6 w-6 mr-2" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" viewBox="-12.16 -12.16 226.91 226.91" fill="#fff" stroke="#fff" stroke-width="7.901088000000001"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round" stroke="#CCCCCC" stroke-width="2.8362880000000006"></g><g id="SVGRepo_iconCarrier"> <g> <g> <path style={{fill:"#ffffff"}} d="M198.048,160.105l-31.286-31.29c-6.231-6.206-16.552-6.016-23.001,0.433l-15.761,15.761 c-0.995-0.551-2.026-1.124-3.11-1.732c-9.953-5.515-23.577-13.074-37.914-27.421C72.599,101.48,65.03,87.834,59.5,77.874 c-0.587-1.056-1.145-2.072-1.696-3.038l10.579-10.565l5.2-5.207c6.46-6.46,6.639-16.778,0.419-23.001L42.715,4.769 c-6.216-6.216-16.541-6.027-23.001,0.433l-8.818,8.868l0.243,0.24c-2.956,3.772-5.429,8.124-7.265,12.816 c-1.696,4.466-2.752,8.729-3.235,12.998c-4.13,34.25,11.52,65.55,53.994,108.028c58.711,58.707,106.027,54.273,108.067,54.055 c4.449-0.53,8.707-1.593,13.038-3.275c4.652-1.818,9.001-4.284,12.769-7.233l0.193,0.168l8.933-8.747 C204.079,176.661,204.265,166.343,198.048,160.105z M190.683,176.164l-3.937,3.93l-1.568,1.507 c-2.469,2.387-6.743,5.74-12.984,8.181c-3.543,1.364-7.036,2.24-10.59,2.663c-0.447,0.043-44.95,3.84-100.029-51.235 C14.743,94.38,7.238,67.395,10.384,41.259c0.394-3.464,1.263-6.95,2.652-10.593c2.462-6.277,5.812-10.547,8.181-13.02l5.443-5.497 c2.623-2.63,6.714-2.831,9.112-0.433l31.286,31.286c2.394,2.401,2.205,6.492-0.422,9.13L45.507,73.24l1.95,3.282 c1.084,1.829,2.23,3.879,3.454,6.106c5.812,10.482,13.764,24.83,29.121,40.173c15.317,15.325,29.644,23.27,40.094,29.067 c2.258,1.249,4.32,2.398,6.17,3.5l3.289,1.95l21.115-21.122c2.634-2.623,6.739-2.817,9.137-0.426l31.272,31.279 C193.5,169.446,193.31,173.537,190.683,176.164z"></path> </g> </g> </g></svg>
              <a className="text-base" href="tel:27 99711-7518">Telefone: (27) 99711-7518</a>
            </div>
            {/* <div className="flex items-center mt-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
              </svg>
              <p className="text-lg">Email: contato@calopsitas.com</p>
            </div> */}
          </div>
          <div className="bg-sky-900 py-4">
            <div className="container mx-auto flex flex-wrap justify-between px-2">
              <div className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                </svg>
                <p className="text-base">Coqueiral de Itaparica - Vila Velha, ES</p>
              </div>
              <div className="flex items-center mt-2">
                <svg className="h-5 w-5 mr-2" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" viewBox="-12.16 -12.16 226.91 226.91" fill="#fff" stroke="#fff" stroke-width="7.901088000000001"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round" stroke="#CCCCCC" stroke-width="2.8362880000000006"></g><g id="SVGRepo_iconCarrier"> <g> <g> <path style={{fill:"#ffffff"}} d="M198.048,160.105l-31.286-31.29c-6.231-6.206-16.552-6.016-23.001,0.433l-15.761,15.761 c-0.995-0.551-2.026-1.124-3.11-1.732c-9.953-5.515-23.577-13.074-37.914-27.421C72.599,101.48,65.03,87.834,59.5,77.874 c-0.587-1.056-1.145-2.072-1.696-3.038l10.579-10.565l5.2-5.207c6.46-6.46,6.639-16.778,0.419-23.001L42.715,4.769 c-6.216-6.216-16.541-6.027-23.001,0.433l-8.818,8.868l0.243,0.24c-2.956,3.772-5.429,8.124-7.265,12.816 c-1.696,4.466-2.752,8.729-3.235,12.998c-4.13,34.25,11.52,65.55,53.994,108.028c58.711,58.707,106.027,54.273,108.067,54.055 c4.449-0.53,8.707-1.593,13.038-3.275c4.652-1.818,9.001-4.284,12.769-7.233l0.193,0.168l8.933-8.747 C204.079,176.661,204.265,166.343,198.048,160.105z M190.683,176.164l-3.937,3.93l-1.568,1.507 c-2.469,2.387-6.743,5.74-12.984,8.181c-3.543,1.364-7.036,2.24-10.59,2.663c-0.447,0.043-44.95,3.84-100.029-51.235 C14.743,94.38,7.238,67.395,10.384,41.259c0.394-3.464,1.263-6.95,2.652-10.593c2.462-6.277,5.812-10.547,8.181-13.02l5.443-5.497 c2.623-2.63,6.714-2.831,9.112-0.433l31.286,31.286c2.394,2.401,2.205,6.492-0.422,9.13L45.507,73.24l1.95,3.282 c1.084,1.829,2.23,3.879,3.454,6.106c5.812,10.482,13.764,24.83,29.121,40.173c15.317,15.325,29.644,23.27,40.094,29.067 c2.258,1.249,4.32,2.398,6.17,3.5l3.289,1.95l21.115-21.122c2.634-2.623,6.739-2.817,9.137-0.426l31.272,31.279 C193.5,169.446,193.31,173.537,190.683,176.164z"></path> </g> </g> </g></svg>
                <p className="text-base">Entre em contato em qualquer momento.</p>
              </div>
              <div className="flex items-center flex-col items-start">
                <br/>
                <p>© 2023 Daniel Lemos. Todos os direitos reservados.</p>
                <a href="https://www.linkedin.com/in/daniel-cabral-lemos-9326a6191/" target="_blank" rel="noopener noreferrer" className="ml-2">LinkedIn</a>
              </div>
            </div>
          </div>
        </footer>
    </main>
  )
}
