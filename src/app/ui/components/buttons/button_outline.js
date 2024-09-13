import Link from "next/link";
import Text_body from "../text/text-body";

export default function Button_outline ({href, text, icon, className, target}){

    return(
        <>
        <Link href={href} target={target && '_blank'}>
            <button className={`${icon && 'flex gap-2'} border ${className}`}>
                <Text_body>{text}</Text_body>
                {icon}
            </button>
        </Link>
        
        </>
    )
}