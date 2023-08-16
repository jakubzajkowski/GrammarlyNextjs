import { createContext } from 'react';

interface DocumentContextType {
    _id: string
    title : string,
    text : string,
    date : string
    status: string,
    language: string,
}

export const DocumentContext = createContext<DocumentContextType | null>(null);