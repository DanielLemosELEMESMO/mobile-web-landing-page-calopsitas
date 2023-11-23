'use client'
import React, {useState, useEffect} from 'react';
import Image from 'next/image';
import { Subtitle } from './CommonComponents';

const ImageModal = ({modalImage='/img1.jpg', closeModal, subtitle}: {modalImage:string, closeModal:()=>void, subtitle?:string}) => {
  const [opacity, setOpacity] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setOpacity(1);
    }, 60); // ajuste o tempo de acordo com a sua necessidade

    return () => clearTimeout(timer); // limpar o timer se o componente for desmontado
  }, []);

  return (
    <div onClick={closeModal} style={{opacity:opacity}} className="modal px-4 fixed top-0 left-0 w-full h-full bg-black bg-opacity-70 flex items-center justify-center z-20 transition-opacity">
      <div className="modal-content">
        <span className="close">&times;</span>
        <Image
          src={modalImage}
          alt="Gallery"
          width={500}
          height={500}
          className='w-full h-full object-cover rounded-xl'
        />
        {subtitle && <h2 className='text-black text-sm font-semibold bg-slate-200 rounded px-2 mt-2'
        >{subtitle}</h2>}
      </div>
    </div>
  );
}

interface GridGalleryProps {
  rowDivision?: number;
  children: React.ReactElement<GridGalleryImageProps | GridGalleryEmbedProps>[];
  className?: string;
}

const GridGallery = ({ rowDivision = 12, children, className }: GridGalleryProps) => {
  const [showModal, setShowModal] = useState<boolean>(false);
  const [modalImage, setModalImage] = useState<string>('');
  const [subtitle, setSubtitle] = useState<string | undefined>(undefined);

  const handleImageClick = (imageUrl: string, subtitle?: string|undefined) => {
    setModalImage(imageUrl);
    setShowModal(true);
    setSubtitle(subtitle);
  };
  return (
    <div
      className={className ? className + ' grid-gallery' : 'grid-gallery'}
      style={{
        display: 'grid',
        gridTemplateColumns: `repeat(${rowDivision}, 1fr)`,
        gap: '16px', // Espaçamento entre as imagens
      }}
    >
      {children.map((child, index) => {
        return React.cloneElement(child, {
          key: index,
          onClick: handleImageClick, // Adiciona a função de clique para abrir o modal
        });
      })}
      {showModal ? <ImageModal modalImage={modalImage} subtitle={subtitle} closeModal={() => {setShowModal(false)}} /> : null}
    </div>
  )
}

interface GridGalleryImageProps {
  sizeInGrid: number;
  imageUrl: string;
  maxImageOnClick?: boolean;
  onClick?: (imageUrl: string, subtitle: string|undefined) => void; // Adiciona a propriedade onClick
  subtitle?: string|undefined;
  imgPosition?: string;
}

const GridGalleryImage = ({ sizeInGrid, imageUrl, maxImageOnClick = true, onClick, subtitle=undefined, imgPosition }: GridGalleryImageProps) => {
  return (
    <div
      className="grid-gallery-image"
      style={{
        gridColumn: `span ${sizeInGrid}`,
        overflow: 'hidden',
        borderRadius: '8px', // Borda arredondada, ajuste conforme necessário
      }}
      onClick={() => {
        if (maxImageOnClick && onClick) {
          onClick(imageUrl, subtitle);
        }
      }}
    >
      <Image
        src={imageUrl}
        alt="Gallery"
        width={500}
        height={500}
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          objectPosition: imgPosition ? imgPosition : 'center',
        }}
      />
    </div>
  );
};

interface GridGalleryEmbedProps {
  sizeInGrid: number;
  children: React.ReactNode;
}

const GridGalleryEmbed = ({ sizeInGrid, children }: GridGalleryEmbedProps) => {
  return (
    <div
      className="grid-gallery-image"
      style={{
        gridColumn: `span ${sizeInGrid}`,
        overflow: 'hidden',
        borderRadius: '8px', // Borda arredondada, ajuste conforme necessário
      }}
    >
      {children}
    </div>
  );
}

export { GridGallery, GridGalleryImage, GridGalleryEmbed };