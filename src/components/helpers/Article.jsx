import React from "react";
import {LazyLoadImage} from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';


export default function Article(props){
    const {type,img,children,imageClassName,...rest} = props;

    function handleArticleType() {
        if(type === "row"){
            return "d-flex align-items-center justify-content-between flex-xl-row flex-column";
        }
        else if(type === "column"){
            return "d-flex flex-column align-items-center justify-content-between"
        }
        else{
            return "d-flex flex-column-reverse align-items-center justify-content-between"
        }
    }

    return <>
                <article className={handleArticleType()}>
                    <div className="text__section col-12">
                        {children}
                    </div>
                    {img ? <LazyLoadImage className={imageClassName} effect="blur" {...rest}  src={img}/> : ""}
                </article>
    </>
}