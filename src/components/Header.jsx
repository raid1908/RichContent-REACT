import React from "react";
import Logo from "../components/Logo";
import SectionTtile from "./helpers/title";
import yogaImgv1 from "../media/Bitmap.png"

export default function Header(props){
    const {...rest} = props;
    return <>
        <Logo className='logo w-auto position-fixed start-0 top-0' alt="Lenovo Logo" />
        <header {...rest}>
            <div className="container">
                <article className="d-flex align-items-center justify-content-between">
                    <div className="text__section">
                        <SectionTtile type="h1" className="title lh-56 text-white gotham" text="Yoga S740 (14)" />
                        <SectionTtile type="h2" className="sub__title lh-56 text-white gotham" text="Wyróżniająca inteligencja" />
                        <p className="text-white fs-small gotham fw-light">Z komputerem Yoga S740 możesz pracować i korzystać z rozrywki w eleganckim stylu. Ten imponujący laptop w całkowicie metalowej obudowie działa z pełną mocą procesora Intel® Core™ 10. generacji i oferuje inteligentne, przydatne na co dzień funkcje. Lekki, ale wydajny, zapewnia wysokiej klasy funkcje rozrywkowe dzięki baterii wystarczającej na nawet 15 godzin, efektownemu wyświetlaczowi 4K VESA400 HDR oraz fantastycznemu dźwiękowi z technologią Dolby Atmos®.</p>
                    </div>
                    <img className='w-auto' src={yogaImgv1} alt="Lenovo Yoga S740 v1"/>
                </article>
            </div>
        </header>
    </>
}