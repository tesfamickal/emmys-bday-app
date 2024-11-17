'use client';

import React, { useState } from 'react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function BirthdayPage() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const images = [
    "/images/photo1.jpeg",
    "/images/photo2.jpeg",
    "/images/photo3.jpeg",
    "/images/photo4.jpeg",
    "/images/photo5.jpeg",
    "/images/photo6.jpeg",
    "/images/photo7.jpeg",
  ];

  const personalLetter = `
Happy Birthday Emmy! I hope you had an amazing birthday, 
and felt the love you truly deserve and more. 
It's been a real pleasue and privledge to see how far you've come.
I know you're going to be and do amazing things.
There's so much I could say, but I'll just leave this little poem.
Be easy Emmy!

"I am not old, I am vintage.
Time has polished me,
Turned me into something rare,
With a story worth telling."

XOXOXOXO
Cheers to more life, Love ya!`;

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % images.length);
  };

  const previousImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-purple-500 to-green-500 px-4">
      <h1 className="text-4xl md:text-6xl font-bold text-white mb-8 animate-bounce text-center">
        Happy Birthday Emmy!
      </h1>

      <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
        {/* First Dialog - Photos and Message */}
        <Dialog>
          <DialogTrigger asChild>
            <Button className="w-full sm:w-auto bg-white text-purple-500 hover:bg-purple-100 text-base md:text-lg px-4 md:px-8 py-4 md:py-6 rounded-full shadow-lg transition-transform hover:scale-105">
              Click for a Special Message
            </Button>
          </DialogTrigger>

          <DialogContent className="max-w-[95vw] md:max-w-4xl max-h-[90vh] overflow-y-auto m-4">
            <DialogHeader>
              <DialogTitle className="text-xl md:text-2xl font-bold text-center mb-4">
              </DialogTitle>
            </DialogHeader>

            <div className="space-y-6">
              {/* Image Carousel */}
              <div className="relative w-full h-[300px] md:h-[500px]">
                <div className="w-full h-full relative overflow-hidden rounded-lg bg-gradient-to-br from-purple-100 to-pink-100 flex items-center justify-center">
                  <div className="absolute inset-0 opacity-10">
                    <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                      <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
                        <path d="M 10 0 L 0 0 0 10" fill="none" stroke="currentColor" strokeWidth="0.5" />
                      </pattern>
                      <rect width="100" height="100" fill="url(#grid)" />
                    </svg>
                  </div>
                  <img
                    src={images[currentImageIndex]}
                    alt={`Memory ${currentImageIndex + 1}`}
                    className="w-full h-full object-contain z-10"
                  />
                </div>

                <button
                  onClick={previousImage}
                  className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 p-2 rounded-full text-white hover:bg-black/75 z-20"
                >
                  <ChevronLeft className="h-4 w-4 md:h-6 md:w-6" />
                </button>

                <button
                  onClick={nextImage}
                  className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 p-2 rounded-full text-white hover:bg-black/75 z-20"
                >
                  <ChevronRight className="h-4 w-4 md:h-6 md:w-6" />
                </button>

                <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex space-x-2 z-20">
                  {images.map((_, index) => (
                    <div
                      key={index}
                      className={`h-1.5 w-1.5 md:h-2 md:w-2 rounded-full ${index === currentImageIndex ? 'bg-white' : 'bg-white/50'}`}
                    />
                  ))}
                </div>
              </div>

              {/* Personal Letter */}
              <div className="bg-purple-50 p-4 md:p-6 rounded-lg">
                <pre className="whitespace-pre-wrap font-sans text-gray-800 text-sm md:text-base">
                  {personalLetter}
                </pre>
              </div>
            </div>
          </DialogContent>
        </Dialog>

        {/* Second Dialog - Flowers */}
        <Dialog>
          <DialogTrigger asChild>
            <Button className="w-full sm:w-auto bg-yellow-400 text-brown-800 hover:bg-yellow-300 text-base md:text-lg px-4 md:px-8 py-4 md:py-6 rounded-full shadow-lg transition-transform hover:scale-105">
              Click for Flowers
            </Button>
          </DialogTrigger>

          <DialogContent className="max-w-[95vw] md:max-w-md max-h-[90vh] overflow-y-auto m-4">
            <DialogHeader>
              <DialogTitle className="text-xl md:text-2xl font-bold text-center mb-4">
                Figured you'd want some flowers! 🌻
              </DialogTitle>
            </DialogHeader>

            <div className="p-4 md:p-6">
              <img
                src="/images/sunflowers.jpg"
                alt="Bouquet of Sunflowers"
                className="w-full h-auto rounded-lg shadow-lg"
              />

              <p className="text-center mt-4 text-base md:text-lg text-gray-700">
                Nevermind a bouget here's a field for ya 🌻✨
              </p>
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
}
