import { useRouter } from "next/router";
import PtIndex from "./locales/pt-BR"
import EnIndex from "./locales/en-US"

export default function Index(){
    const router = useRouter();
    return(<>
        {router.locale==="pt-BR"?<PtIndex></PtIndex>:<EnIndex></EnIndex>}
</>
        
    )
}