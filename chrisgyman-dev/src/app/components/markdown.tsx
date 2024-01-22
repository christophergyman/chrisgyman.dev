import Markdown from 'react-markdown'
import { promises as fs } from 'fs';

interface MarkdownComponentProps {
    filepath: string; 
}

export async function MarkdownComponent({filepath}: MarkdownComponentProps){
    const source = filepath
    const file = await fs.readFile(process.cwd() + source , 'utf8');

    return(
        <div className='prose'>
            <Markdown>{file}</Markdown>
        </div>
    )
}