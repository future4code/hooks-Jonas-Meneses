import React from "react";
import styled from "styled-components";

const IconContainer = styled.div`
    width: 20px;
    height: 20px;
`
const ImgIcon = styled.img`
    width: 100%;
    height: 100%;
`

const IconeSemContador = (props) =>{
    return(
        <IconContainer>
            <ImgIcon src={props.img} onClick={props.onClickIcon} />
        </IconContainer>

    )
}

export default IconeSemContador