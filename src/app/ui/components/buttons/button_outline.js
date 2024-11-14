import Link from "next/link";
import Text_body from "../text/text-body";

export default function Button_outline ({href, text, icon, className, target, iconFirst, hiddenText}){

    return(
        <>
        <Link href={href} target={target && '_blank'}>
            <button className={`${icon && 'flex gap-2'} ${iconFirst && 'flex-row-reverse justify-center'} border ${className}`}>
                {text && <p className={hiddenText && 'hidden xl:block'}>{text}</p>}
                {icon}
            </button>
        </Link>
        
        </>
    )
}