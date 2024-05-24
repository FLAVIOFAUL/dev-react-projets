import React from "react";

import { ContainerItens as Conteiner } from "./styles";

function ContainerItens({children,isBlur}){


    return <Conteiner isBlur={isBlur}>{children}</Conteiner>
}

export default ContainerItens;