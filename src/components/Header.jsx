import React from "react";
import Logo from "./helpers/Logo";
import Article from "./helpers/Article";
import SectionTitle from "./helpers/SectionTitle";
import yogaImgv0 from "../media/yoga740v0.webp"

export default function Header(props){
    const {...rest} = props;
    return <>
        <Logo className='logo position-fixed start-0 top-0' alt="Lenovo Logo" />
        <header {...rest}>
            <div className="container">
                <Article type="row" img={yogaImgv0} imageClassName="col-12 mt-xl-0 mt-5" alt="Lenovo Yoga 740 v0">
                    <SectionTitle type="h1" className="title lh-56 text-white gotham" text="Yoga S740 (14)" />
                    <SectionTitle type="h2" className="sub__title lh-56 text-white gotham" text="Wyróżniająca inteligencja" />
                    <p className="text-white gotham fs-small">Z komputerem Yoga S740 możesz pracować i korzystać z rozrywki w eleganckim stylu. Ten imponujący laptop w całkowicie metalowej obudowie działa z pełną mocą procesora Intel® Core™ 10. generacji i oferuje inteligentne, przydatne na co dzień funkcje. Lekki, ale wydajny, zapewnia wysokiej klasy funkcje rozrywkowe dzięki baterii wystarczającej na nawet 15 godzin, efektownemu wyświetlaczowi 4K VESA400 HDR oraz fantastycznemu dźwiękowi z technologią Dolby Atmos®.</p>
                </Article>
            </div>
        </header>
    </>
}