import React from "react";
import TableRow from "./helpers/TableRow";
import SectionTitle from "./helpers/SectionTitle";
import Article from "./helpers/Article";
import yogaImgv6 from "../media/yoga740v6.webp";


export default function SpecificationTable(props){
    const {...rest} = props
    return <>
        <div {...rest}>
            <SectionTitle type="h2" className="title lh-60 " text="Specyfikacja" />
            <table className="col-12">
                <tbody>
                    <TableRow  specTitle="Procesor">
                        <p className="m-0">	Do Intel® Core™ i7 10. generacji</p>
                    </TableRow>
                    <TableRow  specTitle="System operacyjny">
                        <p className="m-0">Windows 10 Home</p>
                    </TableRow>
                    <TableRow  specTitle="Wyświetlacz">
                        <p className="m-0">14” UHD (3840 x 2160) HDR IPS, 500 nitów z Dolby Vision*</p>
                        <p className="m-0">14” FHD (1920 x 1080) IPS, 400 nitów z Dolby Vision</p>
                        <p className="m-0">Wąskie ramki ekranu: lewa/prawa: 3,4 mm, górna 6,7 mm, dolna: 11,8 mm</p>
                        <p className="m-0 star">* Spodziewana dostępność w modelu HDR z końcem 2019 r.</p>
                    </TableRow>
                    <TableRow  specTitle="Pamięć">
                        <p className="m-0">Do 16 GB pamięci LPDDR4X</p>
                    </TableRow>
                    <TableRow  specTitle="Bateria">
                        <p className="m-0">Do 15 godzin z wyświetlaczem FHD</p>
                        <p className="m-0">Do 10 godzin z wyświetlaczem UHD</p>
                        <p className="m-0 star">* Na podstawie testu MobileMark 2014. Czas działania baterii znacznie się różni w zależności od ustawień, sposobu wykorzystania i innych czynników.</p>
                    </TableRow>
                    <TableRow  specTitle="Pamięć masowa">
                        <p className="m-0">Do 1 TB PCIe SSD</p>
                    </TableRow>
                    <TableRow  specTitle="Grafika">
                        <p className="m-0">Intel® HD Iris</p>
                        <p className="m-0">Opcjonalnie: NVIDIA® GeForce® MX250 2GB</p>
                    </TableRow>
                    <TableRow  specTitle="Zabezpieczenia">
                        <p className="m-0">Kamera na podczerwień do logowania się bez użycia rąk</p>
                    </TableRow>
                    <TableRow  specTitle="Dźwięk">
                        <p className="m-0">Dolby Atmos® Speaker System</p>
                        <p className="m-0">Mikrofony dalekiego zasięgu</p>
                    </TableRow>
                    <TableRow  specTitle="Asystenci cyfrowi">
                        <p className="m-0">Cortana</p>
                        <p className="m-0">Alexa*</p>
                        <p className="m-0 star">* Spodziewana dostępność z końcem 2019 r. Tylko na wybranych rynkach.</p>
                    </TableRow>
                    <TableRow  specTitle="Kamera">
                        <p className="m-0">720p</p>
                    </TableRow>
                    <TableRow  specTitle="Wymiary (szer. x wys. x głęb.)">
                        <p className="m-0">322,3 mm x 212 x 14,9 mm krawędź przednia i 18,1 mm krawędź tylna</p>
                    </TableRow>
                    <TableRow  specTitle="Waga">
                        <p className="m-0">Od 1,4 kg</p>
                    </TableRow>
                    <TableRow  specTitle="Opcje kolorystyczne">
                        <p className="m-0">Iron Grey (żelaznoszary)</p>
                        <p className="m-0">Mika</p>
                    </TableRow>
                    <TableRow  specTitle="Łączność">
                        <p className="m-0">Intel® Wireless-AC 2x2</p>
                        <p className="m-0">Wi-Fi 6 (dostępność z końcem 2019 r.)</p>
                    </TableRow>
                    <TableRow  specTitle="Klawiatura">
                        <p className="m-0">Podświetlana klawiatura</p>
                    </TableRow>
                    <TableRow  specTitle="Gniazda">
                        <p className="m-0">USB-C (USB + DisplayPort + zasilanie + Thunderbolt™ 3)</p>
                        <p className="m-0">2 x USB 3.1 (2. generacji, jedno zawsze aktywne)</p>
                        <p className="m-0">Gniazdo słuchawek/mikrofonu</p>
                        <p className="m-0">Zasilanie</p>
                    </TableRow>
                </tbody>
            </table>
            <div className="addtional__Info">
                <p className="fs-small text-black text-end">Dane techniczne mogą zależeć od regionu</p>
            </div>
            <SectionTitle type="h2" className="title lh-60 " text="Specyfikacja" />
            <Article type="column-reverse" img={yogaImgv6} imageClassName="w-100" alt="Lenovo Yoga 740 v6">
                <ol>
                    <li>Zasilanie</li>
                    <li>USB 3.1 (Gen 2, zawsze aktywny)</li>
                    <li>USB-C (USB + DisplayPort + zasilanie + Thunderbolt™ 3)</li>
                    <li>Gniazdo słuchawek/mikrofonu</li>
                    <li>USB 3.1 (Gen 2)</li>
                </ol>
            </Article>
        </div>
    </>
}