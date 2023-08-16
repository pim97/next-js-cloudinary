"use client"

import { Button } from '@/components/ui/button';
import { CldUploadButton } from 'next-cloudinary';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function UploadButton() {

    const router = useRouter()

    const handleUpload = (results: any) => {
        // setImageId(results?.info?.public_id)
        setTimeout(() => {
            router.refresh()
        }, 1000)
    };

    return (
        <Button asChild>
            <CldUploadButton
                onUpload={handleUpload}
                uploadPreset="xsqkoejf"
            />
        </Button>
    );
}