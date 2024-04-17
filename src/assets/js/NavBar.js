const styles = {

    navSmall: "flex flex-col sm:hidden h-[150px] ",

    navTopSmall:"flex  h-[100px] justify-around items-center",

    divLinkLogoSmall: "flex w-[60%] min-[450px]:w-[40%]  justify-center items-center  ",
    linkLogoSmall: "",
    imgLogoSmall:"w-full w-[200px]",

    divButtonCallSmall: "flex w-[40%] justify-center items-center ",
    buttonCallSmall: "flex justify-center items-center px-2 py-1 gap-2 bg-[#134153] hover:bg-[#00a4a4] rounded-xl",
    gifButtonSmall: "h-[30px] w-[30px]",
    textButtonSmall: "text-center",

    divUserPictureSmall:"hidden min-[450px]:flex w-[25%] justify-center items-center ",
    userPictureSmall:"rounded-full w-[90px] h-[90px] border-[5px] border-[#0d436f] hover:border-[#00a4a4] hover:cursor-pointer  ",


    navBottomSmall: "flex  h-[50px] w-full p-2",

    divLinksSmall: "flex w-full justify-evenly items-center ",
    linkSmall: "flex text-2xl font-bold hover:text-[#00a4a4]",




    navLarge: "hidden  w-full h-[150px]  sm:flex justify-around items-center",

    divLinkLogoLarge: " w-[40%] lg:w-[35%] flex justify-center items-center ",
    linkLogoLarge: " flex justify-center items-center ",
    imgLogoLarge:"w-full max-w-[300px]",

    

    divLinksLarge: "w-[45%] lg:w-[50%] flex justify-start items-center ",
    linkLarge: "flex justify-center items-center text-lg text-white font-bold hover:text-[#00a4a4] p-2",

    divButtonCallLarge: " lg:w-[20%] hidden lg:flex justify-center items-center ",
    buttonCallLarge: "flex  bg-[#134153] rounded-md hover:bg-[#1a6c6c]",
    gifButtonLarge: "h-[30px] w-[30px]",
    textButtonLarge: "text-center",

    divUserPictureLarge: " w-[15%] lg:w-[15%] flex justify-center items-center ",
    userPictureLarge: "rounded-full  w-[100px] h-[100px] border-[5px] border-[#0d436f] hover:border-[#00a4a4] hover:cursor-pointer ",

}

const sitios = [
    {
        id: 0,
        nombre: "Destinos",
        url: "/destinos",
    },
    {
        id: 1,
        nombre: "Hospedaje",
        url: "/hospedaje",
    },
    {
        id: 2,
        nombre: "Traslados",
        url: "/traslados",
    }

]

export {
    styles,
    sitios
}