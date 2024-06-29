// import Component

import BrandComponent from "../components/BrandComponent";
import CarouselComponent from "../components/CarouselComponent";
import FooterComponent from "../components/FooterComponent";
import NavbarComponent from "../components/NavbarComponent";
import UnggulanComponent from "../components/UnggulanComponent";



const LandingPage = () => {
    return (
        <>
        <NavbarComponent/>

            <div id="banner">
                <CarouselComponent/>
                <BrandComponent/>
            </div>
            
            <UnggulanComponent kategori={"Unggulan"}/>
            <UnggulanComponent kategori={"Lainnya"}/>

<FooterComponent/>
        </>
    );
}

export default LandingPage;