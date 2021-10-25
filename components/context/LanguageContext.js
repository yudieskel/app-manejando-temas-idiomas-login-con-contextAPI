import { createContext, useState } from "react";

const LanguageContext = createContext();

    const initialLanguage = "es";

    const translations = {
        es: {
            headerTitle: "Mi aplicación con Context API",
            headerSubtitle: "Mi cabecera",
            headerLight: "Claro",
            headerDark: "Oscuro",
            buttonLogin: "Iniciar Sesión",
            buttonLogout: "Cerrar Sesión",
            mainWelcome: "Bienvenido invitado",
            mainHello: "Hola Usuario",
            mainContent: "Mi contenido principal",
            footerTitle: "Mi pié de página"
        },
        en: {
            headerTitle: "My aplication with Context API",
            headerSubtitle: "My header",
            headerLight: "Light",
            headerDark: "Dark",
            buttonLogin: "Login",
            buttonLogout: "Logout",
            mainWelcome: "Welcome Guest",
            mainHello: "Hello User",
            mainContent: "My main content",
            footerTitle: "My footer"
        }
    };
 
const LanguageProvider = ({children}) => {
    
    const [ language, setLanguage ] = useState(initialLanguage);
    const [ text, setText ] = useState(translations[language]);

    const handleLanguage = (e) => {
        //console.log("Al hacer click en los selects nos muestra:", e.target.value);
        if(e.target.value === "es") {
            setLanguage("es");
            setText(translations.es);
        } else {
            setLanguage("en");
            setText(translations.en);
        };
    };

    const data = { text, handleLanguage };

    return(
        <LanguageContext.Provider value={data}>{children}</LanguageContext.Provider>
    )
};

export {LanguageProvider};
export default LanguageContext;