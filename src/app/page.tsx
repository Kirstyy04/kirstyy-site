"use client";

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

interface Photo {
  src: string;
  year: string;
  note: string;
}

export default function Home() {
  const photos: Photo[] = [
    {
      src: '/pictures/IMG_0595.jpeg',
      year: '2025',
      note: 'A special memory from this year!'
    }
  ];

  const [selectedPhoto, setSelectedPhoto] = useState<Photo | null>(null);

  const openModal = (photo: Photo) => {
    setSelectedPhoto(photo);
  };

  const closeModal = () => {
    setSelectedPhoto(null);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pastel-lavender via-pastel-blue to-pastel-pink flex flex-col items-center">
      <header className="w-full bg-pastel-lavender shadow-lg rounded-b-3xl py-6 px-8 flex justify-between items-center mb-8">
        <div className="flex items-center gap-3">
          <span className="pixel-heart"></span>
          <h1 className="text-5xl font-extrabold tracking-tight text-pastel-pink drop-shadow-lg">Kirstyy</h1>
        </div>
        <Link href="https://github.com/Kirstyy04" target="_blank" className="text-lg font-semibold text-pastel-blue hover:text-pastel-pink transition-colors duration-200">
          <span className="inline-block mr-2">GitHub</span>
          <span className="pixel-heart"></span>
        </Link>
      </header>

      <main className="container mx-auto p-4">
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-pastel-blue mb-4 animate-fade-in">About Me</h2>
          <p className="text-lg text-pastel-green bg-white/60 rounded-xl p-4 shadow-md animate-fade-in delay-100">
            Hi! I&apos;m Kirstyy. This is my personal photo gallery showcasing special memories.
          </p>
        </section>

        <section className="masonry-grid">
          {photos.map((photo, index) => (
            <div key={index} className="masonry-item group cursor-pointer rounded-3xl overflow-hidden shadow-xl border-2 border-pastel-blue hover:scale-105 transition-transform duration-300 animate-pop-in" style={{ animationDelay: `${index * 80}ms` }} onClick={() => openModal(photo)}>
              <Image
                src={photo.src}
                alt={`Memory from ${photo.year}`}
                width={400}
                height={300}
                className="object-cover w-full h-56 sm:h-64 md:h-72 transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute bottom-2 left-2 bg-white/80 rounded-lg px-3 py-1 text-xs text-pastel-blue shadow flex items-center gap-1">
                <span className="pixel-heart"></span>
                <span className="font-semibold">{photo.year}</span>
              </div>
            </div>
          ))}
        </section>
      </main>

      {selectedPhoto && (
        <div className="modal-overlay animate-fade-in" onClick={closeModal}>
          <div className="modal-content pastel-modal" onClick={(e) => e.stopPropagation()}>
            <button className="close-button pastel-close" onClick={closeModal}>&times;</button>
            <Image
              src={selectedPhoto.src}
              alt={`Memory from ${selectedPhoto.year}`}
              width={800}
              height={600}
              className="w-full h-auto object-contain rounded-2xl shadow-lg"
            />
            <div className="p-4 flex flex-col items-center">
              <p className="text-2xl font-bold text-pastel-blue flex items-center gap-2">
                <span className="pixel-heart"></span>
                {selectedPhoto.year}
              </p>
              <p className="mt-2 text-lg text-pastel-green">{selectedPhoto.note}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
