"use client"

import Image from 'next/image'
import { CldImage } from 'next-cloudinary';
import { useState } from 'react';

interface CldUploadWidgetResults {
  event?: string;
  info?: {
    public_id: string;
    // Other properties that might exist in the 'info' object
  };
}

export default function Home() {

  const [imageId, setImageId] = useState("")

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">


      {imageId && <CldImage
        width="960"
        height="600"
        src={imageId}
        sizes="100vw"
        alt="Description of my image"
      />
      }

    </main>
  )
}
