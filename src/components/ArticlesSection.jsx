import React from "react";
import SectionTitle from "./helpers/SectionTitle";
import Article from "./helpers/Article";
import yogaImgv1 from "../media/yoga740v1.webp";
import yogaImgv2 from "../media/yoga740v2.webp";
import yogaImgv3 from "../media/yoga740v3.webp";
import yogaImgv4 from "../media/yoga740v4.webp";
import yogaImgv5 from "../media/yoga740v5.webp";

export default function ArticlesSection(props){
    const {children,...rest} = props;
    return <>
        <div {...rest}>
            <Article type="column-reverse" img={yogaImgv1} imageClassName="col-12  px-102" alt="Lenovo Yoga 740 v1">
                <SectionTitle type="h2" className="title lh-60 text-black mt-55" text="Pomysłowe technologie dla wszystkich" />
                <p className="text-black fs-normal">Lenovo poszerza zakres możliwości w nowych laptopach Yoga opracowanych wspólnie z firmą Intel® i wyposażonych w funkcje sztucznej inteligencji. Teraz możesz mówić do urządzenia i nim sterować z drugiego końca pokoju. Oglądać wideo o podwyższonej jakości w programie Windows Media Player. Unikać zmęczenia oczu dzięki wyświetlaczowi, który automatycznie zmniejsza natężenie światła niebieskiego odpowiednio do pory dnia. A to jeszcze nie wszystko.</p>
            </Article>
            <Article type="column" img={yogaImgv2} imageClassName="col-12  my-90" alt="Lenovo Yoga 740 v2">
                <SectionTitle type="h2" className="title lh-60 text-black mt-40" text="Sztuczna inteligencja i zdrowy rozsądek" />
                <p className="text-black fs-normal">Zaawansowany procesor Intel® Core™ 10. generacji do urządzeń mobilnych i utraprzenośny laptop Yoga S740 dostosowują się do Twoich potrzeb i stylu użytkowania. Razem tworzą rozwiązanie bardziej intuicyjne i osobiste, którego sztuczna inteligencja dynamicznie reaguje na Twoje działania i optymalizuje żywotność baterii.</p>
            </Article>
            <Article type="column" img={yogaImgv3} imageClassName="col-12  my-90" alt="Lenovo Yoga 740 v3">
                <SectionTitle type="h2" className="title lh-60 text-black" text="Potrzebujesz czegoś? Wystarczy poprosić." />
                <p className="text-black fs-normal">Yoga S740 ma mikrofony dalekiego zasięgu i inteligentne asystentki głosowe Alexę oraz Cortanę. Pomogą Ci złożyć zamówienie, ustawić przypomnienie czy odtworzyć muzykę — wystarczy poprosić z odległości do 4 metrów. To kolejny przykład przewagi, jaką daje Ci Yoga S740.</p>
                <p className="text-black fs-normal mt-5">Aby uzyskać więcej informacji o Cortanie, kliknij <a
                    href="#">tutaj</a> , a w celu uzyskania dodatkowych informacji o Alexie, kliknij <a href="#">tutaj</a>.</p>
                <SectionTitle type="h2" className="title lh-60 text-black mt-40" text="Mobilne kino" />
                <p className="text-black fs-normal">Wyświetlacz o przekątnej 14 cali w wąskiej jak brzytwa ramce prezentuje imponującą gamę kolorów i szczegółów. Ekran do poziomu 4K VESA400 HDR z jasnością 500 nitów i spektakularną technologią Dolby Vision™ oraz bogaty, wielowarstwowy dźwięk 3D z głośników z Dolby Atmos® oferują niezwykle realistyczną i wciągającą rozrywkę.</p>
            </Article>
            <Article type="column" img={yogaImgv4} imageClassName="col-12  my-90" alt="Lenovo Yoga 740 v4">
                <SectionTitle type="h2" className="title lh-60 text-black" text="Nie ma gniazdka? Nie ma problemu." />
                <p className="text-black fs-normal">Niezależnie od tego, czy pracujesz w terenie, czy też urządzasz sobie serialową noc na sofie, bateria eleganckiego i smukłego Yoga S740 ma w sobie wystarczająco dużo energii — na nawet 15 godzin działania.</p>
                <SectionTitle type="h2" className="title lh-60 text-black mt-40" text="Nowy poziom wydajności" />
                <p className="text-black fs-normal">Opcjonalna dedykowana karta graficzna NVIDIA® GeForce® MX250 zwiększa dodatkowo możliwości laptopa w zastosowaniach służbowych i rozrywkowych. Korzystaj z nawet 3,5-krotnie większej wydajności w porównaniu ze zintegrowaną kartą graficzną w aplikacjach do edycji zdjęć i wideo, a także z szybszej i płynniejszej gry.</p>
            </Article>
            <Article type="column" img={yogaImgv5} imageClassName="col-12  my-90" alt="Lenovo Yoga 740 v5">
                <SectionTitle type="h2" className="title lh-60 text-black" text="Intuicyjnie i interaktywnie" />
                <p className="text-black fs-normal">Kamera na podczerwień ułatwia życie. Wystarczy, że się oddalisz, a oglądany film zostanie automatycznie wstrzymany. Zawartość wyświetlacza laptopa możesz przenieść na dodatkowy monitor ruchem głowy. A to jeszcze nie wszystko. Laptop Yoga S740 reaguje na Twój styl użytkowania, dlatego możesz skupić się na tym, co ważne.</p>
                <SectionTitle type="h2" className="title lh-60 text-black mt-40" text="Zna Cię lepiej" />
                <p className="text-black fs-normal">Możesz na przykład logować się do niego samym uśmiechem. Dzięki kamerze na podczerwień i funkcji rozpoznawania twarzy Windows Hello możesz zacząć pracę trzy razy szybciej niż wpisując hasło. Jest też świetnie zabezpieczony.</p>
            </Article>
            <Article type="column" >
                <SectionTitle type="h2" className="title lh-60 text-black" text="Elegancki styl i mobilność" />
                <p className="text-black fs-normal">Yoga S740 ma obudowę z piaskowanego aluminium z wykończeniem wysokiej klasy i łączy w sobie wysoką wydajność z wygodną mobilnością. Ma jedynie 14,9 mm grubości, a waży zaledwie 1,4 kg i jest dostępny w kolorze żelaznoszarym lub z ciepłym, metalicznym mikowym wykończeniem.</p>
                <SectionTitle type="h2" className="title lh-60 text-black mt-40" text="Szybki i elastyczny" />
                <p className="text-black fs-normal">Yoga S740 ma port Thunderbolt™ 3. Pod względem szybkości przewyższa on port USB 3.0 aż 8 razy, dlatego stanowi najszybszy i najbardziej uniwersalny sposób łączenia z monitorami, stacjami dokującymi i pamięcią masową. Co więcej, służy też jako źródło zasilania. Laptop ma też szybką łączność Wi-Fi 6, dlatego możesz teraz wyświetlać strumieniowe wideo i przeglądać strony internetowe bez porównania płynniej.</p>
            </Article>
        </div>
    </>
}