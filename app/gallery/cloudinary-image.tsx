"use client"

import { CldImage } from 'next-cloudinary';
import HeartIcon from './heart-icon';

import { setAsFavoriteAction } from './actions';
import { useTransition } from 'react'
import { SearchResult } from './page';
import HeartIconFull from './heart-icon-full';

export default function CloudinaryImage(props: any & SearchResult) {

    const [transition, startTransition] = useTransition();

    const { image_data } = props

    const isFavorited = image_data.tags.includes('favorite')

    return (
        <div className="relative">
            <CldImage
                {...props}
                width="400"
                height="400"
                sizes="100vw"
                alt="Description of my image"
            />
            {isFavorited ? (
                <HeartIconFull
                    onClick={() => {
                        startTransition(() => {
                            setAsFavoriteAction(image_data.public_id, false);
                        });
                    }}
                    className="w-8 h-8 absolute top-2 right-2 text-red-600 hover:text-red-500 cursor-pointer" />

            ) : (
                <HeartIcon
                    onClick={() => {
                        startTransition(() => {
                            setAsFavoriteAction(image_data.public_id, true);
                        });
                    }}
                    className="w-8 h-8 absolute top-2 right-2 hover:text-red-600 cursor-pointer" />
            )}

        </div>
    )
}