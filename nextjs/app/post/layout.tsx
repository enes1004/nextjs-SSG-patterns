import { LARAVEL_API } from "@/config/laravel_api";
import PostNaviLink, { PostNaviLinkProps } from "./_component/PostNaviLink";
import styles from './layout.module.css';
// export function generateStaticParams(){
    
// }

export default async function Layout({
    children,
  }: {
    children: React.ReactNode
  }){
    const links: PostNaviLinkProps[] = await fetch(`${LARAVEL_API}/api/post`).then(res=>res.json());

    return <>
        <header>ヘッダーです</header>
        {children}

        <div className={styles.navi}>
            <h2>他の記事</h2>
            <div className={styles.flexBox}>
            {links.sort((i,j)=>0.5-Math.random()).map(
                (link)=>
                    <div key={link.id} className={styles.naviItem}><PostNaviLink  {...link}/></div>
                    )
            }
            </div>
        </div>
    </>
}