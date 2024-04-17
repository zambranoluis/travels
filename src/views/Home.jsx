import FormularioVuelos from "../components/home/FormularioVuelos";
import FormularioHoteles from "../components/home/FormularioHoteles";
import FormularioTraslados from "../components/home/FormularioTraslados";

const styles = {
    mainHome: "",

    secttionVuelos: "",

    sectionHoteles: "",

    sectionTraslados: "",
}

const Home = () => {
    return (
        <main>
            <h1 className=" font-bold text-[2rem]">Home</h1>
            <section>
                <h1 className=" font-bold text-[2rem]">Vuelos</h1>
                <FormularioVuelos />
            </section>

            <section>
                <h1 className=" font-bold text-[2rem]">Hoteles</h1>
                <FormularioHoteles />
            </section>
            
            <section>
                <h1 className=" font-bold text-[2rem]">Traslados</h1>
                <FormularioTraslados />
            </section>
        </main>
    );
}

export default Home;