import { IoHome } from "react-icons/io5";

import GifNotFound from "../assets/notfound/GifNotFound.gif"

const styles = {

    mainNotFound : "flex pt-6 pb-2 w-full justify-center items-center ",

    sectionNotFound : "flex flex-col w-[90%]  justify-center items-center ",

    titleNotFound: "text-3xl font-bold text-center text-[#00a4a4] ",

    imgNotFound : "py-5 min-[500px]:h-[400px] ",

    textNotFound : "text-2xl text-center text-[#00a4a4]",

    buttonNotfound : " mt-5 flex justify-center items-center px-2 py-1 gap-2 bg-[#134153] hover:bg-[#00a4a4] rounded-xl",

    iconButtonNotFound : "",


}

const NotFound = () => {
    return (
        <main className={styles.mainNotFound} >
            <section className={styles.sectionNotFound} >
                <h1 className={styles.titleNotFound} >Sitio no encontrado</h1>
                <img src={GifNotFound} alt="GifNotFound" className={styles.imgNotFound} />
                <p className={styles.textNotFound} >El sitio que buscas no existe.</p>
                <p className={styles.textNotFound} >Por favor verifica el URL e intenta acceder nuevamente</p>
                <button className={styles.buttonNotfound}><IoHome className={styles.iconButtonNotFound} />Volver al Inicio</button>
            </section>
        </main>
    );
}

export default NotFound;