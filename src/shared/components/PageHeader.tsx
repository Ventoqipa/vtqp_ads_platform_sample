type Props={eyebrow:string;title:string;description:string};
export function PageHeader({eyebrow,title,description}:Props){return <header className="page-header"><p className="eyebrow">{eyebrow}</p><h2>{title}</h2><p>{description}</p></header>}
