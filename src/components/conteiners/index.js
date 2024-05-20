import React from "react";

import { ContainerItens as Conteiner } from "./styles";

function ContainerItens({children,isBluer}){


    return <Conteiner isBluer={isBluer}>{children}</Conteiner>
}

export default ContainerItens;