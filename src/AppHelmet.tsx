import React from 'react'
import { Helmet } from 'react-helmet-async'

interface Props {
    title: string
    children?: React.ReactNode
}
export function AppHelmet({ title, children }: Props) {
    return (
        <Helmet>
            <title>{title} | App 4</title>
            {children}
        </Helmet>
    )
}
