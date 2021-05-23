import styled from 'styled-components'

export const ViewContainer = styled.View`
margin-bottom: 5px;
padding: 10px;
box-shadow: 2px 2px rgba(0,0,0,0.4);
background-color: rgba(0,0,0,0.03);

`;
export const ViewTipo = styled.View`
flex-direction: row;
`;
export const ViewIcone = styled.View`
flex-direction: row;
background-color: ${props => props.tipo === 'despesa' ? '#c62c36' : '#049301'};
padding-bottom: 3px;
padding-top: 3px;
padding-right: 8px;
padding-left: 8px;
border-radius: 7px;
`;
export const TextIcone = styled.Text`
color: white;
font-size: 15px;
font-style: italic;
padding-left: 3px;
`;
export const TextValor = styled.Text`
color: #222;
font-size: 20px;
font-weight: bold;
`;
