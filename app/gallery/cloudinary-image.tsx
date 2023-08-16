"use client"

import { CldImage } from 'next-cloudinary';

export default async function CloudinaryImage({ ...props }: any) {
    return (
        <CldImage
            {...props}
            width="400"
            height="400"
            sizes="100vw"
            alt="Description of my image"
        />
    )
}