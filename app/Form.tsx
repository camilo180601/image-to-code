'use client'
import React from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

const Form = ({
    transformUrlToCode
} : { transformUrlToCode : (url: string) => void }) => {

    const handleSubmit = (e: any) => {
        e.preventDefault()
        const form = e.currentTarget as HTMLFormElement
        const url = form.elements.namedItem('url') as HTMLInputElement
        transformUrlToCode(url.value)
    }
    return (
        <form onSubmit={handleSubmit} className='flex flex-col gap-10'>
            <Label htmlFor='url'>Introduce la url de la imagen</Label>
            <Input id='url' type='url' placeholder='https:://tu-screenshoot/image.jpg'/>
            <Button>Generar codigo de la imagen</Button>
        </form>
    )
}

export default Form