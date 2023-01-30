import React from 'react'
import styled from 'styled-components';
import { Button } from '../../UI/Button';
import {ReactComponent as PlusIcons} from "../../../assets/icons/PlusIcons.svg"

function MealForm({id}) {
  return (
    <StyledForm>
        <Container>
          <label htmlFor={id}>Amout</label>
          <input type="number" id={id} min={1} max={5} defaultValue={1}/>
        </Container>
        
          <Button>
            <StyledIcon/> Add
            </Button>
       
    </StyledForm>
  );
}

export default MealForm

const StyledIcon=styled(PlusIcons)`
margin-right: 10px;
`

const Container=styled.div`
    margin-bottom: 12px;
    label {
        font-weight: 600;
        font-size: 18px;
        line-height: 27px;
        color: #222222;
    }
    input{
        width: 60px;
        height: 32px;
        border: 1px solid #d6d6d6;
        border-radius: 6px;
        padding: 4px 12px;
        outline: none;
        font-size: 16px;
        line-height: 24px;
        font-weight: 600;
    } 
    display: flex;
    align-items: center;
`

const StyledForm=styled.form`
    display: flex;
    align-items: flex-end;
    flex-direction: column;
`