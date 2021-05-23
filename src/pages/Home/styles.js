import styled from 'styled-components'

export const ViewContainer = styled.View`
flex: 1;
background-color: #131313;

`;

export const ViewNomeSaldo = styled.View`
margin-left: 10px;
`;

export const Nome = styled.Text`
color: white;
font-size: 19px;
font-style: italic;

`;

export const Saldo = styled.Text`
margin-top: 5px;
color: white;
font-size: 30px;
font-weight: bold;
`;

export const TextMovimentacao = styled.Text`
margin-left: 15px;
color: #00b94a;
margin-bottom: 10px;
`;

export const List = styled.FlatList`
padding-top: 15px;
background-color: #fff;
border-top-left-radius: 15px;
border-top-right-radius: 15px;
margin-left: 8px;
margin-right: 8px;
`;