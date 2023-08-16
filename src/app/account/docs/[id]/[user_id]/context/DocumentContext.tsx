import { createContext } from 'react';

interface DocumentContextType {
    document: {
    _id: string
    title : string,
    text : string,
    date : string
    status: string,
    language: string,
    }
    setDocument: React.Dispatch<React.SetStateAction<any | undefined>>
}

export const DocumentContext = createContext<DocumentContextType | null>(null);