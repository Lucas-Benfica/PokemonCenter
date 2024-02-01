import styled from "styled-components";

export const FormSelect = styled.div<{ open: boolean }>`
    position: relative;
    width: 100%;
    height: 45px;
    padding: 0 14px;
    
    display: flex;
    align-items: center;
    justify-content: space-between;
    
    margin-top: 8px;
    
    border: 1px solid var(--border);
    border-radius: ${(props) => (props.open) ? "8px 8px 0 0" : "8px"};
    
    color: var(--inputsform);
    font-size: 14px;
    font-weight: 500;
    background-color: var(--white);
    cursor: pointer;

    > span {
        font-weight: 300;
        font-size: 32px;
        color: var(--inputsform);
        rotate: ${(props) => (props.open) ? "-90deg" : "90deg"};
        transition: rotate 0.3s;
    }
`;

export const OptionList = styled.div`
    position: absolute;
    top: 103%;
    left: 0;
    width: 100%;
    max-height: 200px;
    overflow-y: auto;
    border: 1px solid var(--border);
    border-top: none;
    border-radius: 0 0 8px 8px;
    background-color: var(--white);
    z-index: 1;
    box-shadow: 0px 4px 4px 0px #00000017;
`;

export const Option = styled.div`
    padding: 8px 16px;
    cursor: pointer;
    font-size: 14px;
    font-weight: 500;
    color: var(--inputsform);

    &:hover {
        color: var(--red);
    }
`;