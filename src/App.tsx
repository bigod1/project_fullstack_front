import { AxiosInterceptor } from "./components/AxiosInterceptor"
import { AuthProvider } from "./providers/AuthProvider"
import { RoutesMain } from "./routes"
import GlobalStyle from "./styles/GlobalStyle"


function App() {

    return (
        <>
            <GlobalStyle />
            <AxiosInterceptor>
                <AuthProvider>
                    <RoutesMain />
                </AuthProvider>
            </AxiosInterceptor>
        </>
    )
}

export default App
