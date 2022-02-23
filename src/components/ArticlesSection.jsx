import React from "react";
import SectionTtile from "./helpers/Title";
import Article from "./helpers/Article";
import yogaImgv1 from "../media/yoga740v1.png";
import yogaImgv2 from "../media/yoga740v2.png";
import yogaImgv3 from "../media/yoga740v3.png";
import yogaImgv4 from "../media/yoga740v4.png";

export default function ArticlesSection(props){
    const {children,...rest} = props;
    return <>
        <div {...rest}>
            <Article type="column-reverse" img={yogaImgv1} imageClassName="w-100 px-102" alt="Lenovo Yoga 740 v1">
                <SectionTtile type="h2" className="title lh-60 text-black mt-55" text="Yoga S740 (14)" />
                <p className="text-black fs-normal">Z komputerem Yoga S740 możesz pracować i korzystać z rozrywki w eleganckim stylu. Ten imponujący laptop w całkowicie metalowej obudowie działa z pełną mocą procesora Intel® Core™ 10. generacji i oferuje inteligentne, przydatne na co dzień funkcje. Lekki, ale wydajny, zapewnia wysokiej klasy funkcje rozrywkowe dzięki baterii wystarczającej na nawet 15 godzin, efektownemu wyświetlaczowi 4K VESA400 HDR oraz fantastycznemu dźwiękowi z technologią Dolby Atmos®.</p>
            </Article>
            <Article type="column" img={yogaImgv2} imageClassName="w-100" alt="Lenovo Yoga 740 v2">
                <SectionTtile type="h2" className="title lh-60 text-black mt-40" text="Yoga S740 (14)" />
                <p className="text-black fs-normal">Z komputerem Yoga S740 możesz pracować i korzystać z rozrywki w eleganckim stylu. Ten imponujący laptop w całkowicie metalowej obudowie działa z pełną mocą procesora Intel® Core™ 10. generacji i oferuje inteligentne, przydatne na co dzień funkcje. Lekki, ale wydajny, zapewnia wysokiej klasy funkcje rozrywkowe dzięki baterii wystarczającej na nawet 15 godzin, efektownemu wyświetlaczowi 4K VESA400 HDR oraz fantastycznemu dźwiękowi z technologią Dolby Atmos®.</p>
            </Article>
            <Article type="column" img={yogaImgv3} imageClassName="w-100" alt="Lenovo Yoga 740 v1">
                <SectionTtile type="h2" className="title lh-60 text-black" text="Yoga S740 (14)" />
                <p className="text-black fs-normal">Z komputerem Yoga S740 możesz pracować i korzystać z rozrywki w eleganckim stylu. Ten imponujący laptop w całkowicie metalowej obudowie działa z pełną mocą procesora Intel® Core™ 10. generacji i oferuje inteligentne, przydatne na co dzień funkcje. Lekki, ale wydajny, zapewnia wysokiej klasy funkcje rozrywkowe dzięki baterii wystarczającej na nawet 15 godzin, efektownemu wyświetlaczowi 4K VESA400 HDR oraz fantastycznemu dźwiękowi z technologią Dolby Atmos®.</p>
                <SectionTtile type="h2" className="title lh-60 text-black mt-40" text="Yoga S740 (14)" />
                <p className="text-black fs-normal">Z komputerem Yoga S740 możesz pracować i korzystać z rozrywki w eleganckim stylu. Ten imponujący laptop w całkowicie metalowej obudowie działa z pełną mocą procesora Intel® Core™ 10. generacji i oferuje inteligentne, przydatne na co dzień funkcje. Lekki, ale wydajny, zapewnia wysokiej klasy funkcje rozrywkowe dzięki baterii wystarczającej na nawet 15 godzin, efektownemu wyświetlaczowi 4K VESA400 HDR oraz fantastycznemu dźwiękowi z technologią Dolby Atmos®.</p>
            </Article>
            <Article type="column" img={yogaImgv4} imageClassName="w-100" alt="Lenovo Yoga 740 v1">
                <SectionTtile type="h2" className="title lh-60 text-black" text="Yoga S740 (14)" />
                <p className="text-black fs-normal">Z komputerem Yoga S740 możesz pracować i korzystać z rozrywki w eleganckim stylu. Ten imponujący laptop w całkowicie metalowej obudowie działa z pełną mocą procesora Intel® Core™ 10. generacji i oferuje inteligentne, przydatne na co dzień funkcje. Lekki, ale wydajny, zapewnia wysokiej klasy funkcje rozrywkowe dzięki baterii wystarczającej na nawet 15 godzin, efektownemu wyświetlaczowi 4K VESA400 HDR oraz fantastycznemu dźwiękowi z technologią Dolby Atmos®.</p>
                <SectionTtile type="h2" className="title lh-60 text-black mt-40" text="Yoga S740 (14)" />
                <p className="text-black fs-normal">Z komputerem Yoga S740 możesz pracować i korzystać z rozrywki w eleganckim stylu. Ten imponujący laptop w całkowicie metalowej obudowie działa z pełną mocą procesora Intel® Core™ 10. generacji i oferuje inteligentne, przydatne na co dzień funkcje. Lekki, ale wydajny, zapewnia wysokiej klasy funkcje rozrywkowe dzięki baterii wystarczającej na nawet 15 godzin, efektownemu wyświetlaczowi 4K VESA400 HDR oraz fantastycznemu dźwiękowi z technologią Dolby Atmos®.</p>
            </Article>
        </div>
    </>
}