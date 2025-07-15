import React from 'react'
import { Helmet } from 'react-helmet-async'

interface Props {
    title: string
    children?: React.ReactNode
}
export function AppHelmet({ title }: Props) {
    return (
        <Helmet>
            <title>{`${title} | ${import.meta.env.VITE_APP_TITLE}`}</title>
        </Helmet>
    )
}
