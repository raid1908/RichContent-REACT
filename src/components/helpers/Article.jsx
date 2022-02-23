import React from "react";


export default function Article(props){
    const {type,img,children,imageClassName,...rest} = props;

    function handleArticleType() {
        if(type === "row"){
            return "d-flex align-items-center justify-content-between";
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
                    <div className="text__section">
                        {children}
                    </div>
                    <img className={imageClassName} {...rest}  src={img} />
                </article>
    </>
}