// Markdown.tsx
import ReactMarkdown from 'react-markdown'
import SyntaxHighlight from './SyntaxHighlight'

export default function Markdown(props) {
    return (
        <div className='markdown'>
            <ReactMarkdown
                components={SyntaxHighlight}
                {...props}
            />
        </div>
    )
}