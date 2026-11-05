import { Project } from '@/data/projects'

interface Props{
    project: Project
    gridColumn?: string // Para el grid desde afuera
}

export default function PortfolioCard ({project, gridColumn }: Props){
    const {media, tag, tagClass, title, desc, href, size } = project

    return (
        <a 
            className={`portfolioCard ${size}`}
            href={href}
            target='_blank'
            rel='noreferrer'
            style={gridColumn ? {gridColumn} : undefined}
        >
            <div className='cardBg'>
                {media.type === 'gradient' && (
                    <div style={{ background : media.value, position : 'absolute', inset:0}}/>
                )}
                {media.type === 'image' && (
                    <img
                        src={media.value} 
                        alt={title}
                        style={{width: '100%', height:'100%', objectFit:'cover'}}
                    />
                )}
            </div>

            {/*Contenido */}
            <div className='cardContent'>
                <span className={`cardTag ${tagClass}`}>{tag}</span>
                <h3 className='cardTitle'>{title}</h3>
                <p className='cardDesc'>{desc}</p>
            </div>

            <div className='cardArrow'>↗</div>
            
        </a>
    )
}